import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [furl, setfurl] = useState("Books/The_Temptation_Of_Saint_Anthony.html");
  const [menshow, setMenshow] = useState(false);
  const [bookshow, setBookshow] = useState(false);
  const [bibleshow, setBibleshow] = useState(false);
  // This will wait for the window to load, but you could
  // run this function on whatever trigger you want
 // 	invoke('close_splashscreen')
//})
 // invoke('close_splacescreen');
//  async function greet() {
  	//inputter.currentTarget.value
  	//() => setfurl("menu.html")
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    
   // setfurl(await invoke("greet", { name }));
 // }
  
  
  /*async function closesplash() {
    invoke('ose_splashscreen')
  }
  async function opensplash() {
    invoke('open_splashscreen')
  }
  */
  async function togglemenu() {
    setMenshow((menshow) => !menshow)
    setFrameshow((frameshow) => !frameshow)
    if (bookshow == true) {
    	setBookshow((bookshow) => !bookshow)
    }
    if (bibleshow == true) {
      setBibleshow((bibleshow) => !bibleshow)
    }
    () => setBibleshow(false);
    () => setBookshow(false);
  }
    //setBookshow((bookshow) => false)
  async function togglebooks() {
    if (bibleshow == true) {
      setBibleshow((bibleshow) => !bibleshow)
    }
    setBookshow((bookshow) => !bookshow)
  }
  async function togglebibles() {
    if (bookshow == true) {
      setBookshow((bookshow) => !bookshow)
    }
    setBibleshow((bibleshow) => !bibleshow)
  }
    //setBookshow((bookshow) => false)
 // async function setter(url) {
   // setfurl(await invoke("srchange", { url }));
    //setfurl((furl) => "The_Confession_Of_Saint_Augustine/index.html")
  //}
  //async function genermenu() {
    //setMen2
  //}
 //<embed type="text/html" href="/Books/City_Of_God_Volume_1.html" width="100%" height="10000"/>
//{() => setfurl("menu.html")}
  return (
    <div className="container">
    <header>
    	<button class="menu" onClick={() => {setBibleshow(false); setBookshow(false); togglemenu()}}>
    		<h2>Menu</h2>
    	</button>
    	</header>
    	{menshow && <ul><li><button class="menu" onClick={() => {setBibleshow(false); togglebooks()}}><h3>Books</h3></button></li><li><button class="menu" onClick={() => {setBookshow(false); togglebibles()}}><h3>Bibles</h3></button></li></ul>}
    	{bookshow && <h2 class="mentop">Books</h2>}
    	{bibleshow && <h2 class="mentop">Bibles</h2>}
    	<ul>
      {bookshow && <li><button class="menu" onClick={() => {setfurl("Books/Compendium.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The Compendium Of The Catholic Church</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/Catechism/_INDEX.HTM"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The Catechism of The Catholic Church</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/The_Temptation_Of_Saint_Anthony.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The Temptation Of Saint Anthony</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/The_Confession_Of_Saint_Augustine.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The Confession Of Saint Augustine</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/City_Of_God_Volume_1.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>City Of God Volume 1</h3></button></li>}
    	{bookshow && <li><button class="menu" onClick={() => {setfurl("Books/City_Of_God_Volume_2.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>City Of God Volume 2</h3></button></li>}
    	{bibleshow && <li><button class="menu" onClick={() => {setfurl("Bibles/NIV.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>New International Version</h3></button></li>}
    	{bibleshow && <li><button class="menu" onClick={() => {setfurl("Bibles/King_James.html"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The King James Bible</h3></button></li>}
      {bibleshow && <li><button class="menu" onClick={() => {setfurl("Bibles/American/_INDEX.HTM"); togglemenu(); setBibleshow(false); setBookshow(false)}}><h3>The American Bible</h3></button></li>}
    	</ul>
      {!menshow && <iframe id="viewarea" src={furl} loading="lazy" />}
      </div>
  );
}

export default App;
