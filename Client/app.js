// console.log("Hello!!");
// //document - property of browser
// const heading = document.getElementById("heading");
// heading.innerHTML = ("Dwight : ");
// //DOM Tree -> document -> comes from window
// const title = document.createElement('h1');
// title.innerHTML = "come on JIM";

// heading.appendChild(title);



import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./src/pages/homepage/homepage";
import { ImageGenerator } from "./src/pages/imageGenerator/imageGenerator";
import { HistoryPage } from "./src/pages/historyPage/historyPage";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Homepage />,
    },
    {
        path:'/image-generator',
        element: <ImageGenerator/>,
    },
    {
        path:'/history',
        element: <HistoryPage />,
    }
]);

// const heading = React.createElement('h2', {}, "Hello PP!");
// const heading = <h1>Hello World</h1>

const App = () => {
    return (
     <RouterProvider router={router}/>
    )
}

// const Heading2 = () => {
//     return <h2>Sub Heading</h2>
// }


const domRoot = document.getElementById('root');

// Use ReactDOM.createRoot to create a root React component
const reactRoot = ReactDOM.createRoot(domRoot);

// Render your React component inside the root
// reactRoot.render(heading);
reactRoot.render(<App/>);