# 314n
*opensource console board | since 2012*

## Installation

### Docker compose way

#### 1. Prepare .env 
```
$ cp .env-dist .env
```
Then fill fields in `.env` by your text editor with desired values

#### 2. Deploy
```
$ docker compose up -d
```

#### 3. Setup db and admin account
```
$ docker exec -t app /app/config/docker-entrypoint.sh createdb createadmin
```
you can simply remove  `createadmin`  from this line, if you don't need admin account

frontend will appear on `http://localhost:80`

#### (Optional) Get yggdrasil node address (if enabled)
```
$ docker exec -t yggdrasil /docker-entrypoint.sh getaddr
```

### K8S way
See in [/k8s](https://github.com/katzterd/314n/tree/main/k8s)
