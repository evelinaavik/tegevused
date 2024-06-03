import React from 'react'
import tegevusedJSON from "../tegevused.json"
import {useState} from "react"

function Tegevused() {
const [tegevused, uuendaTegevused] = useState(tegevusedJSON);

const n2itaK6iki = () =>  {
    const vastus = tegevused.filter(element => element.userId === 1);
    uuendaTegevused(vastus);
}



  return (
    <div>
        {/* {tegevused.map(element => <div>{element}</div>)}
        See tähendab, et kuvame välja objekti, millel on võtmed (vaata tegevused.json faili sisse).
React ei suuda võtmetega väärtusi välja kuvada -> ainult väärtusi, mis on võtmete taga.  */}
      <div>Näita kogu tegevuse arvu .length abil</div>
      <button onClick={() => n2itaK6iki()}>Kva kõik tegeuvsed</button>

            {tegevused.map(element =>
              <div>
                <div>{element.userID}</div>
                <div>{element.id}</div>
                <div>{element.title}</div>
                <div>{element.completed}</div>
                <br />
            </div>)}
    </div>
  );
}

export default Tegevused