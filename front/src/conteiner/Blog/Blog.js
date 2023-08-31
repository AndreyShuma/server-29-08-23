import { useParams, useLocation } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

function Blog () {
    //hooks
    const params = useParams();
    const location = useLocation();
    const [loading, setloading] = useState(true);
    const [people, setPeople] = useState(null);

    //code
    // console.log('params>>', params);
    const {id} = params;
    useEffect(() => {
        const request = async () => {
            const result = await axios.get(`https://swapi.dev/api/people/${id}`);
            console.log('result Blog  >>>>', result.data);
            setloading(false);
            setPeople(result.data.name);
        }
        request();
    }, [id]);
    // console.log('useLocation>>', location);
return (
    <div>
        Page Blog 
        <br></br>
        {loading ? 'Loading' : (
            <section>
                Name {people}
                --id {id}
            </section>
        )}
    </div>
)}

export default Blog;