
import { useState, useEffect } from 'react';

function Loading() {
    const [Item, setItem] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                setItem(json);
                setDataIsLoaded(true);
            })
            .catch((err) => {
                console.log("Error fetching data:", err);
                setDataIsLoaded(true);
            });
    }, []);

    if (!dataIsLoaded) {
        return <h2>Data is loading...</h2>;
    }

    return (
        <div>
            <h1>User Directory</h1>

            {Item.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Loading;
