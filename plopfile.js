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
        actions: (data) => [
            {
                type: "add",
                path: "src/packages/{{name}}/.npmignore",
                templateFile: "plop-templates/packages/src/.npmignore.hbs",
            },
            {
                type: "add",
                path: "src/packages/{{name}}/.releaserc.json",
                templateFile: "plop-templates/packages/src/.releaserc.json.hbs",
            },
            {
                type: "add",
                path: "src/packages/{{name}}/src/.gitkeep",
            },
            {
                type: "add",
                path: "src/packages/{{name}}/babel.config.cjs",
                templateFile: "plop-templates/packages/config/babel.config.cjs.hbs",
            },
            {
                type: "add",
                path: "src/packages/{{name}}/LICENSE.md",
                templateFile: "plop-templates/packages/config/LICENSE.md.hbs",
            },
            {
                type: "add",
                path: "src/packages/{{name}}/package.json",
                templateFile: "plop-templates/packages/config/package.json.hbs",
            },
            {
                type: "add",
                path: "src/packages/{{name}}/README.md",
                templateFile: "plop-templates/packages/config/README.md.hbs",
            },
            {
                type: "add",
                path: "src/packages/{{name}}/tsconfig.json",
                templateFile: "plop-templates/packages/config/tsconfig.json.hbs",
            },
        ],
    });
};
