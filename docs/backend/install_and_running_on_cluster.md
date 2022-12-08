---
id: install-and-running-on-cluster
title: Installing and running the backend cluster
---

## Preconditions

### Kubernetes Cluster

The Online-Beratung counseling service is deployed via Kubernetes. In order to run it, a Kubernetes cluster has to be provided.
A local setup for testing or development purposes can be achieved with minikube or the Docker desktop K8S.

### Resource Requirements

In order to run the backend in a stable manner, the cluster must have sufficient resources available.
Make sure that at least `10GB RAM` and `3GB SWAP` and `2 CPUs` are provided.

### Kubernetes Deployment Template

The complete Kubernetes deployment can be found in the [public template repository](https://github.com/Onlineberatung/onlineBeratung-k8s-config).
Make sure you have checked out the repository or your fork of it.

## Installation

### Preparation steps required for productive use
These steps are not required for local testing or development setups.

1. A domain name has to be registered and a DNS entry has to be made for it and all required subdomains found in `values.yaml`
2. Changes in `values.yaml`
   - Enter your domain name, replacing every occurrence of `onlineberatung.localhost`
   - Enable TLS
   - Change all Spring profiles to `prod`
   - Enter credentials for a mail server
3. Changes in `values-secrets.yaml`
   - Change all default passwords **except**
     - `keycloakserviceAdminPassword`
     - `keycloakserviceTechnicalPassword`
     - `rocketTechnicalPassword`
     - `rocketSystemuserPassword`
   - Enter credentials for a mail server

Both `values.yaml` and `values-secrets.yaml` must be saved for future changes and deployments.
The `values.yaml` file can be committed and stored in a fork of the repository.
However, the `values-secrets.yaml` must not be committed to any repository and should instead be kept in a secret- or password-manager.
   
### Deploying the template to the cluster

The steps for deploying to the cluster for local and production use can be found in the [public template repository](https://github.com/Onlineberatung/onlineBeratung-k8s-config)

### Post-install steps for productive use

1. Access **Keycloak** via `<yourdomain>/auth`, login with the credentials `admin`/`admin` and change the passwords of the users
   - Keycloak-Admin via `<yourdomain>/auth/realms/master/account/`
   - `admin`
   - `realmadmin`
   - `technical`
2. Access **RocketChat** via `<yourdomain>:3000`, login with the credentials from `values-secrets.yaml` and change the passwords of the users
   - `admin`
   - `technical`
   - `system`
3. Enter the changed passwords in `values-secrets.yaml`
4. Deploy the changed values as described in the [public template repository](https://github.com/Onlineberatung/onlineBeratung-k8s-config) via an `helm upgrade`