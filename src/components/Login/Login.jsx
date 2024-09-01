import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../fairbase/fairbase.config';
import { useState } from 'react';

const Login = () => {

    const [user,setUser]=useState('');

    const auth = getAuth(app);
    console.log(auth);

    const googleProvider = new GoogleAuthProvider();

    const githubProvider= new GithubAuthProvider();

    const handleGooglSignIn = () => {
        // console.log("google is calling");
        signInWithPopup(auth, googleProvider)
            .then(result => {
              const loggerUser=result.user;
              console.log(loggerUser);
              setUser(loggerUser);
            })
            .catch(error =>{
                console.log('error ',error.message)
            })
    }


    const handleSignOut = () =>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            console.log("log out ")
            setUser(null);
        })
        .catch(error=> console.log(error))
    }

    const handleGithubSingIn= ()=>{
        signInWithPopup(auth, githubProvider)
            .then(result => {
              const loggerUser=result.user;
              console.log(loggerUser);
              setUser(loggerUser);
            })
            .catch(error =>{
                console.log('error ',error.message)
            })
    }

    return (
        <div>
{/*         
            <button onClick={handleGooglSignIn}>this is login</button>
            <button onClick={handleSignOut}>log out</button> */}

             {/* user ? login : log out */}
             {
                user ?   <button onClick={handleSignOut}>log out</button>:
         
                <>
                       <button onClick={handleGooglSignIn}>this is login</button>
                       <button onClick={handleGithubSingIn}>github login</button>
                </>
               
             }

             {
                user && <div>
                      <h3>user is : {user.displayName} </h3>
                      <h3>email :{user.email} </h3>
                      <img src={user.photoURL} alt="" />
                </div>
             }
        </div>
    );
};

export default Login;