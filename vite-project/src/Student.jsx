import PropTypes from 'prop-types'

function Student(props){

    return (

        <div className='Student'>
            <p>Name:{props.name}</p>
            <p>Age : {props.age}</p>
        </div>
    );
}

Student.propTypes={

    name : PropTypes.string,
    age : PropTypes.number,
}

Student.defaultProps ={

    name:"HV",
    age: 3
}
export default Student