function List(props) {
    const { films } = props;
    return (
        <div>
            {films && films.map(fil => <div key={fil.id}></div> )}
        </div>
    );
}
export default List;