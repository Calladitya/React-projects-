
import { useState } from 'react';

import {
  Phone,
  MessageCircle,
  Video,
  EllipsisVertical
} from 'lucide-react';

import './Contact_card.css';

function Contact_card() {

  const [activeMenuId, setActiveMenuId] = useState(null);

  const contacts = [
    { id: 1, name: 'Jakob Gouse', company: 'Highspeed Inc.', image: 12 },
    { id: 2, name: 'Gretchen Aminoff', company: 'Redblue Studios', image: 47 },
    { id: 3, name: 'Davis Siphron', company: 'Beep Beep Inc.', image: 33 },
    { id: 4, name: 'Zaire Lubin', company: 'Highspeed Inc.', image: 68 },
    { id: 5, name: 'Miracle Rosser', company: 'Zero Two Studios', image: 44 },
    { id: 6, name: 'Ann Baptista', company: 'Zero Two Studios', image: 49 },
    { id: 7, name: 'Charlie Dokidis', company: 'Maximize Team', image: 52 },
    { id: 8, name: 'Carla Levin', company: 'Zero Two Studios', image: 25 }
  ];

  return (
    <section className="Contact_list">

      <input
        type="text"
        placeholder="Enter contacts for search"
      />

      <button className="Add_Contact" type="button">
        + NEW CONTACT
      </button>

      <div className="Contact_grid">

        {contacts.map((contact) => (

          <div className="Contacts" key={contact.id}>

            {/* Three dot menu */}
            <button
              className="Contact_menu"
              type="button"
              onClick={() =>
                setActiveMenuId(
                  activeMenuId === contact.id ? null : contact.id
                )
              }
            >
              <EllipsisVertical />
            </button>

            {/* Dropdown */}
            {activeMenuId === contact.id && (
              <div className="Contact_dropdown">

                <button
                  type="button"
                  onClick={() => {
                    console.log('Delete clicked:', contact.id);
                    setActiveMenuId(null);
                  }}
                >
                  Delete
                </button>

              </div>
            )}

            {/* Contact Avatar */}
            <div className="Contact_avatar">

              <img
                src={`https://i.pravatar.cc/180?img=${contact.image}`}
                alt={contact.name}
              />

              <span className="Contact_status"></span>

            </div>

            {/* Contact Name */}
            <div className="Name">

              <h1>{contact.name}</h1>
              <p>{contact.company}</p>

            </div>

            {/* Contact Actions */}
            <ul className="Contact_actions">

              <li>
                <button type="button">
                  <Phone />
                </button>
              </li>

              <li>
                <button type="button">
                  <MessageCircle />
                </button>
              </li>

              <li>
                <button type="button">
                  <Video />
                </button>
              </li>

            </ul>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Contact_card;
