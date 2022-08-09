import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import {showErrorMsg} from '../helpers/message';
import {showLoading} from '../helpers/loading';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import {signin} from '../api/auth';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:'',
        errorMsg: false,
        loading: false,
        redirectToDashboard: false,
    });
    const {email, password, errorMsg, loading, redirectToDashboard} = formData;

    const handleChange = evt => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            errorMsg:'',
        });
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        //client side validation
        if (isEmpty(email) || isEmpty(password)){
            setFormData({
                ...formData, errorMsg: 'All fields are required'
            });
        } else if (!isEmail(email)){
            setFormData({
                ...formData, errorMsg: 'Invalid Email'
            });
        } else {
            const {email, password} = formData;
            const data = {email, password};

            setFormData({...formData, loading:true});

            signin(data)
            
        }
    };

    
    const showSignInForm = () => (
        <form className='signup-form' onSubmit={handleSubmit} noValidate>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        < i className="fa fa-envelope"></i>
                    </span>
                </div>
                <input
                    name='email'
                    value={email}
                    className='form-control'
                    placeholder='Email Address'
                    type='email'
                    onChange={handleChange}
                />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        < i className="fa fa-lock"></i>
                    </span>
                </div>
                <input
                    name='password'
                    value={password}
                    className='form-control'
                    placeholder='Create Password'
                    type='password'
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                    Sign In
                </button>
            </div>
            <p className='text-center text-black'>
                Don't have an account? <Link to ='/signup'> Sign Up</Link>
            </p>
        </form>

    );
    return (
        <div className='signup-container'>
            <div className='row px-3 vh-100'>
                <div className='col-md-5 mx-auto align-self-center'>
                {errorMsg && showErrorMsg(errorMsg)}
                {loading && <div className='text-center pb-4'>{showLoading()}</div>}
                {showSignInForm()}
                </div>
            </div>
    </div>)
}

export default SignIn;