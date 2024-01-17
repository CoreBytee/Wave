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

    return (
        <div className="App">
            <SideBar CurrentView={CurrentView} SetCurrentView={SetCurrentView} />
            {ContentElement}
        </div>
    )
}

export default App