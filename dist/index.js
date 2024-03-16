"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useCookieScript = (url, options) => {
    const position = (options === null || options === void 0 ? void 0 : options.position) || "body-bottom";
    const elementName = position.includes("head-") ? "head" : "body";
    const appendType = position.includes("-top") ? "prepend" : "append";
    (0, react_1.useEffect)(() => {
        const element = document.querySelector(elementName);
        const script = document.createElement("script");
        if (element) {
            script.setAttribute("src", url);
            if (options === null || options === void 0 ? void 0 : options.cookieName) {
                script.setAttribute("data-cs-cookiename", options.cookieName);
            }
            if (options === null || options === void 0 ? void 0 : options.language) {
                script.setAttribute("data-cs-lang", options.language);
            }
            if (options === null || options === void 0 ? void 0 : options.sameSite) {
                script.setAttribute("data-cs-samesite", options.sameSite);
            }
            if (options === null || options === void 0 ? void 0 : options.restrictDomain) {
                script.setAttribute("data-cs-restrict-domain", options.restrictDomain.toString());
            }
            if (appendType === "append") {
                element.appendChild(script);
            }
            else {
                element.prepend(script);
            }
            return () => {
                element.removeChild(script);
            };
        }
    }, [url]);
};
exports.default = useCookieScript;
