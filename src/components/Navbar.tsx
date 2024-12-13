import './Navbar.modules.css'

export function Navbar() {
  return(
    <div className='main'>
      <div className="logo">
        Logo
      </div>
      <div className="left-itens">
        <p>Hello <a href="#">User</a>!</p>
        <a href="#" className='logout'>Logout</a>
       
      </div>
    </div>
  )
}