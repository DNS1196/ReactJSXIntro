const Tweet = (props) => {
    return (
        <div className="tweet">
            <span>{props.username}</span>
            <span className="name">{props.name}</span>
            <span className="date">{props.date}</span>
            <p>{props.msg}</p>

        </div>
    )
}