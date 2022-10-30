import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUser, setdisplayUser] = useState(users)

    const handleDelete = (user) => {
        const agree = window.confirm(`are you want to delete ${user.name}`)
        if(agree){
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert("successfully delete user one")
                    const restUsers = displayUser.filter(restUser => restUser._id !== user._id);
                    setdisplayUser(restUsers)
                }
            })
        }
    }

    return (
        <div>
            <h3>User = {displayUser.length}</h3>
            <div>
                {displayUser.map(user => <p key={user._id}>
                    {user.name} {user.email} {user.address}
                    <Link to={`/update/${user._id}`}>
                    <button>Update</button>
                    </Link>
                    <button onClick={() => handleDelete(user)}>Delete</button>
                </p>)}
            </div>
        </div>
    );
};

export default Home;