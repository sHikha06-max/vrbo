

const NavbarImage=()=>{
  return <div>
      
      <div className="logo2">
          <img src="data:image/png;base64,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"/>
      {/* <img src="https://odis.homeaway.com/odis/homepage/695564d7-86a5-4b77-9a88-82147910f864.hw11.jpg"/> */}
  </div>
  </div>
}

export {NavbarImage}