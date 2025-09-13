# 314n

_opensource console board | since 2012_

![CI](https://img.shields.io/github/actions/workflow/status/katzterd/314n/docker-build.yml?label=CI&logo=github&style=for-the-badge)

## Installation

### Docker compose way

#### 1. Prepare .env

```console
cp .env-dist .env
```

Then fill fields in `.env` by your text editor with desired values

#### 2. Deploy

```console
docker compose up -d
```

#### 3. Setup db and admin account

```console
docker exec -t app /docker-entrypoint.sh createdb createadmin
```

you can simply remove `createadmin` from this line, if you don't need admin account

frontend will appear on `http://localhost:80`

#### (Optional) Get yggdrasil node address (if enabled)

```console
docker exec -t yggdrasil /docker-entrypoint.sh getaddr
```

### K8S way

See in [/k8s](https://github.com/katzterd/314n/tree/main/k8s)
