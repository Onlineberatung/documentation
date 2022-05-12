---
id: jenkins
title: Setting up the build process via Jenkins
---
In each repository there is a Jenkinsfile that can be used for the build process via Jenkins:

`\Jenkinsfile`

To set up the build pipeline, a new job of type __Pipeline__ is created in Jenkins.

## Parameterization
The job should be marked as parameterized ("This build is parameterized") and a _text parameter_ should be created:

```
Text-parameter
Name: BRANCH_NAME
Default value: <name of the desired default branch, e.g. develop>.
```

This allows to specify the branch for which the build should be performed when starting the build process.

## Pipeline
In the pipeline definition, the type __Pipline script from SCM__ is selected and access to the repository is configured accordingly. If necessary, the user data must also be specified here.  

As __Branches to build__ the variable from the parameterization should be specified as follows:

`*/${BRANCH_NAME}`

## Global system variables
For the execution of the build process, the following global variables must still be defined in Jenkins (_Manage Jenkins_ -> _Configure System_ -> _Global Properties_ -> _Environment Variables_).

```
ARTIFACT_GROUP=<Artefakt-Gruppe für alle Services, z.B. online-beratung>
ARTIFACT_NAME_MAILSERVICE=<Artefakt-Name für diesen Service, z.B. mailservice>
DOCKER_REGISTRY=<Docker-Registry-Name>
DOCKER_REGISTRY_URL=<Docker-Registry-URL mit Protokoll (z.B.https)>
DOCKER_REGISTRY_CREDENTIALS_ID=<Jenkins-ID der Credentials für die Registry>
```