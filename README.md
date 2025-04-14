# 314n Helm Chart
![CI](https://img.shields.io/github/actions/workflow/status/katzterd/314n/helm-build.yml?label=Chart&logo=helm&style=for-the-badge)

## Get Repository

```console
helm repo add 314n https://katzterd.github.io/314n
helm repo update
```

## Install chart

```console
helm install <my-release> (--set <key1=val1,key2=val2,...>) 314n/314n -n <namespace> --create-namespace
```

## Uninstall chart

```console
helm -n <namespace> delete <my-release>
```

## Configuration

| Parameter                                  | Description                                   | Default Value                                           |
|--------------------------------------------|-----------------------------------------------|---------------------------------------------------------|
| `svc.torgate.enable`                       | "true" to enable torgate                      | None (Disabled)                                         |
| `svc.i2pgate.enable`                       | "true" to enable i2pgate                      | None (Disabled)                                         |
| `svc.yggdrasilgate.enable`                 | "true" to enable yggdrasilgate                | None (Disabled)                                         |
| `registry`                                 | Override Container registry                   | `ghcr.io/katzterd/314n`                                |
| `secretsName`                              | Override secrets name                         | `314n-secrets`                                          |
| `storageClass.name`                        | Override storage class name                   | `314n-sc`                                               |
| `dbSpace`                                  | Size of database free space (in Gi)           | `25Gi`                                                  |
| `imagePullSecretName`                      | For pulling from private registry             | None                                                    |


### Pulling from private registry
```console
kubectl -n <namespace> create secret generic <imagePullSecretName> \ 
    --from-file=.dockerconfigjson=/path/to/.docker/config.json \
    --type=kubernetes.io/dockerconfigjson
```

## Get yggdrasil node address (if enabled)
```console
kubectl -n <namespace> exec -t deployments/yggdrasil -- /docker-entrypoint.sh getaddr
```
