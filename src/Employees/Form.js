import { useForm } from 'react-hook-form';
function Login(){
    const {register,handleSubmit,formState : {errors}} = useForm();
    const loginUser=(data) => {
        console.log(data)
    }
    return( 
        <div className='container'>
            <div className= 'row'>
                <div className = 'col-sm-6 mx-auto'>
                    <h2 className ='text-center'>login</h2>
                    <form onSubmit={handleSubmit(loginUser)} noValidate>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" {...register('email',{required: true,pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/})}/>
                        {errors.email?.type  ==='required' && <p className='text-danger'>Email is required</p>}
                        {errors.email?.type  ==='pattern' && <p className='text-danger'>invalid email format</p>}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword" className="form-label">Password</label>
                        <input type="Password" className="form-control" id="password" {...register('password',{required:true, pattern:/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/})}/>
                        {errors.password?.type  ==='required' && <p className='text-danger'>password is required</p>}
                        {errors.password?.type  ==='pattern' && <p className='text-danger'>invalid password format</p>}
                    </div>
                    <button type = 'submit' className='btn btn-success'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default Login;