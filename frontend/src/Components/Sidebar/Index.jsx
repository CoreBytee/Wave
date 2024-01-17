import './Index.css'

import Icon from '../../Assets/icon.svg'

function SideBar(
    {
        CurrentView,
        SetCurrentView
    }
) {
    return (
        <div className="SideBar">
            <img src={Icon} className="logo" alt="Logo" />
            <i onClick={() => SetCurrentView("Movies")} className="bi bi-house "></i>
            <i onClick={() => SetCurrentView("Saved")}  className="bi bi-heart "></i>
            <i onClick={() => SetCurrentView("Search")} className="bi bi-search"></i>
        </div>
    )
}

export default SideBar