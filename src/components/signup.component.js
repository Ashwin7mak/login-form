import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../actions/updateActions';

const Signup = (props) => {

    const { action, state } = useStateMachine(updateAction);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, e) => { 
        console.log(data);
        action(data);
        props.history.push("./welcome");
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Let's <br /><strong>Sign Up</strong></h1>
            <p> Use the form below to sing up for this super awesome service. You're only a few steps away!</p>

            <label>First Name</label>
            <input
                type="text"
                name="firstName"
                ref={register({ 
                    required: "Enter valid first name", 
                    minLength: {
                        value: 3,
                        message: "First name must be atleast 3 characters"
                    } })}
            />
            {errors.firstName && <span className="error">{errors.firstName.message}</span>}

            <label>Email Address</label>
            <input
                type="email"
                name="email"
                ref={register({
                    required: "Enter your e-mail",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Enter a valid e-mail address"
                    }
                })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}

            <label>Password</label>
            <input
                name="password"
                type="password"
                ref={register({ 
                    required: 'Enter valid password', 
                    minLength:  {
                        value: 8,
                        message: "Password must have atleast 8 characters"
                    }
                })}
            />
            {errors.password && <span className="error">{errors.password.message}</span>}

            <input type="submit" value="Sign Up" />

        </form>
    );
};

export default withRouter(Signup);

