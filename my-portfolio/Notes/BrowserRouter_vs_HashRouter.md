# BrowserRouter

    Uses HistoryAPI, https://developer.mozilla.org/en-US/docs/Web/API/History_API, we normally use this when we have "back-end" servers or use https://v5.reactrouter.com/web/api/history

     It uses HTML 5 history API (i.e. pushState, replaceState and popState API) to keep your UI in sync with the URL. It routes as a normal URL in the browser and assumes that the server is handling all the request URL (eg., /, /about) and points to root index.html. It accepts forceRefresh props to support legacy browsers which doesn’t support HTML 5 pushState API

# HashRouter

    React Router reads anything after the # symbol, but the browser API can not.
    Cons: not supported by legacy components and bad for SEO search engines  (only rank contents that are available on first load.)

# MemoryRouter

    Memory router keeps the URL changes in memory not in the user browsers. It keeps the history of the URL in memory (does not read or write to the address bar so the user can not use the browser’s back button as well as the forward button. It doesn’t change the URL in your browser. It is very useful for testing and non-browser environments like React Native.
