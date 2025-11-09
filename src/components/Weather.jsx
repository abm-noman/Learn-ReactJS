
const Weather = () => {

    let temp = 99;
    //let return <h1> </h1> "Mild";
    
    if (temp < 15) {
        return <h1>"Weather is Cold Outside" </h1>;
    }    else if (temp >= 15 && temp <= 25) {
        return <h1>"Weather is Mild Outside" </h1>;
    }    else {
        return <h1>"Weather is Hot Outside"  </h1>;
    }
}

export default Weather;
