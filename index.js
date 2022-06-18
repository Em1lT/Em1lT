const templater = require("./templater")();

(async () => {
    await templater("./template.txt", "./README.md", {
        test: "world",
    });
})();
