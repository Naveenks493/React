import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CardSection from "./component/CardSection.jsx"
import Website from './component/Website.jsx'
import Setcomponent from "./component/Setcomponent.jsx"
import CardState from "./component/CardState.jsx"
import ListAndKeys from "./component/List And Keys.jsx"
import Memoexample from "./component/Memoexample.jsx"
import ComponentLK from "./component/ComponentLK.jsx"
import ConditionalRenduring from "./component/ConditionalRenduring.jsx"
import Timer from "./component/Timer.jsx"
import { BrowserRouter } from 'react-router'
import Routers from './component/Routers.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <CardSection /> */}
    {/* <Website /> */}
    {/* <Setcomponent /> */}
    {/* <CardState /> */}
    {/* <ListAndKeys /> */}
    {/* <Memoexample /> */}
    {/* <ComponentLK /> */}
    {/* <ConditionalRenduring/> */}
    {/* <Timer /> */}
    <BrowserRouter>
    <Routers />
    </BrowserRouter>
  </StrictMode>,
)