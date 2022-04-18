You really saved my day. I struggled with BrowserRouter and HashRouter but didn't found the correct way to add it.
Another point which you should probably add is (one of the reason my app didn't worked as expected)
avoid the use of anchor tag, instead wrap it with Link from react-router-dom.
Anchor tag worked fine on local but this was the major issue I had with deployment.
I wrapped the element with link tag and now build is working as I expect it to be.
