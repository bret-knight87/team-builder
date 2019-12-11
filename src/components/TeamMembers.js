import React from 'react';
import '../App.css';

export default function Members(props) {
    console.log(props);
    return (
        <div className="team-list">
            {props.teamList.map(person => {
                return (
                    <div className="personContainer">
                        <div className="person" key={person.id}>
                            <h2>{person.name}</h2>
                            <p>Birthday: {person.birthday}</p>
                            <p>Email: {person.email}</p>
                            <p>Project Role: {person.role}</p>
                            <p>Location: {person.location}</p>
                            <button onClick={() => props.editMember(person)}>Edit</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}