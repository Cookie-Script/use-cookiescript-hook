<div align="center">
    <h1>useCookieScript</h1>
    <p>npm package containing <a href="https://cookie-script.com">cookie script</a> hook for your React project.</p>
	<br/>
</div>
<br/>

##  Installation

### Using npm or yarn 📦

```bash
# Using npm
npm i use-cookiescript-hook

# Using yarn
yarn add use-cookiescript-hook
```

### Usage
```javascript
useCookieScript(url, options)
```
```text
url: string,
options: {
  position?: "head-top" | "head-bottom" | "body-bottom" //default: "body-bottom"
  cookieName?: string //example: "CookieScriptConsent", default: "CookieScriptConsent"
  language?: string //example: "en"
  sameSite?: string //example: "lax", "strict", "none"
  restrictDomain?: boolean, //example: true
}
```

### Quickstart

```jsx
import useCookieScript  from "use-cookiescript-hook";

const App = () => {
  useCookieScript("{your installation banner URL from the account}", {
    position: "head-top",
  })

  return ("....");
}
```