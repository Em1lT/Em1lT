const fs = require("fs");
const templater = require("./util/templater")();
const get = require("./util/request");

(async () => {
    // const response = await get("https://wttr.in/Espoo?0T");
    console.log(response)
    // await templater("./src/template/template.txt", undefined, {
    //     test: "world",
    //     last_update: new Date().toLocaleDateString("en-GB", {
    //         weekday: "long",
    //         month: "long",
    //         day: "numeric",
    //         hour: "numeric",
    //         minute: "numeric",
    //         timeZoneName: "short",
    //     }),
    // });
})();
