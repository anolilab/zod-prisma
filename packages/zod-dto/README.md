# DTO’s (Data Transfer Object) based on [zod](https://github.com/colinhacks/zod)

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
    npm install @anolilab/zod-dto --save
```

Or

```bash
    yarn add @anolilab/zod-dto
```

# Usage

## Basic usage

```js
import { StringDto } from "@anolilab/zod-dto"

const dto = new StringDto("test string"); // the constructor has a zod validator

console.log(dto.value) // returns "test string"
```

If you don't want Zod to throw errors when validation fails, use `the second parameter of the constructor`.
This method returns an object containing either the successfully parsed data or a ZodError instance containing detailed information about the validation problems.


```js
import { StringDto } from "@anolilab/zod-dto"

const dto = new StringDto("1", true); // the constructor has a zod validator

console.log(dto.value) // { success: false; error: ZodError }
```

You can transform the object to a json with
```js
dto.toJson() // returns { value: "test string" }
```

You can get the zod object with
```js
dto.zod() // returns ZodType
```

## Extend a DTO



## Example of using @anolilab/zod-dto in Entity dto

```ts
import { NumberDto, StringDto, AbstractDto, DatetimeDto } from "@anolilab/zod-dto";

export default abstract class AbstractEntity {
    protected abstract properties: object;

    readonly createdAt!: DatetimeDto;

    readonly updatedAt!: DatetimeDto;

    readonly deletedAt!: DatetimeDto;

    public toJson(): string {
        return JSON.stringify(this.prepareData());
    }

    public toObject<T extends {}>(): T {
        return this.prepareData();
    }

    private prepareData<T extends { [key: string]: any }>(): T {
        const data: { [key: string]: any } = {};

        Object.entries(this.properties).forEach(([key, value]) => {
            let v = value;

            if (value instanceof AbstractDto) {
                v = value.value;
            } else {
                throw new TypeError(`Value of key ${key} needs to be a class that extends AbstractDto.`);
            }

            data[key] = v;
        });

        return data as any;
    }
}

export default class SettingEntity extends AbstractEntity {
    readonly id!: NumberDto;

    readonly phone!: StringDto;

    constructor(
        public properties: {
            id?: NumberDto;
            phone?: StringDto;
        },
    ) {
        super();

        Object.assign(this, properties);
        Object.freeze(this);
    }
}

const settingEntity = new SettingEntity({
    id: NumberDto.nullable(1),
    phone: StringDto.nullable("+4900000"),
})
```

## Versioning

This project uses [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/anolilab/zod-prisma/tags).

## Supported Node.js Versions

Libraries in this ecosystem make a best effort to track
[Node.js’ release schedule](https://nodejs.org/en/about/releases/). Here’s [a
post on why we think this is important](https://medium.com/the-node-js-collection/maintainers-should-consider-following-node-js-release-schedule-ab08ed4de71a).

Contributing
------------

If you would like to help take a look at the [list of issues](https://github.com/anolilab/zod-prisma/issues) and check our [Contributing](.github/CONTRIBUTING.md) guild.

> **Note:** please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

Credits
-------------

- [Daniel Bannert](https://github.com/prisis)
- [All Contributors](https://github.com/anolilab/zod-prisma/graphs/contributors)

License
-------------

The anolilab zod-prisma is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT)

