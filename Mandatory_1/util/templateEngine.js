import fs from "fs";

const navbarComponent = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footerComponent = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(path, options = {}) {
    const page = fs.readFileSync("./public/pages"+path).toString();

    return navbarComponent
        .replace("%%TAB_TITLE%%", options.tabTitle || "Node-Mandatory")
        .replace("%%PAGE_CSS_LINK%%",
            options.cssLink || ""
        ) 
        + page
        + footerComponent;
}
