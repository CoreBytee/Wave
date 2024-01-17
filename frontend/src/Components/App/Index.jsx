import SideBar from '../Sidebar/Index'
import Movies from '../Movies/Index'
import SavedView from '../SavedView/Index'
import SearchView from '../SearchView/Index'

import { useState as UseState } from 'react'

import './Index.css'

function App() {
    const [CurrentView, SetCurrentView] = UseState(localStorage.ViewState || "Movies")
    localStorage.ViewState = CurrentView


    return (
        <div className="App">
            <SideBar CurrentView={CurrentView} SetCurrentView={SetCurrentView} />
            {CurrentView === "Movies" && <Movies/>}
            {CurrentView === "Saved" && <SavedView/>}
            {CurrentView === "Search" && <SearchView/>}
        </div>
    )
}

export default App