import React from "react";
import Entry from "./Entry";
import './App.css';
import emojipedia from "./emojipedia";


function App() {
  return (
    <div>
    <h1>
      <span>EmojiPedia</span>
    </h1>

    <dl className="dictionary" >{emojipedia.map(emojiTerm =>(
  <Entry
  key ={emojiTerm.id}
  emoji ={emojiTerm.emoji}
  name ={emojiTerm.name}
  description ={emojiTerm.meaning}
  />)
)}</dl>
    </div>
    
    
  );
}

export default App;
