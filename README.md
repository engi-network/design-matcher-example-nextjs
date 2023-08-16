## Setup
```
docker volume create --driver local -o o=bind -o type=none -o device="/tmp/website" website
mkdir /tmp/website
```

## Running

```
docker compose build
docker compose up
```
