import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const analytics = require('@vercel/analytics');

// Use the analytics module here...


const Home = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
const [isGenerating, setIsGenerating] = useState(false)

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}
  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };
  return (
    <div className="root">
      <Head>
        <title>Gift Ideas</title>

        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-EYEQPR4XTK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EYEQPR4XTK');
</script>

      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Find a Special Gift this Christmas 🎄</h1>
          </div>
          <div className="header-subtitle">
            <h2> ( e.g. Give me a creative list of gift ideas for my co-worker. We work in HR together / Give me a creative list of gift ideas for my 18-year-old son for Christmas. He likes sports and hanging out with his friends. )
            </h2>
          </div>
        </div>
                <div className="prompt-container">
                <textarea
  className="prompt-box"
  placeholder="Give me a list of creative gift ideas for my uncle. He likes fishing....."
  value={userInput}
  onChange={onUserChangedText}
/>
<div className="prompt-buttons">
    <a className={isGenerating ? 'generate-button loading' : 'generate-button'}
    onClick={callGenerateEndpoint}>
      <div className="generate">
      {isGenerating ? <span class="loader"></span> : <p>Generate</p>}
      </div>
    </a>
  </div>



  {apiOutput && (
  <div className="output">
    <div className="output-header-container">
      <div className="output-header">
        <h3> Your Gift Ideas 🎅🏻</h3>
      </div>
    </div>
    
    <div className="output-content">
      <p>{apiOutput}</p>
</div>


<div>

</div>

</div>

)}

<div className="whatsapp-link">
<a href="whatsapp://send?text=Find a Special Gift this Christmas: https://www.giftidea.ml/">Share the Gift of Giving on WhatsApp</a>
</div>

</div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://twitter.com/HarryArkwright1"
          target="_blank"
          rel="noreferrer"
        >
<div className="badge">
            <p>Built with ❤️ this Christmas</p>
          </div>
        </a>
      </div>
    </div>



  );
};



export default Home;
