import './side-bar.css';
import ContactUsIcon from '../../assests/contact-us.png';
import AboutUsIcon from '../../assests/about-us.png';
import FAQsIcon from '../../assests/faq.png';
import MapIcon from '../../assests/map_1865083.png';
import { NavLink } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'sidebarActive' : 'sidebarInactive'
            }
            to="/"
          >
            <img className="sidebarIcon" src={MapIcon} alt="Map Icon" />
            Map
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'sidebarActive' : 'sidebarInactive'
            }
            to="/about-us"
          >
            <img
              className="sidebarIcon"
              src={AboutUsIcon}
              alt="About Us Icon"
            />
            About us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'sidebarActive' : 'sidebarInactive'
            }
            to="/contact-us"
          >
            <img
              className="sidebarIcon"
              src={ContactUsIcon}
              alt="Contact Us Icon"
            />
            Contact us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'sidebarActive' : 'sidebarInactive'
            }
            to="/faqs"
          >
            <img className="sidebarIcon" src={FAQsIcon} alt="FAQs Icon" />
            FAQs
          </NavLink>
        </div>
      </div>
    </div>
  );
}
