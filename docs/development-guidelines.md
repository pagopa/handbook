---
title: Development guidelines
---

### Principles

1. **Failure is a mandatory component of success**. As people, learning and failure go hand in hand.

1. **Learn and adapt from prior learnings**. Adopt the learnings of continuous improvement: when failure occurs, immediately determine what needs to be done to prevent recurrence and focus on those tasks (e.g. [Kaizen](https://en.wikipedia.org/wiki/Kaizen) and [Antifragile](https://en.wikipedia.org/wiki/Antifragile)).

1. **Focus on software and architecture that continually reduces the risk of changes.** These practices focus on:

   1. _isolation_ - truly ensuring that one change cannot impact another. For example, our focus on API design and micro service architecture on the backend is one technique we use to create isolation.

   1. _continuous delivery_ - by releasing small changes continuously to our production environment, we minimize the impact of any one change and significantly decrease time to resolution.

   1. _automation_ - by writing software to manage and implement our processes - including testing, patching and deployment - we focus on capturing our assumptions during the development process and building leverage to ensure our assumptions remain valid over time.

   1. _rollback_ - by ensuring that every application change can be rolled back, we enable faster resolution when problems arise. For example, our practice of managing database schema changes independently of application changes provides the means to ensure every application change can itself be rolled back.

   1. _incremental rollout_ - by rolling out application changes to production incrementally, and verifying that they work, we minimize the impact of a problem before it affects all of our users.

   1. _monitoring and alerting_ - by instrumenting our applications - via logging and external monitoring services - we can capture our assumptions and receive notification on variance to minimize customer impact.

   1. _secure by design_ - We consider security throughout the entire software development life cycle. For example, we deny access by default: That is, something must be true in order for authorization to be granted.

### The Open Source Way

We are strong proponents of open source software, including the overall process of developing open source software. The Open Source Way is a framework we use to help us answer many questions about software design, deferring to how the open source community works.

Examples:

- _How much documentation should we write?_

  Let's look at our favorite open source projects and see how their documentation looks. One example we like is the [react project](https://facebook.github.io/react/)

- _What type of API should we build?_

  Let's look at our favorite open source projects and look at their APIs. One example we like is [Stripe](https://stripe.com/docs/api)

### General Guidelines

1. All the code is open source and published on GitHub.
1. Do not use classes unless absolutely necessary; keep data (structures) and behaviors (functions) separate
1. Whenever and wherever possible, prefer functional style over imperative and immutable data structure over mutable state.
1. Keep each individual change small: only change the minimum amount of code needed to accomplish the purpose of your pull request (i.e. do not change the format of the code if that's not the purpose of your change).
1. We're not for the 100% coverage religion but you should write tests for the core of your app or usually for the part that is more fragile to changes.
1. Use the OpenAPI standard to defining REST APIs exposed to clients. Follow the [National Guidelines](https://docs.italia.it/italia/piano-triennale-ict/lg-modellointeroperabilita-docs/it/bozza/doc/profili-di-interazione/regole-comuni-rest-soap.html#formato-dei-dati) when designing your APIs.

### Workflow automation

- We maintain [a collection of git hooks](https://github.com/pagopa/git-hooks) that help you automate your workflow. You are encouraged to use, mantain and improve them.

### Workstation setup

We prepared [a script](https://github.com/pagopa/developer-laptop) that setup a new developer workstation from scratch. It only supports macOS so far. It's not mandatory to use it nor to setup your machine as the script does. If you find it useful, please consider to give feedback and to keep it update by adding new features and fixing bugs.

### Development Style Guide

- A [Style Guide](development-styleguide.md) with code snippets, common scenarios and mistakes.
