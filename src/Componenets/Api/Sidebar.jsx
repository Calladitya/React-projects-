import './Sidebar.css';

function Sidebar({ slider, onNavigate }) {
  if (!slider) return null;

  return (
    <section className="Sidebar">
      <div className="Api_fetching">api_fetching</div>

      <ul>
        <li><a href="/Dashboard">Dashboard</a></li>
        <li><a href="/Project">Project</a></li>
        <li>
          <button
            type="button"
            className="Sidebar_contact"
            onClick={() => onNavigate('contact')}
          >
            Contact
          </button>
        </li>
        <li><a href="/Analytics">Analytics</a></li>
        <li><a href="/Calendar">Calendar</a></li>
        <li><a href="/Messages">Messages</a></li>
      </ul>
    </section>
  );
}

export default Sidebar;
