type CookieScriptOptions = {
    position?: "head-top" | "head-bottom" | "body-bottom";
    cookieName?: string;
    language?: string;
    sameSite?: string;
    restrictDomain?: boolean;
};
declare const useCookieScript: (url: string, options?: CookieScriptOptions) => void;
export default useCookieScript;
