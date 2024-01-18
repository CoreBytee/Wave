import './Index.css'

import FrownImage from '../../assets/frown.svg'

function SavedView() {
    return (
        <div className="SavedView">
            <img src={FrownImage} />
            <h6>Looks like you do not have any saved movies at this time!</h6>
        </div>
    )
}

export default SavedView;