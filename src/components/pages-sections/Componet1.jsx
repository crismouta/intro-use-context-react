import { useContext } from "react"
import { UserContext } from "../../context/user/UserContext"

const Component1 = () => {
    const patata = useContext(UserContext);
    return (
        <div>{patata}, Component 1</div>
    )
}

export default Component1