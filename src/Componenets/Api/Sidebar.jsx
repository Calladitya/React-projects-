import './Sidebar.css';
import Contact_card from './Contact_card.jsx';

function Sidebar({ slider }) {

 const [ShowContacts,setShowContacts]= useState(false);

  return (
    <>
      {slider && (
        <section className="Sidebar">
          <div className="Api_fetching">api_fetching</div>

          <ul>
            <li><a href="/Dashboard">Dashboard</a></li>
            <li><a href="/Project">Project</a></li>
            <li>
              <button type="button" onClick={() => setShowContacts(true)}>
                Contacts
              </button>
            </li>
            <li><a href="/Kanban">Kanban</a></li>
            <li><a href="/Analytics">Analytics</a></li>
            <li><a href="/Calendar">Calendar</a></li>
            <li><a href="/Messages">Messages</a></li>
          </ul>
        </section>
      )}

     {showContacts && <Contact_card />}
    </>
  );
}

export default Sidebar;