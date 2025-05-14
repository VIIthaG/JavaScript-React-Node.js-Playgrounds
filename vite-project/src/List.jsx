function List(props){


        props.fakihin.sort((a,b)=> b.id - a.id)
        const bubu= props.fakihin.filter(element=> !element.name.startsWith('a'))

        const other = bubu.map(element=>    <li key={element.id}>{element.name} :  <b>{element.calories}</b></li>   )
        return(<ol>{other}</ol>)


}

export default List


function List(){

        const thing =["fruit","banana", "gun", "dagger"]

        const list = thing.map(element=> <li>{element}</li>)
}