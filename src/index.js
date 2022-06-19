const fs = require("fs");
const templater = require("./util/templater")();
const get = require("./util/request");

(async () => {
    const response = await get("https://wttr.in/Espoo?0T");
    const [ result ] = response.match(/(?<=\<pre\>\s*).*?(?=\s*\<\/pre\>)/gs);
    await templater("./src/template/template.txt", './README.md', {
        weather: result,
        last_update: new Date().toLocaleDateString("en-GB", {
            weekday: "long",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            timeZoneName: "short",
        }),
    });
})();
