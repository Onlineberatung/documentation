/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('general/home.html')}>Docs</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <div className="mainContainer__projectDescription">
            <p>
              The Online-Beratung counseling service is a user-centered,
              responsive, data protection-compliant and browser-based counseling
              platform on which psychosocial counseling between those seeking
              advice and professionals can take place. For offering this
              professional counseling service online it is important that:
            </p>
            <ul>
              <li>anonymity is possible,</li>
              <li>
                different fields of expertise can be reached and combined,
              </li>
              <li>varying consulting settings can be chosen.</li>
            </ul>
            <p>
              There is also a need for such advisory platforms in other sectors,
              so that we would like to make our developments available to the
              general public and encourage joint further development. The work
              on this platform is supported by the German Federal Ministry
              of Family Affairs.
            </p>
            <p>
              In this documentation you will find information on how to set up,
              run and contribute to the project.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
