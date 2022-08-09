import React, {useState} from 'react';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import './SignUp.css';
import {Link} from 'react-router-dom';
import {showErrorMsg, showSuccessMsg} from '../helpers/message';
import {showLoading} from '../helpers/loading';
import {signup} from '../api/auth';

const SignUp = () => {
    const [formData, setFormData] = useState({
        email:'',
        successMsg: false,
        errorMsg: false,
        loading: false,
    })
    const {email, successMsg, errorMsg, loading} = formData;

    const handleChange = evt => {
        //console.log();
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            errorMsg:'',
            successMsg:'',
        });
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        //client side validation
        if (isEmpty(email)){
            setFormData({
                ...formData, errorMsg: 'Email is required'
            });
        } else if (!isEmail(email)){
            setFormData({
                ...formData, errorMsg: 'Invalid Email'
            });
        } else {
            const {email} = formData;
            const data = {email};

            setFormData({...formData, loading:true});

            signup(data)
            .then(response => {
                console.log('Axios signup success: ', response);
                setFormData({
                    email: '',
                    loading: false,
                    successMsg: response.data.successMessage
                })
            })
            .catch (err => {
                console.log('Axios signup error: ', err);
                setFormData({...formData, loading: false, errorMsg: err.response.data.errorMessage })
            });
        }
    };

    const showSignUpForm = () => (
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
            <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                    Create Account
                </button>
            </div>
            <p className='text-center text-black'>
                Have an account? <Link to ='/signin'> Sign In</Link>
            </p>
        </form>

    );
    return (
        <div className='signup-container'>
            <div className='row px-3 vh-100'>
                <div className='col-md-5 mx-auto align-self-center'>
                {successMsg && showSuccessMsg(successMsg)}
                {errorMsg && showErrorMsg(errorMsg)}
                {loading && <div className='text-center pb-4'>{showLoading()}</div>}
                {showSignUpForm()}
                </div>
            </div>
    </div>)
};

export default SignUp;

