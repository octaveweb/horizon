function Navbar() {
  return (
    <nav>
        <div className="logo">
            <span>Horizon Courts</span>
        </div>
        <ul>
            <li className="active">About Us</li>
            <li>Services</li>
            <li>Coaches</li>
            <li>Events</li>
            <li>Contacts</li>
        </ul>
        <button className="btn btn-h">Book now <i class="ri-arrow-right-up-long-line"></i></button>
    </nav>
  )
}

export default Navbar