const App = () => {
    return (<div>
        <Tweet
            name="Taco Taco"
            username="taco1"
            date={new Date().toDateString()}
            msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        />
        <Tweet
            name="Jasmine Lee"
            username="jlee_23"
            date={new Date().toDateString()}
            msg="A, amet mollitia hic odit, quidem eveniet assumenda consequatur atque labore temporibus "
        />
        <Tweet
            name="Kyle Davis"
            username="kdavis_88"
            date={new Date().toDateString()}
            msg="omnis ad repudiandae perferendis consectetur reiciendis minima aperiam ratione inventore!"
        />

    </div>
    )
}