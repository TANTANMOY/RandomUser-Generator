import React, { useState, useEffect } from "react";

function User() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(`https://randomuser.me/api/`);
    const data = await response.json();
    const [item] = data.results;
    setUser(item);
    setLoading(false);
  }, []);

  const  refreshpage = (e) => {
    e.preventDefault()
      window.location.reload(false)
  }
  return (
    <div>
      <h2>Random user</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
         <img src={user.picture.large} alt=""/>
          <h3>Name: {user.name.first} {user.name.last}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Gender: {user.gender}</h3>
          <h3>Age: {user.dob.age}</h3>
          <h3>Phone: {user.phone}</h3>
          <h3>Address: </h3>
          <h3>City: {user.location.city}</h3>
          <h3>State: {user.location.state}</h3>
          <h3>Country: {user.location.country}</h3>

          <button style={{color: "#f00", backgroundColor: "#ff0", width: "30%"}}onClick={refreshpage}>Click to reload</button>
        </>

      )}
    </div>
  );
}

export default User;
