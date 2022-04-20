# List of npm installs:

- npm i gh-pages -D

  - to deploy in a new branch to render at github-pages

- npm install react-router-dom@6

  - React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native
  - new version of react router
  - on version 6, the useRouteMatch() is deprecated,
  - switch is deprecated and replaced with 'Routes',
  - no longer need "exact" in the 1st one '/',
  - we nest child paths with "element",
  - redirect replaced with Navigate
  - React Router provides you the _navData_ argument and it's an object and inside has the isActive property that will be true if the route is active in that moment (use this for 'active css')

  ```html
  <li>
    <NavLink className={(navData) => navData.isActive ? "active" : "" }
    to="/about" />
  </li>
  ```

  https://remix.run/blog/react-router-v6

- npm i sass -D

  - install dart sass version (slower then dart sass standalone vm)
  - this is not the "node sass" but "dart sass" via NPM
