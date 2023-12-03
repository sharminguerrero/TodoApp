import { useLayoutEffect, useState, useRef } from "react";
import { useFetch } from "../hooks/useFetch"

export const Layout = () => {
    const {results, isLoading, hasError} = useFetch('https://gateway.marvel.com:443/v1/public/characters?apikey=5596361097e1b2fe2e63f3ad56eaa157&hash=0165dcbb143fbe8fe216432e654cc1e6&ts=1');
  
    const [descriptions, setDescriptions] = useState(0);

    const handleNextDescription = () => {
        if (descriptions < results.data.results.length - 1){
            setDescriptions(descriptions + 1);
        }
    }

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({width: 0 , height: 0})

    useLayoutEffect(() => {
        if (pRef.current) {
           const {height, width } = pRef.current.getBoundingClientRect();
           setBoxSize({ height, width});
        }
     }, [descriptions]);

    console.log({results, isLoading, hasError});

    return (
   <>
   <h1>Marvel</h1>
   <hr/>


   { 
      isLoading
      ?
      (
       <div className="alert alert-info text-center">
       Loading...
        </div>
      )
      :
      (
        <blockquote 
        className="blockquote text-end"
        style={{display:"flex"}}
        >
        <p ref={pRef} className="mb-1">{results.data.results[descriptions].description}</p>
        <footer className="blockquote-footer">{results.data.results[descriptions].name}</footer>
       </blockquote>
      )
    }
      <button className="btn btn-primary" disabled={isLoading} onClick={handleNextDescription}>
        Next description
      </button>

      <code>{JSON.stringify(boxSize)}</code>
   
   </>
  )
}
