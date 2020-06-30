import React from 'react';
import { useStateMachine } from 'little-state-machine';
import updateAction from '../actions/updateActions';

const Welcomepage = props => {
    const { state } = useStateMachine(updateAction);

    return (
        <form>
            <h1>Welcome</h1>
            <h2>{state.data.firstName} !</h2>
            <p>You have been registered for this awesome service. <br />
            Please check your email listed below for instructions. </p>
            <h3>{state.data.email}</h3>
            <input type="submit" value="Sign In" />
        </form>
    );
};

export default Welcomepage;
