function Nav({setComponent,component}) {
  const handleClick=(e)=>{
    e.preventDefault()
    setComponent(e.target.name)
  }
    const navLinks = [{label:"About Me",name:"aboutMe"},{label:"Portfolio",name:"portfolio"},{label:"Contact",name:"contact"},{label:"Resume",name:"resume"}]
    return (
      <div className="navigation" >
      {navLinks.map(navLink=>{
        const isActive=navLink.name===component
        let classes="m-1 m-md-5"
        if (isActive){
          classes=classes+" active-link"
        }
          return (
              <a name={navLink.name} onClick={handleClick} className={classes}>{navLink.label}</a>
          )
      })}
      </div>
    );
  }
  
  export default Nav;