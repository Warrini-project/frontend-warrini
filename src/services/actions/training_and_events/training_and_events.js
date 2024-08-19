import axios from "axios";

export const getEvents = async () =>{
    const accessToken = localStorage.getItem("access");

    if(accessToken){
        const config = {
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("access")}`,
                "Accept": "application/json"
            }
        };

        try{
            const res = await axios.get("http://127.0.0.1:8000/events/", config);
            //console.log(res);
            return res.data;
        }
        catch(e){
            console.log(e);
            return [];
            
        }
    }
    else{
        return [];
    }
}

export const getDomains = async () =>{
    const accessToken = localStorage.getItem("access");
    if(accessToken){
        const config = {
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("access")}`,
                "Accept": "application/json"
            }
        }
        try{
            const res = await axios.get("http://127.0.0.1:8000/domains/", config)
            return res.data;
        }
        catch(e){
            console.log(e);
            return [];
            
        }
    }
    else{
        return [];
    }
}