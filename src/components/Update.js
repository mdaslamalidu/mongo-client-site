import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const stordUser = useLoaderData();
    const [user, setUser] = useState(stordUser)

    const handleUpdateSubmit = (event) => {
        event.preventDefault()
        fetch(`http://localhost:5000/users/${stordUser._id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert("user updated successfully")
            }
        })
    }

    const handleChange = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        setUser((current) => {
            return {...current, [field]:value}
        })
        console.log(user)
    }

    return (
        <div>
            <h2>Please Update {stordUser.name}</h2>
             <form onSubmit={handleUpdateSubmit}>
                <input onChange={handleChange} type="text" defaultValue={stordUser.name} name="name" id="" placeholder='name'/>
                <br/>
                <input onChange={handleChange} type="text" defaultValue={stordUser.password} name="password" id="" placeholder='password'/>
                <br/>
                <input onChange={handleChange} type="text" defaultValue={stordUser.address} name="address" id="" placeholder='address'/>
                <br/>
                <input onChange={handleChange} type="email" defaultValue={stordUser.email} name="email" id="" placeholder='email'/>
                <br/>
                <button type="submit">Update user</button>
            </form>
        </div>
    );
};

export default Update;