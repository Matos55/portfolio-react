https://medium.com/nmc-techblog/wait-youre-not-using-react-strictmode-a9713927a33b

.... in development mode only, StrictMode will double invoke the next methods from the lifecycle: constructor, render, setState updater function and getDerivedStateFromProps so you will be able to see if your code breaks or behaves different than how you expected.

https://reactjs.org/docs/strict-mode.html

Conceptually, React does work in two phases:

- The render phase determines what changes need to be made to e.g. the DOM. During this phase, React calls render and then compares the result to the previous render.
- The commit phase is when React applies any changes. (In the case of React DOM, this is when React inserts, updates, and removes DOM nodes.) React also calls lifecycles like componentDidMount and componentDidUpdate during this phase.

Render phase lifecycles include the following class component methods:

- constructor
- componentWillMount (or UNSAFE_componentWillMount)
- componentWillReceiveProps (or UNSAFE_componentWillReceiveProps)
- componentWillUpdate (or UNSAFE_componentWillUpdate)
- getDerivedStateFromProps
- shouldComponentUpdate
- render
- setState updater functions (the first argument)

Strict mode can’t automatically detect side effects for you, but it can help you spot them by making them a little more deterministic. This is done by intentionally double-invoking the following functions:

- Class component constructor, render, and shouldComponentUpdate methods
- Class component static getDerivedStateFromProps method
- Function component bodies
- State updater functions (the first argument to setState)
- Functions passed to useState, useMemo, or useReducer

Note:

This only applies to development mode. Lifecycles will not be double-invoked in production mode.
