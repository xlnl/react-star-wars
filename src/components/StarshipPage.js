import React, {useHistory} from 'react'
import axios from 'axios';

// has a clickable Link to starship so make sure to import Link from react-router-dom
// When a starship <Link> is clicked a <StarshipPage> component should be rendered that 
// displays the starship's name, model and a "Return to Starship List" <Link> that routes 
// back to the root route that renders <App>.


const StarshipPage = (props) => {

    const history = useHistory()

    return (
        <div className="shipDetails">
            <h4>NAME: {'   '} { props.location.state.name}</h4>
            <h4>MODEL: {'   '} { props.location.state.model}</h4>
            <h4 className="returnLink" onClick={()=> history.goBack()}>RETURN</h4>
        </div>
    )
}

export default StarshipPage
