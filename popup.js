const getQuote = async (_,callback) => {
    const res = await fetch("https://zenquotes.io/api/random/", 
    { headers: { "Accept": "application/json" } ,})
    console.log(res);
    const quote=await res.json();

    console.log(quote);
    console.log(quote[0]['h']);
  
    document.getElementById("text").innerText = quote[0]['q'];
    document.getElementById("author").innerText = quote[0]['a'];

    if(typeof callback=='function')
      callback();
  }
  
  const nextBtn=()=>{

      document.getElementById("one-more").style.visibility='visible';
      document.getElementById("one-more").addEventListener("click", getQuote);
  };

  document.addEventListener("DOMContentLoaded", () => {
    getQuote('',
     nextBtn ); 
    
  });