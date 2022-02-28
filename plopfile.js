module.exports = function (
    /** @type {import('plop').NodePlopAPI} */
    plop,
) {
    plop.setGenerator("package", {
        description: "Create new package",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is your package name? Example: @test/package-name",
                validate: (value) => {
                    if (/.+/.test(value)) {
                        return true;
                    }

                    return "name is required";
                },
            },
            {
                type: "input",
                name: "export_name",
                message: "What is your package export name? Its based on your package name: test-package-name",
                // eslint-disable-next-line radar/no-identical-functions
                validate: (value) => {
                    if (/.+/.test(value)) {
                        return true;
                    }

                    return "name is required";
                },
            },
            {
                type: "input",
                name: "description",
                message: "What is your package description?",
                validate: (value) => {
                    if (/.+/.test(value)) {
                        return true;
                    }

                    return "description is required";
                },
            },
            {
                type: "input",
                name: "homepage",
                message: "What is your homepage url?",
                validate: (value) => {
                    if (/.+/.test(value)) {
                        return true;
                    }

                    return "homepage is required";
                },
            },
            {
                type: "input",
                name: "repository",
                message: "What is your repository name? Example: name/repo",
                validate: (value) => {
                    if (/.+/.test(value)) {
                        return true;
                    }

                    return "repository is required";
                },
            },
            {
                type: "input",
                name: "directory",
                message: "What is your package directory name?",
                validate: (value) => {
                    if (/.+/.test(value)) {
                        return true;
                    }

                    return "directory is required";
                },
            },
        ],
        actions: () => [
            {
                type: "add",
                path: "packages/{{directory}}/.npmignore",
                templateFile: "plop-templates/package/.npmignore.hbs",
            },
            {
                type: "add",
                path: "packages/{{directory}}/.releaserc.json",
                templateFile: "plop-templates/package/.releaserc.json.hbs",
            },
            {
                type: "add",
                path: "packages/{{directory}}/.gitkeep",
            },
            {
                type: "add",
                path: "packages/{{directory}}/babel.config.cjs",
                templateFile: "plop-templates/package/babel.config.cjs.hbs",
            },
            {
                type: "add",
                path: "packages/{{directory}}/LICENSE.md",
                templateFile: "plop-templates/package/LICENSE.md.hbs",
            },
            {
                type: "add",
                path: "packages/{{directory}}/package.json",
                templateFile: "plop-templates/package/package.json.hbs",
            },
            {
                type: "add",
                path: "packages/{{directory}}/README.md",
                templateFile: "plop-templates/package/README.md.hbs",
            },
            {
                type: "add",
                path: "packages/{{directory}}/tsconfig.json",
                templateFile: "plop-templates/package/tsconfig.json.hbs",
            },
        ],
    });
};
