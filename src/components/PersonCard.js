import react,{useState} from 'react';

const Personcard =(props) => {
    const {age,lastName,firstName} = props;
    const [stateAge, setState] = useState(age);

    const handelClick = () => setState(stateAge + 1);
    return(
        <div>
            <h1>{firstName}, {lastName}</h1>
            <p>Age: {stateAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ handelClick }>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}
export default Personcard