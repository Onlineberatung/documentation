---
id: git-workflow
title: Git workflow
---
The Git workflow used in this project is based on the "Gitflow Workflow" model. See [this article](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for more information.

## Branches

### Master and Develop Branch
The master branch stores the official release history, and the develop branch serves as an integration branch for features.

### Feature Branches
**naming convention:** Feature/title-of-feature *or* Bugfix/title-of-bug

Each new feature or bugfix should reside in its own feature branch, which use the latest version of the develop as their parent branch. When a feature is complete, it gets merged back into develop. Features should never interact directly with master.

### Release Branches
**naming convention:** Release/x.x.x

the automated versioning process is based on the name of the release branch. Therefore, it is important that the naming convention is followed and the branch begins with the keyword "release". More information about the versioning process can be found [here](#version-management).

Once develop has acquired enough features for a release (or a predetermined release date is approaching), a release branch needs to be created based on the latest develop version. Creating this branch starts the next release cycle, so no new features can be added after this point—only bug fixes, documentation generation, and other release-oriented tasks should go in this branch. Once it's ready to ship, the release branch gets merged into master and tagged with a version number. In addition, it should be merged back into develop, which may have progressed since the release was initiated.

### Hotfix Branches
**naming convention:** Hotfix/title-of-hotfix

Maintenance or “hotfix” branches are used to quickly patch production releases. Hotfix branches are a lot like release branches and feature branches except they're based on master instead of develop. This is the only branch that should fork directly off of master. As soon as the fix is complete, it should be merged into both master and develop (or the current release branch)

## Commits

We use the specification [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for all our commits. It's a lightweight convention on top of commit messages and provides an easy set of rules for creating an explicit commit history. This helps us to automate our [versioning process](#version-management).

We recommend using the command line tool [Commitizen](http://commitizen.github.io/cz-cli/) in order to comply with this convention without much effort.

To ensure that all commits are conform to the convention, we trigger the commit message linter [Commitlint](https://github.com/conventional-changelog/commitlint) with the tool [Husky](https://github.com/typicode/husky) on git hook (before each commit).

## version management

We automatically generate the versioning and changelogs for each release branch with the help of [Standard Version](https://github.com/conventional-changelog/standard-versionhttps://github.com/conventional-changelog/standard-version). 

Based on the conventional commits, the new version number of the release is determined. If there is at least one breaking change, the major version will be increased. One or more feature will increase the minor version and one or more fix will increase the patch version. Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in semantic versioning.

This process is triggered by a push to a release branch and can be viewed on Github under the release tab of the respective repository.
