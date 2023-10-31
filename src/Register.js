import {useForm} from 'react-hook-form';
import {useEffect} from 'react';
import axios from 'axios';

function Register() {
    const {register,handleSubmit,formState:{errors},watch} = useForm();
    const password= watch('password');
    const registerUser = () => {

    };
    useEffect(()=> {
        axios.get('https://dummyjson.com/products/1').then(function(response){
            console.log(response)

        }).catch(function(error){

        })
    },[]);
        
        return(
            <div className='container'>
            <div className= 'row'>
                <div className = 'col-sm-6 mx-auto'>
                    <h2 className ='text-center'>register</h2>
                    <form onSubmit={handleSubmit(registerUser)} noValidate>
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
                    <div className="mb-3">
                        <label for="conformPassword" className="form-label">conform Password</label>
                        <input type="Password" className="form-control" id="conformPassword" {...register('conformPassword',{required:true, validate: (value) => value === password})}/>
                        {errors.conformPassword?.type  ==='required' && <p className='text-danger'> conform password is required</p>}
                        {errors.conformPassword?.type  ==='validate' && <p className='text-danger'>password not matching</p>}
                        {errors.password?.message}
                    </div>
                    <button type = 'submit' className='btn btn-success'>Login</button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
    export default Register;
   
