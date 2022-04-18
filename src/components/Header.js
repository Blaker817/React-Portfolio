import Nav from "./Navigation";

function Header({setComponent,component}) {
  return (
    <div className="p-3 row justify-content-between bg-danger text-white" >
      <div className="col-12 col-md-auto">Blake Elliott</div>
      <div className="col-12 col-md-auto"> <Nav setComponent={setComponent} component={component}/></div>
    </div>
  );
}

export default Header;