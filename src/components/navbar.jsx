import '../styles/navbar.css'
import Logo from '../images/twitter logo.png'


const Navbar = () => {
  let links = [
    { image: "/images/home.svg", link: "Home" },
    { image: "/images/hashtag.png", link: "Explore" },
    { image: "/images/notification.svg", link: "Notification" },
    { image: "/images/message.svg", link: "Message" },
    { image: "/images/bookmark.svg", link: "BookMarks" },
    { image: "/images/twitter icon.svg", link: "Twitter Blue" },
    { image: "/images/profile.svg", link: "Profile" },
    { image: "/images/more.svg", link: "More" }
  ]
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="navbarlinks">
        <ul>
          {links.map((data) => {
            return (
              <li><img src={data.image} width="25" alt="" /><a href="">{data.link}</a></li>

            )
          })}
        </ul>
        <button className='btn'>Tweet</button>
      </div>
    </div>
  );
}

export default Navbar;