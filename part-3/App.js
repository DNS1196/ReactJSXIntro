const App = () => {
    return (
        <div>
            <Person
                name="Emily Johnson"
                age={26}
                hobbies={["Reading", "painting", "hiking", "playing board games"]} />
            <Person
                name="William Chen"
                age={17}
                hobbies={["Playing basketball", "cooking", "listening to music", "traveling"]} />
            <Person
                name="Sophia Patel"
                age={21}
                hobbies={["Dancing", "photography", "practicing yoga"]} />
        </div>
    )
}