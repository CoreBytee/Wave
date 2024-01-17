import SideBar from '../Sidebar/Index'
import Content from '../Movies/Index'

import { useState as UseState } from 'react'

import './Index.css'

function App() {
    const [CurrentView, SetCurrentView] = UseState("Movies")

    let ContentElement

    if (CurrentView == "Movies") {
        ContentElement = <Content />
    }

    console.log(ContentElement)

    return (
        <div className="App container-fluid px-0">
            <SideBar CurrentView={CurrentView} SetCurrentView={SetCurrentView} />
            {ContentElement}
        </div>
    )
}

export default App