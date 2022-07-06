const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=ca39cbab-563f-4516-833b-d8d544b9b051';




  const  reload = async () => {
    const res = await fetch(API_URL);
    const data= await res.json();
  
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
  };
  
  reload();