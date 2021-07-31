import {Link} from 'react-router-dom';

export const Signup = () => {
    return(
        <div className="flex flex-col items-center">
        <div className="flex flex-col w-1/3 h-auto items-center p-8 border shadow-lg font-sans">
              <div className="text-3xl text-gray">Think Tunes</div> 

              <form className="flex flex-col w-5/6 h-auto p-8 m-4">

                <input 
                className="w-full h-14 border shadow-md p-2 m-4"
                placeholder="Email address"
                type="email"
                required/>

                <input 
                className="w-full h-14 border shadow-md p-2 m-4"
                placeholder="Name"
                type="name"
                required/>


                <input 
                className="w-full h-14 border shadow-md p-2 m-4"
                placeholder="Password"
                type="password"
                required/>

                <input 
                className="w-full h-14 border shadow-md p-2 m-4"
                placeholder="Confirm Password"
                type="password"
                required/>

                <button className="p-4 w-40  border bg-gray-800 text-white text-lg text-center self-center rounded-md font-semibold">Sign Up</button>
              </form>
              <small className="text-base">Already have an account? <span className="text-base text-purple-700 underline"><Link to="/login">Login</Link></span></small>


        </div>
    </div>
    )
}