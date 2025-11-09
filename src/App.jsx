import Greetings from "./components/Greetings";
import UserStatus from "./components/UserStatus";
import Weather from "./components/weather";

function App() {

    return (
        <div>
            
            <UserStatus loggedIn = {true} isAdmin={false} />
            <Weather />
            <Greetings timeOfDay={""}/>

        </div>
    );
}

export default App;