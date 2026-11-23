
import {useState} from 'react'
import react from 'react'
import './Api_fetching.css'
import Sidebar from './Sidebar.jsx';
import Dashboard from './Dashboard';
import Contact_card from './Contact_card.jsx';
import {
  Star,
  Bell,
  Mail,
  BriefcaseBusiness,
  Settings,
  ChevronDown,
  Menu
} from 'lucide-react';


function Api_fetching(){
    const [language, setLanguage] = useState('EN');
    const [showLanguages, setShowLanguages] = useState(false);
    const [slider,setslider] = useState(false);
    const [activePage, setActivePage] = useState(null);

    const handleNavigate = (page) => {
      setActivePage(page);
      setslider(false);
    };

    return (
        <section className="Api_Fetching">
            <nav className="navbar">

                 
        
            <button className="menu-Button" onClick={()=>setslider(!slider)}>
                  <Menu size={24} />
            </button>

                <div classNamme="Api_Fetching">
                    Contacts
                </div>

                <div className="NavInput">
                    <input
                     type="Text"
                     id="NavInput"
                     Placeholder="Search Here"
                     ></input>
                </div>

                <ul className="Navlinks">
                    <li><a href="Mial"> <Mail/> </a></li>
                    <li><a href="Star"> <Star/> </a></li>
                    <li><a href="Bell"> <Bell/> </a></li>
                    <li><a href="BriefcaseBusiness,"> <BriefcaseBusiness/> </a></li>
                    <li><a href="Settings"> <Settings/> </a></li>

                    {/* Profile Image */}
                    <li>
                        <img
                          src="/profile.png"
                          alt="Profile"
                          className="profile-img"
                        />
                    </li>

                    {/* Language Selector */}
                    <li className="language-container">
                        <button
                          className="language-btn"
                          onClick={() => setShowLanguages(!showLanguages)}
                        >
                            {language}
                            <ChevronDown size={16}/>
                        </button>

                        {showLanguages && (
                            <div className="language-dropdown">
                                {['EN', 'HI', 'FR'].map(lang => (
                                    <button
                                      key={lang}
                                      onClick={() => {
                                        setLanguage(lang);
                                        setShowLanguages(false);
                                      }}
                                    >
                                        {lang}
                                    </button>
                                ))}
                            </div>
                        )}
                    </li>
                </ul>
            </nav>
          <Sidebar slider={slider} onNavigate={handleNavigate} />
          {activePage === 'contact' && <Contact_card />}
          {activePage === 'Dashboard' && <Dashboard/>}
          
        </section>
    )
}
/*ye (<Sidebar slider={slider} /> ) yaha pe hm dekh sakte h ki slider parent navbar me h or hm usko child sidebar ko de rahe taki jb bhi slider true ho to sidebar khul jayega or jb false ho tb close jayega */

export default Api_fetching
