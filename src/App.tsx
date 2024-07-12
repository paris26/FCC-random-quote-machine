import { useState } from 'react'
import './App.css'
import  quotes  from './assets/quotes.json'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

interface Quote {
  quote: string
  author: string
}

const getRandomQuote = (): Quote => {
    return quotes[Math.floor(Math.random() * quotes.length)]
}

const getRandomColor = () => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);

      return `rgb(${red}, ${green}, ${blue})`
}

const transition = "all 1s"

function App() {

  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [color, setColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote())
    setColor(getRandomColor())
  }

  return (
    <>
      <div className='background' style={{ backgroundColor: color, transition}}>
        <div id="quote-box">
          <div className="quote-content" style={{color: color , transition}}>
            <h2 id="text">
              <FaQuoteLeft size="25" style={{marginRight: "10px",}}/>
              {quote.quote}
              <FaQuoteRight size="25" style={{marginLeft: "10px" }}/>
            </h2>
            <h4 id="author">
              - {quote.author}
            </h4>
          </div>
          <div className="buttons">
              <a  
                style={{display:"flex" , justifyContent: "center", alignItems: "center", backgroundColor: color , transition}}
                href='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22When%20one%20door%20of%20happiness%20closes%2C%20another%20opens%2C%20but%20often%20we%20look%20so%20long%20at%20the%20closed%20door%20that%20we%20do%20not%20see%20the%20one%20that%20has%20been%20opened%20for%20us.%22%20Helen%20Keller'>
                <img 
                  src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=000000 "
                  alt="x-logo"
                  width={30}
                  height={30}
                />
              </a>
              <button onClick={changeQuote} id="new-quote" style={{ backgroundColor: color, transition}}>
                <p>Change Quote</p>
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
