function Employee(props) {
    return(
        <div style={{boxShadow: 'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px'}} className="m-4 p-4">
            <div className="d-flex justify-content-between align-item-start">
                <img src ={props.hemu.imageUrl} className="my-2"></img>
                <div>
                <button className="btn-btn-primary me-2" ><i class="fa-solid fa-pen-to-square"></i></button>
                <button className="btn-btn-danger" ><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
            <h5>id : <span className="text-primary">{props.hemu.id} </span></h5>
            <h5>Fullname : <span className="text-primary">{props.hemu.firstname} {props.hemu.lastname}</span></h5>
            <h5>email : <span className="text-primary">{props.hemu.email}</span></h5>
            <h5>contactNumber: <span className="text-primary">{props.hemu.contactNumber}</span></h5>
            <h5>age : <span className="text-primary">{props.hemu.age }</span></h5>
            <h5>dob : <span className="text-primary">{props.hemu.dob}</span></h5>
            <h5>salary : <span className="text-primary">{props.hemu.salary}</span></h5>
            <h5>address : <span className="text-primary">{props.hemu.address}</span></h5>
        </div>
    )
};
export default Employee;