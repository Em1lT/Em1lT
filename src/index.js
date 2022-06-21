const fs = require("fs");
const templater = require("./util/templater")();
const get = require("./util/request");
const formatText = require("./util/textFormatter");

(async () => {
    const response = await get("https://wttr.in/Espoo?0Tp");
    const [ result ] = response.match(/(?<=\<pre\>\s*).*?(?=\s*\<\/pre\>)/gs);
    const formattedText = formatText(result);
    await templater("./src/template/template.txt", "./README.md", {
        weather: formattedText,
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
