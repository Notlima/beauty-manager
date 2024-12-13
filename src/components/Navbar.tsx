import './Navbar.modules.css'

export function Navbar() {
  return(
    <div className='main'>
      <div className="Logo">
        Logo
      </div>
      <div className="left-itens">
        <p>Hello <a href="#">User</a>!</p>
        <a href="#">Logout</a>
      </div>
    </div>
  )
}