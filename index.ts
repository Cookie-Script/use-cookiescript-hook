import { useEffect } from "react"

type CookieScriptOptions = {
  position?: "head-top" | "head-bottom" | "body-bottom"
  cookieName?: string
  language?: string
  sameSite?: string
  restrictDomain?: boolean,
}

const useCookieScript = (url: string, options?: CookieScriptOptions) => {
  const position = options?.position || "body-bottom";
  const elementName = position.includes("head-") ? "head" : "body"
  const appendType = position.includes("-top") ? "prepend" : "append"

  useEffect(() => {
    const element = document.querySelector(elementName)
    const script = document.createElement("script")
    if(element) {
      script.setAttribute("src", url);
      if(options?.cookieName) {
        script.setAttribute("data-cs-cookiename", options.cookieName);
      }

      if(options?.language) {
        script.setAttribute("data-cs-lang", options.language);
      }

      if(options?.sameSite) {
        script.setAttribute("data-cs-samesite", options.sameSite);
      }

      if(options?.restrictDomain) {
        script.setAttribute("data-cs-restrict-domain", options.restrictDomain.toString());
      }


      if(appendType === "append") {
        element.appendChild(script);
      } else  {
        element.prepend(script);
      }

      return () => {
        element.removeChild(script);
      };
    }
  }, [url])
}

export default useCookieScript
