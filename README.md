<p align="center">
  Add your <em>motivational</em> tagline here.
</p>

<br />

<p align="center">
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#why"><strong>Why?</strong></a> ·
  <a href="docs"><strong>Documentation</strong></a> ·
  <a href="docs/contributing.md"><strong>Contributing</strong></a>
</p>

---

<div align="center">
    <p>
        <sup>
            Daniel Bannert's open source work is supported by the community on <a href="https://github.com/sponsors/prisis">GitHub Sponsors</a>
        </sup>
    </p>
</div>

---

## Getting Started

Use the following steps when first using this template.

- Find and replace `anolilab/node-mono-library-template` with `user/repo` across the whole project.
- Replace `<< TEMPLATE NAME >>` in the `LICENSE` file with the name of your choosing.
- Replace the template package in the packages folder with a package of your choosing.
- For automatic publishing add your npm token to your [github repo secrets](https://docs.github.com/en/actions/reference/encrypted-secrets) with the name `SEMANTIC_RELEASE_GITHUB_NPM_PACKAGE_TOKEN`.
- For automatic publishing add your github token to your [github repo secrets](https://docs.github.com/en/actions/reference/encrypted-secrets) with the name `SEMANTIC_RELEASE_GITHUB_TOKEN`.

<br />

## Why

 Created this template primarily for my work, to prevent from constantly reinventing the wheel when starting a new project.
 Often had ideas and then delayed because the pain of starting from scratch is too high. This toolkit hopefully helps to reduce the friction.

This template repo comes with the following tools:

- [`yarn`](https://yarnpkg.com/) monorepo.
- [`preconstruct`](https://preconstruct.tools/) - Automated builds and great support for JS tooling.
- [`TypeScript`](https://www.typescriptlang.org/) - For typesafe code, great editor support and simpler refactoring.
- [`eslint`](https://eslint.org/) - for code linting.
- [`prettier`](https://prettier.io/) - for code formatting.
- [`babel`](https://babeljs.io/) - used by preconstruct for the compilation of code and macros.
- [`semantic-release`](https://github.com/semantic-release/semantic-release/) - for automating releases to GitHub and NPM.
- [`GitHub Actions`](https://github.com/features/actions) - as the primary continuous integration (deployment) tool.

<!-- textlint-disable alex -->

- [`husky`](https://github.com/typicode/husky) - for git hooks.
- [`lint-staged`](https://github.com/okonet/lint-staged) - for automated precommit checks.

## Versioning

This project uses [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/anolilab/node-mono-library-template/tags).

## Supported Node.js Versions

Libraries in this ecosystem make a best effort to track
[Node.js’ release schedule](https://nodejs.org/en/about/releases/). Here’s [a
post on why we think this is important](https://medium.com/the-node-js-collection/maintainers-should-consider-following-node-js-release-schedule-ab08ed4de71a).

Contributing
------------

If you would like to help take a look at the [list of issues](https://github.com/anolilab/node-mono-library-template/issues) and check our [Contributing](.github/CONTRIBUTING.md) guild.

> **Note:** please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

Credits
-------------

- [Daniel Bannert](https://github.com/prisis)
- [All Contributors](https://github.com/anolilab/node-mono-library-template/graphs/contributors)

License
-------------

The anolilab node-mono-library-template is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT)
