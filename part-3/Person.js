const Person = ({ name, age, hobbies }) => {
    const msg = age >= 18 ? "Please go vote!" : "you must be 18 to vote";


    const hobbyList = hobbies.map(h => <li>{h}</li>);


    return (
        <div>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {name.slice(0, 6)}</li>
                <li>Age:{age}</li>
                <li>Hobbies:
                    <ul>
                        {hobbyList}
                    </ul>
                </li>
            </ul>
            <h3>{msg}</h3>

        </div>
    )
};