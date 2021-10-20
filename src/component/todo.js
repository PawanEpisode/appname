import React , {useEffect, useState }from 'react'
import logo from "../logo.svg";
import  "../App.css"

const Todo = () => {
    const [data,setData] = useState('');
    const [items,setItems]=useState([]);
    // const arr={
    //     toDel : [],
    //     checked: []
    // };
    // const to=[
    //     {
    //         isChecked: true, 
    //         label: 'Apple',
    //         id: 1,
    //     },
    //     {
    //         isChecked: false, 
    //         label: 'mango',
    //         id: 2,
    //     },
    // ];

    const addItems =(e)=> {
        e.preventDefault();
        const todo= {
            value: data,
            done: false,
        };

        if(!data) return;
        setItems([...items, todo])
        setData('')
    }

    const strikeOut=(id)=> {
        
        if(items[id].done === false)
        {
            items[id].done=true;
            setItems([...items])
        }
        else {
            // let mapped = items.map(task => {
            //     return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
            //   });
            //   setItems(mapped);
            //items[id].done = !items[id].done;
             items[id].done = false;
            setItems([...items]);
        }
    }


    const removeAll=()=> {
        setItems([]);
    }

    // const handleToggle = (id) => {
        
    //   }

    const btnClicked = (id) => {
        
        if(items[id].done===true)
        {
            const updatedItems= items.filter((elem,ind) => {
                return ind!==id;
            });
            //items[id].done=false
            return setItems(updatedItems)
        }
        else
        return null
    };


    const remSelected = ()=> {
        const bt= items.filter((item)=>{
            return item.done===false
        })
        //console.log(bt);

        return setItems(bt)

    };
    
    // useEffect(()=>{
    //     return ;
    // },[items])


    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure >
                        <img src={logo} alt="reactlogo"/>
                        <figcaption className="heading" >To Do App React </figcaption>
                    </figure>

                    <div className="addItems">
                        <input className="input-field" type="text" placeholder="Add Items..." 
                        value={data}
                        
                        onChange={(e)=> setData(e.target.value)}
                        
                        />
                        <button className="input-button" type="button" onClick={addItems}>add item</button>
                    </div>

                    <div className="showItems">

                        { 
                            items.map((elem,ind)=> {
                                return (
                                    
                                        <div className="list-container" key={elem.value}>
                                            <input className="box" type="checkbox" onClick={()=>strikeOut(ind)} />
                                            <h3 className={elem.done ? "strike":"Non-strike"}>{elem.value}</h3>
                                            <button className="input-button" type="button" onClick={()=>btnClicked(ind)}>remove</button>
                                        </div>
                                )
                            })
                        }

                        
                    </div>


                    <div className="btnContainer">
                        <button className="input-button" onClick={removeAll}>Remove All</button>
                        <button className="input-button" onClick={remSelected}>Remove selected</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
