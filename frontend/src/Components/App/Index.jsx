import SideBar from '../Sidebar/Index'
import Movies from '../Movies/Index'

import { useState as UseState } from 'react'

import './Index.css'

function App() {
    const [CurrentView, SetCurrentView] = UseState("Movies")

    let ContentElement

    return (
        <div className="App">
            <SideBar CurrentView={CurrentView} SetCurrentView={SetCurrentView} />
            {CurrentView === "Movies" && <Movies/>}
        </div>
    )
}

export default App