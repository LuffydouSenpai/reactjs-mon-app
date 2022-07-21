/* function Menu(props){
    return(
        <nav>
         <div className="logo">
            <img src="" alt="" />
        </div> 
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>  
        </nav>
    )
} */

const MenuItems =['Home','Boutique','Panier'];
const Menu = (props)=>{
    
    return(
        <nav>
         <div className="logo">
            <img src="" alt="" />
            {props.title}
        </div> 
        <ul>
            {/* je suis un commentaire */}
            {MenuItems.map((value, index) => {
                return <li key={index}>{value}</li>
            })}
        </ul>  
        </nav>
    )
}

export default Menu //ou export {Menu}