const fs = require("fs");

const templater = () => {
    const regex = /\{\{(.*?)\}\}/g;
    const read = async (templatePath, encoding = "utf8") => {
        return fs.readFileSync(templatePath, encoding);
    };
    const write = async (outputPath, rendered) => {
        if (outputPath) {
            return fs.writeFileSync(outputPath, rendered);
        }
        console.log(rendered);
    };

    return async (templatePath, outputPath, data) => {
        const template = await read(templatePath);
        const rendered = template.replace(regex, (_, key) => {
            return data[key];
        });

        await write(outputPath, rendered);
    };
    // read the template find all occurences of {{}}
};

module.exports = templater;
