
const Greetings = (props) => {
    return props.timeOfDay === "Morning" ? (<h3>Good Morning!</h3>) : (<h3>Good Evening!</h3>);

}

export default Greetings