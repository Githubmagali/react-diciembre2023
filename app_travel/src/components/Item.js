
  export default function Item({item, handleDeleteItem, handleToggleItem}){
    return(
        <li>
            <input type="checkbox" value={item.packed} onChange={() => handleToggleItem(item.id)} />
                <span>{item.quantity}{item.description}</span>
                <button onClick={() => handleDeleteItem(item.id)}>X</button>
           
        </li>
    )
  }