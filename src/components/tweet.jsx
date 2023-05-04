import { useEffect,useState } from "react";
const Tweet = () => {
    
            let [video, setVideo] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch ('http://localhost:4000/tweets')
            let data = await response.json()
            setVideo(data)

        }
        fetchdata()
    })
    return(
        <div className="tweets">
            {video.map((data)=>{
                return(
                    <h1>{data.title}</h1>
                )
            })}

        </div>
    )
        
}
 
export default Tweet;