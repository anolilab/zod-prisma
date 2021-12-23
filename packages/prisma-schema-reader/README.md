# A prisma schema reader and object transformation

---

<div align="center">
    <p>
        <sup>
            Daniel Bannert's open source work is supported by the community on <a href="https://github.com/sponsors/prisis">GitHub Sponsors</a>
        </sup>
    </p>
</div>

---

# Installation

Use npm or yarn to install

```bash
    npm install @anolilab/prisma-schema-reader --save
```

Or

```bash
    yarn add @anolilab/prisma-schema-reader
```

# Usage

## Basic usage

```typescript
import { SchemaToObjectTransformer } from "@anolilab/prisma-schema-reader";

const prismaSchemaPath = "path to your prisma.schema";

const transformer = new SchemaToObjectTransformer(prismaSchemaPath);

transformer.transform();
```

The transformer will return a JSON object based on the prisma schema.

```text
{
  "enums": [
    {
      "fields": [
        "ADMIN",
        "USER",
      ],
      "name": "Role",
    },
    ...
  ],
  "models": [
    {
      "documentation": "",
      "fields": [
        {
          "documentation": "",
          "isId": true,
          "kind": "scalar",
          "list": false,
          "map": undefined,
          "name": "id",
          "relationField": false,
          "required": true,
          "type": "Int",
          "unique": false,
        },
      ]
    },
    ...
  ],
}
```

## Versioning

This project uses [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/anolilab/zod-prisma/tags).

## Supported Node.js Versions

Libraries in this ecosystem make a best effort to track
[Node.js’ release schedule](https://nodejs.org/en/about/releases/). Here’s [a
post on why we think this is important](https://medium.com/the-node-js-collection/maintainers-should-consider-following-node-js-release-schedule-ab08ed4de71a).

Contributing
------------

<!-- textlint-disable no-dead-link -->

If you would like to help take a look at the [list of issues](https://github.com/anolilab/zod-prisma/issues) and check our [Contributing](./.github/CONTRIBUTING.md) guild.

<!-- textlint-enable no-dead-link -->

> **Note:** please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

Credits
-------------

- [Daniel Bannert](https://github.com/prisis)
- [All Contributors](https://github.com/anolilab/zod-prisma/graphs/contributors)

License
-------------

The anolilab zod-prisma is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT)

