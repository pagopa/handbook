# The PagoPA Company Handbook

The [PagoPA S.p.a.](https://www.pagopa.gov.it/) team handbook is the central repository for how we run the company. As part of our value of supporting the open source philosophy, the handbook is open to the world, and we welcome feedback. Please make a [pull request](https://github.com/pagopa/handbook/pulls) to suggest improvements or add clarifications.

The idea is that the notebook will become something like [Gitlab’s](https://about.gitlab.com/handbook/), also some inspiration from the [Remote Manifesto](https://www.remoteonly.org/) and [Valve Handbook](https://steamcdn-a.akamaihd.net/apps/valve/Valve_NewEmployeeHandbook.pdf) and [Basecamp's handbook](https://github.com/basecamp/handbook).

## Contributing

You are encouraged to propose integrations and modifications to the Handbook by making a [pull request](https://github.com/pagopa/handbook/pulls).

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory.

## Deployment

The website is built and deployed to GH-Pages for every change to the main branch using
a [GitHub action](./github/documentation.yml).
