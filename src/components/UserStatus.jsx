
const UserStatus = (props) => { 

    if (props.loggedIn && props.isAdmin) {
        return (
            <div>
                <h2>Welcome back, Admin!</h2>
                {props.isAdmin ? <p>You have administrative privileges.</p> : <p>You are logged in as a regular user.</p>}
            </div>
        );
    } else if (props.loggedIn) {
        return (
            <div>
                <h2>Welcome back, User!</h2>
                <p>You are logged in as a regular user.</p>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Welcome, Guest!</h2>
                <p>Please log in to access more features.</p>
            </div>
        );
    }

}

export default UserStatus
