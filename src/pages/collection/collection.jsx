import React ,{ useState }from 'react'
import list from "components/assets/allproduct.jsx"
import Box from "components/box/box.jsx"
import "./collection.css"

const Collection = () => {
    let [menu,setmenu]=useState("")
    return (
      <>
      <div id="searchspace">
        <div className="menus" id="all" onClick={()=>{setmenu("")}}>All</div>
        <input id="input" type="text" value={menu} placeholder="Search" onChange={(e) => setmenu(e.target.value)}
        />
      </div>
      <div id="shopoptions">
        <div className="menus" onClick={()=>{setmenu("foundation")}}>Foundation</div>
        <div className="menus" onClick={()=>{setmenu("brush")}}>Brush</div>
        <div className="menus" onClick={()=>{setmenu("nailpaint")}}>Nailpaint</div>
        <div className="menus" onClick={()=>{setmenu("lipstick")}}>Lipstick</div>
        <div className="menus" onClick={()=>{setmenu("kit")}}>Kit</div>
        <div className="menus" onClick={()=>{setmenu("serum")}}>Serum</div>
      </div>
      <div id="collect">
        {list.map((item)=>{
          return menu===""?<Box key={item.id} y={item}/>:item.category.includes(menu) | item.category.includes(menu.toLowerCase())?<Box key={item.id} y={item}/>:<></>
        })}
      </div>
      </>
    )
}

export default Collection
