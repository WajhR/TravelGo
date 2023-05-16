import React, {useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        //sign_in logic
        console.log('Email:', email);
        console.log('Password:', password);
    
};

return(
    <div>
        <h2>Sign In</h2>
        <form>
        <label htmlFor="email">Email:</label>
        <input
        type='email'
        id='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
        type='password'
        id='password'
        value={password}
        onchange={(e) => setPassword(e.target.value)}
        />
        <button type='button' onClick={handleSignIn}>
            Sign In
        </button>
        </form>
    </div>
);
};
export default SignIn;