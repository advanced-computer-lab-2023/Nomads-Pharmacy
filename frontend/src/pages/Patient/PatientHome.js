import {Link} from 'react-router-dom'

const AdminHome = () => {

  return (

    <div className="admin-home" style={{ display: 'flex' }}>
      <div className="home-button">
        <Link to="/patient-view-medicine">
        <button>View Medicine</button>
        </Link>
      </div>
    </div>

  )
}
export default AdminHome