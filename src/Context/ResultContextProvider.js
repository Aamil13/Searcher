import { createContext,useContext,useState } from "react";


const ResultContext = createContext();
const url = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({children})=>{
    
    const[result , setResult] = useState([]);
    const[isloading , setISloading] = useState(false);
    const[searchTerm , setSearchTerm] = useState('');

    const call = async(type,isLoadMore)=>{
            setISloading(true);

            const response = await fetch(`${url}${type}` ,{
            method: 'GET',
 
                headers: {
                    'X-User-Agent': 'desktop',
                    'X-Proxy-Location': 'EU',
                    'X-RapidAPI-Key': '43a8bff355msh94c9274b770df2cp11100fjsna64d342c9a4d',
                    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
                }
            })

            const data = await response.json();

            if(type.includes("/news")){
                if(isLoadMore){
                    setResult([...result, ...data.entries])
                    // console.log('res',result)
                }else{
                    setResult( data.entries);
                }
                
            }else if(type.includes("/image")){
                if(isLoadMore){
                    setResult([...result, ...data.image_results]);
                }else{
                    setResult( data.image_results);
                }
                
            }else {
                if(isLoadMore){
                    setResult([...result, ...data.results]);
                }else{
                    setResult( data.results);
                }
                
            }

            // setResult(data);
            // console.log(data);
            setISloading(false);
        }


        return (
            <ResultContext.Provider value={{call , result , isloading , searchTerm , setSearchTerm, setResult}}>
                {children}
            </ResultContext.Provider>
        )

}

export const useResultContext = () => useContext(ResultContext);

