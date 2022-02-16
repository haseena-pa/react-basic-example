import { useRef } from 'react';
function App() {
    let firstNameRef = useRef(null);
    const saveData = (e) => {
        e.preventDefault();
        console.log(firstNameRef.current.innerHTML);
    }

    return (
        <>
            <form onSubmit={saveData}>
                <div ref={firstNameRef}>dfsdf</div>
                <input type="text" name="firstName" />
                <button type="submit">Save</button>
            </form>
        </>
    )


}

export default App;