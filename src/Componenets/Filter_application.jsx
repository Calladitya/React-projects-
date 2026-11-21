
import { useState } from 'react';

function Filter_application() {
    const [searchTerm, setSearchTerm] = useState('');

    const list = [
        'Aditya', 'Bob', 'Charlie', 'David', 'Eve',
        'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'
    ];

    const filteredList = list.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="filter-application">
            <h1>Filter Application</h1>

            <div className="filter">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />

                <button>Filter</button>
            </div>

            <div>
                <ul>
                    {filteredList.length > 0 ? (
                        filteredList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    ) : (
                        <li>No results found</li>
                    )}
                </ul>
            </div>
        </section>
    );
}

export default Filter_application;
