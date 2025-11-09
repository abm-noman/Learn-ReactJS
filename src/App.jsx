import UserStatus from "./components/UserStatus";
import Weather from "./components/weather";

function App() {

    return (
        <div>
            <Weather />
            <UserStatus loggedIn = {true} isAdmin={false} />

        </div>
    );
}

export default App;