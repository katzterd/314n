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
helm delete -n <namespace> <my-release>
```

## Configurable options

| Parameter                               | Description                              | Default Value                 |
| --------------------------------------- | ---------------------------------------- | ----------------------------- |
| `torgate.enable`                        | "true" to enable torgate                 | None (disabled)               |
| `i2pgate.enable`                        | "true" to enable i2pgate                 | None (disabled)               |
| `yggdrasilgate.enable`                  | "true" to enable yggdrasilgate           | None (disabled)               |
| `registry`                              | Override Container registry              | `ghcr.io/katzterd/314n`       |
| `secret`                                | Override secrets name                    | `314n-secret`                 |
| `db.persistentVolume.storageClass.name` | Override storageClass name for database  | None (default)                |
| `db.persistentVolume.size`              | Size of database free space (in Gi)      | `10Gi`                        |
| `imagePullSecrets`                      | For pulling from private registry        | None (Array, see values.yaml) |
| `app.podAnnotations`                    | Custom Annotations for app pod           | None                          |
| `db.podAnnotations`                     | Custom Annotations for db pod            | None                          |
| `torgate.podAnnotations`                | Custom Annotations for torgate pod       | None                          |
| `i2pgate.podAnnotations`                | Custom Annotations for i2pgate pod       | None                          |
| `yggdrasilgate.podAnnotations`          | Custom Annotations for yggdrasilgate pod | None                          |
| `app.podLabels`                         | Custom Labels for app pod                | None                          |
| `db.podLabels`                          | Custom Labels for db pod                 | None                          |
| `torgate.podLabels`                     | Custom Labels for torgate pod            | None                          |
| `i2pgate.podLabels`                     | Custom Labels for i2pgate pod            | None                          |
| `yggdrasilgate.podLabels`               | Custom Labels for yggdrasilgate pod      | None                          |

### Pulling from private registry

```console
kubectl create -n <namespace> secret generic <imagePullSecretName> \
    --from-file=.dockerconfigjson=/path/to/.docker/config.json \
    --type=kubernetes.io/dockerconfigjson
```

## Get yggdrasil node address (if enabled)

```console
kubectl exec -n <namespace> -t deployments/<my-release>-yggdrasilgate -- /docker-entrypoint.sh getaddr
```
