import { UserContext } from "./UserContext";


const UserProvider = ({children}) => {
    const user = "Alex";
    //console.log(children)
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider