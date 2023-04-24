import React,{useState, useEffect} from 'react';

export default function Main(){
  
    const [meme, setMeme] = useState({
        'firstText':'',
        'lastText':'',
        'randomImg':''
    })
    

    const [allMeme, setAllMeme] = useState([]);

    useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
        .then(res=> res.json())
        .then(response => setAllMeme(response.data.memes))
    }, [])

    

 //function after the click event
    function clicked (){
        
        let randomNumber = Math.floor(Math.random()* allMeme.length);
        console.log(JSON.stringify(allMeme[randomNumber]))
        let Newurl = allMeme[randomNumber]['url'];
      

        setMeme(initial => ({
            
                ...initial,
                randomImg : Newurl
            })
        )

       }
    function HandleChange(event: React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target
        setMeme(prev=>({
            ...prev,
            [name] : value
        }))
    }


      return(
        <div className='main'>

            <form className="form">

                <input 
                type="text" 
                className="field"
                placeholder='top-text'
                name="firstText"
                value={meme.firstText}
                onChange={HandleChange}
               />

                <input 
                type="text" 
                className="field" 
                placeholder='bottom-text'
                name="lastText"
                onChange={HandleChange}
                value={meme.lastText}
                />

                <input 
                type="button" 
                value="Get a new meme image"
                 onClick ={clicked} 
                 className="field" 
                 id="btn"
                 />
                
            </form>
            <div className="meme">
                <img src={meme.randomImg} className="meme--image" />
                <h2 className="meme--text top">{meme.firstText}</h2>
                <h2 className="meme--text bottom">{meme.lastText}</h2>
            </div>
           
           
            
           
        </div>
    )
}