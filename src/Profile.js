import React from 'react';
import Avatar from './components/Avatar';


const Profile = ({ displayName, photo }) => (
    <div className="Profile">
        <Avatar photo={photo} />
        <h4>{displayName}</h4>


    </div>

)
export default Profile;