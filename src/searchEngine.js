import React from "react";

export default function SearchEngine(){
    
    return(
        <div>
            <form className="searchContainer">
                <input type="text" placeholder="Enter a city.."></input>
                <button type="submit"> 🔎 </button>
            </form>
        </div>
    );
}