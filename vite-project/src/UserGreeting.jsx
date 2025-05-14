
import PropTypes from './prop-types'

function UserGreeting(props){


    return(
        props.isLoggedIn? 
        <h2 className="wlcm"> welcome {props.name}</h2> : <h2 className="noAuth"> You are not logged in </h2>
);
    
}

UserGreeting.propTypes={
    
    name : PropTypes.string,
    isLoggedIn : PropTypes.boolean

}

UserGreeting.defaultProps={
    
    name : "VG",
    isLoggedIn : false

}


export default UserGreeting