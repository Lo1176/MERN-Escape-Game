import { useState, useEffect } from "react";

export default function useFetch (url, method, request={}) {
    const [loading, setLoading] = useState(null)
    const [data, setData] = useState(null)
    const [error,setError] = useState(null)

    useEffect(() => {
        setLoading("Loading...")
        setData(null)
        setError(null)
        
        let fetchParams = {
            method: method,
            mode: 'cors',
            // cache: "no-store",
            headers: {
              "Content-Type": "application/json",
            },
          } 

        method !== "GET" &&  (fetchParams.body = JSON.stringify(request))
          
        fetch(url, fetchParams)
            .then(res => {
                return res.json()})
            .then(dt =>{ 
                setData(dt)
                setLoading(false);
            })
                
            .catch (err => {
                setError("Une erreur est apparue :" + err)
                setLoading(false)
            })
    }, [url])
    
    return { data, loading, error }
}
