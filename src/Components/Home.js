import React, { useState , useEffect} from 'react'
import { useHistory } from 'react-router-dom';

const Home = ()=> {
    const [islogin , setislogin] = useState(false);
    const history = useHistory();
    useEffect(() => {
        // setislogin(true)
        setTimeout(()=>{
            if(!islogin){
                history.push('/login');
            }
        },5000)
    }, [])
    
    return (
        <div>
            <h1> home</h1>
        </div>
    )
}
export default Home ;