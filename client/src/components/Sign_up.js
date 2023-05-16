import React, {useState } from react;

const SignUp = () => {
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSignUp = () => {
        //sign_up logic
        console.log('Email:', email);
        console.log('Password:', password);
    
};

return(
    <div>
        <h2>Sign Up</h2>
        <form>
        <label htmlFor="email">Email:</label>
        <input
        type='email'
        id='email'
        value={email}
        onchange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
        type='password'
        id='password'
        value={password}
        onchange={(e) => setPassword(e.target.value)}
        />
        <button type='button' onClick={handleSignUp}>
            Sign Up
        </button>
        </form>
    </div>
);
};
export default SignUp;


