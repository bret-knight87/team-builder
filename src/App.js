import React, {useState} from 'react';
import './App.css';
import data from './Data';

import Forms from './components/Forms';
import TeamMembers from './components/TeamMembers';

function App() {
  const [team, setTeam] = useState(data);
  const [memberToEdit, setMemberToEdit] = useState();
  const addNewMember = member => {
    setTeam([...team, member]);
  };

  const editMember = function(updatedMember) {
    setTeam(team.map((teammate) => {
      if (teammate.id === updatedMember.id) {
        return updatedMember
      } else {
        return teammate
      }
    }));
    setMemberToEdit(null);
  }

  return (
    <div className="container">
      <h1 className="pageTitle">Umphrey's McGee</h1>
      <Forms addNewMember={addNewMember} memberToEdit={memberToEdit} editMember={editMember} />
      <TeamMembers teamList={team} editMember={setMemberToEdit} />
    </div>
  )
}

export default App;