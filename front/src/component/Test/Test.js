import { useState, useEffect } from "react";
import axios from 'axios'; 

function Test () {
    const [Start, setStart] = useState(false);

    useEffect( () => {
        const data = async () => {
            try {
                const result = await axios.get('http://localhost:8000/main');
                console.log('result Test >>>', result.data);
                setStart(result.data['status']); 
            } catch (error) {
                console.log('ERROR >>>', error);
            }
        };
        data();
        
    }, []);

    return (
        <div>
            <h3>Hello world!</h3>
           <p>Status servera { Start ?  Start : 'Loading' }</p> 
        </div>
    )
}
export default Test;