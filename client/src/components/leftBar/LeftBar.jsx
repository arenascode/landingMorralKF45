import { useSessions } from "../../context/authContext.jsx"
import "./leftBar.scss"

const LeftBar = () => {

  const {currentUser, setCurrentUser} = useSessions()
  return (
    <div className="leftBarContainer" id="leftBarContainer">
      <div className="adminProfile">
        <div className="picContainer">
          <img src="assets/img/icons/iconStore.png" alt="" />
        </div>
        <div className="nameContainer">
           <span>Admin</span>
          <span>{currentUser}</span>
        </div>
         
      </div>
      <hr />
      <div className="CtaContainer">
        <button className="btn btn-sm btn-error text-white" onClick={() => setCurrentUser(null)}>Cerrar Sesión</button>
      </div>
    </div>
  )
}
export default LeftBar