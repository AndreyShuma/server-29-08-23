import { useState, useEffect } from "react";
import axios from "axios";

function Name() {
    const [people, setPeople] = useState(false);
    useEffect(() => {
       
        const dataTest = async() => {
            try {
                const result = await axios.get('http://localhost:8000/data');
                console.log('result Name>>>', result);
                const resultData = result.data.map( item => item.name
                ).join(', ')
                setPeople(resultData);
            
            } catch (error) {
                console.log('Error message>> ', error.message
                );
            }
        } 
        dataTest();
    }, []);

    return (
        <div>
            Hello -- {people ? people : ' Loading'} 
        </div>
    )
}

export default Name;