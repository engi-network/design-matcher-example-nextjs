# demo-jest-design-matcher-nextjs

This is a NextJS Engi-compatible repository that uses the
[@engi.network/design-matcher](https://github.com/engi-network/design-matcher)
Jest plugin in its tests to visually validate rendered UI code against expected design files.

## Testing

### Local

To run the design tests, first start the storybook with `npm run storybook` and
then execute the tests with `npm test`. You will see failing tests where the UI
code is not yet written to match the designs.

#### Containerized with Docker

Engi runs tests and validation within Docker. You can verify that Docker is
setup properly by running the storybook and tests in compose rather than
directly on the host machine.

##### Setup

First create

```
mkdir -p /tmp/demo-jest-design-matcher-nextjs
docker volume create --driver local -o o=bind -o type=none -o device="/tmp/demo-jest-design-matcher-nextjs" demo-jest-design-matcher-nextjs
```

##### Running

```
ENGI_WORKING_DIR="/tmp/demo-jest-design-matcher-nextjs" ENGI_WORKING_VOL=demo-jest-design-matcher-nextjs docker compose up --force-recreate --exit-code-from tests
```
