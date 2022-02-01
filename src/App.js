 import {useState} from 'react';
function App() {
    const [person, setPerson] = useState({
        name: 'Haseena',
        age: '30',
        msg: 'Test Message'
    });
    
    function changeMessage() {
        setPerson({...person, msg: 'New message'});
    }

    return (
        <div>
            <h2>{person.name}</h2>
            <h2>{person.msg}</h2>
            <button type="button" onClick={changeMessage}>Click me</button>
        </div>
    );
}

export default App;