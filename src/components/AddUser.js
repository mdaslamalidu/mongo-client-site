import React, { useState } from 'react';

const AddUser = () => {
    const [user, setUser] = useState({})


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(user)

        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert("user added successfully")
                event.target.reset()
            }
        })
    }

    const handleBlur = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        setUser((current) => {
            return {...current, [field]:value}
        })

    }


    return (
        <div>
            <h3>Add Multiple User</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleBlur} type="text" name="name" id="" placeholder='name'/>
                <br/>
                <input onChange={handleBlur} type="text" name="password" id="" placeholder='password'/>
                <br/>
                <input onChange={handleBlur} type="text" name="address" id="" placeholder='address'/>
                <br/>
                <input onChange={handleBlur} type="email" name="email" id="" placeholder='email'/>
                <br/>
                <button type="submit">add user</button>
            </form>
        </div>
    );
};

export default AddUser;