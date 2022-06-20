const reformatText = (text) => {
    if (!text) return null;
    return text
        .replace(/br&/g, " ")
        .replace(/gt;/g, "\>")
        .replace(/&lt;/g, "\<")
        .replace(/&quot;/g, "\"")
        .replace(/&amp;/g, "&");
};

module.exports = reformatText;
