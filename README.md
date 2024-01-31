# integration-example

[![release](https://github.com/sky172839465/integration-example/actions/workflows/release.yml/badge.svg)](https://github.com/sky172839465/integration-example/actions/workflows/release.yml)
[![schedule](https://github.com/sky172839465/integration-example/actions/workflows/schedule.yml/badge.svg)](https://github.com/sky172839465/integration-example/actions/workflows/schedule.yml)

Front-end integration with free service.<br /><br />
Includes:

- pull request integration
- release integration
- schedule testing integration

---

### Workflow

- <details open>
    <summary>pull request</summary>

  [pull_request.yml](/.github/workflows/pull_request.yml)

  ```mermaid
  graph LR;
    Start(PR event)
    subgraph Env clean up
      Z1(Remove fly.io pr env)
      Z2(Remove development env)
      Z1-->Z2
    end
    subgraph PR status
      StatusA(open / reopen / sync)
      StatusB(close)
    end
    subgraph Functional test
      A1(Deploy pr env fly.io)
      A2(E2E test)
      A3(Upload E2E report)
      A1-->A2-->A3
    end
    subgraph Static test
      B1(Lint test)
      B2(Unit test)
      B1-->B2
    end
    subgraph Clean up
      C1(Download artifacts)
      C2(Generate summary)
      C3(Add summary comment)
      C1-->C2-->C3
    end
    Start-->StatusA & StatusB
    StatusA-->A1 & B1
    StatusB-->Z1
    A3 & B2-->C1
  ```

  </details>

- <details>
    <summary>release</summary>

  [release.yml](/.github/workflows/release.yml)

  ```mermaid
  graph LR;
    A1(Bump version)
    A2(Deploy to fly.io)
    A1-->A2
  ```

  </details>

- <details>
    <summary>schedule</summary>

  [schedule.yml](/.github/workflows/schedule.yml) . [dashboard](https://github.com/sky172839465/integration-example/issues/12#issuecomment-1890858131)

  ```mermaid
  graph LR;
    A1(Trigger by cron)
    subgraph Functional test
      B1(E2E test)
      B2(Upload E2E report)
      B1-- test online env -->B2
    end
    subgraph Static test
      C1(Lint test)
      C2(Unit test)
      C1-->C2
    end
    subgraph Clean up
      A2(Generate summary)
      A3(Update summary to dashboard)
      A2-->A3
    end
    A1-->B1 & C1
    B2 & C2-->A2
  ```

  </details>

---

### Installation

- docker deskop<br />
  https://www.docker.com/products/docker-desktop/

---

### Skip pr & release build

- pr last commit with `[skip ci]`
- exmaple: https://github.com/sky172839465/integration-example/pull/39

---

### Functional test in selenoid

- npm run start
- launch docker desktop
  - (`FIRST TIME ONLY`)
  - npm run selenoid:download
- npm run functional:selenoid (if localhost not found, check CRA `On Your Network` IP address)

---

### Manual browser in selenoid

- launch docker desktop
  - (`FIRST TIME ONLY`)
  - npm run selenoid:download
- npm run selenoid-ui:start
- access http://localhost:8080/#/capabilities/

---

### Document

- CodeceptJS<br />
  https://codecept.io/quickstart/
- SauceLabs<br />
  https://docs.saucelabs.com/overview/
- Selenoid<br />
  https://aerokube.com/selenoid/latest/
- GitHub Actions<br />
  https://docs.github.com/en/actions/quickstart
- Fly.io<br />
  https://fly.io/docs/
