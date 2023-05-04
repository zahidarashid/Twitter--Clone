import { useRef } from 'react';

import '../styles/home.css'
import image from '../images/zahu.jpg'
import Tweet from './tweet';
const Home = () => {
    // let navigate=useNavigate()
    let title=useRef(null)
    let submit=(e)=>{
        e.preventDefault()
        let data={
          title:  title.current.value
    }
fetch('http://localhost:4000/tweets',{
   method:'Post',
   headers:{'Content-Type':'application/json'} ,
   body:JSON.stringify(data)
})
// alert('video added....')

}
    
    const links = [
        { link: "Top" },
        { link: "People" },
        { link: "News" },
        { link: "Videos" },
        { link: "Sports" }
    ]
    return (
        <div className="parent">
            {/* <div className="home"> */}
            {/* <button>Home</button> */}
            <div className="end">
                <input type="text" placeholder="Search Twitter" />

                <div className="categories">
                    <ul>
                        {links.map((data) => {
                            return (
                                <button>{data.link}</button>

                            )
                        })}
                    </ul>
                </div>

            </div>
            <div className='info1'>
                <form onSubmit={submit}>
                <div className="happen">
                    <img src={image} alt="" />
                    <input ref={title} type="text" placeholder='What is happenning' />
                </div>
                <div className="btnn">
                    <button>Tweet</button>
                </div>
                </form>

            </div>
            <Tweet />

        </div>


    );
}

export default Home;