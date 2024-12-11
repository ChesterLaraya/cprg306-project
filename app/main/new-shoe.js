"use client";
import { useState } from "react";

export default function NewItem(){
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [category, setCategory] = useState("produce");
    

    const increment = () => { // increment the count until it hits 20
        count < 20 ? setCount(count + 1) : setCount(20); // set count to 20 if it exceeds 20
    };    
    const decrement = () => { // decrement the count until it hits 1
        count > 1 ? setCount(count - 1) : setCount(1); // set count to 1 if it goes below 1
       
    };
    
    
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent form submissions
        const item = {name, count, category};
        console.log(item); // log the item object to the console for debugging purposes
         
        // reset the input field to default
        setName("");
        setCategory("produce");
        setCount(1);
    };


    const handleNameChange = (e) => {
        setName(e.target.value);
        console.log(e.target.name)
    };

    const handleSizeChange = (e) => {
      setSize(e.target.value);
      console.log(e.target.name)
  };
    
   

    return (
      <main className="flex justify-center w-full">
        
        <form onSubmit={handleSubmit}>
          <div className="bg-gray-500 rounded-lg shadow-lg">
            
            {/* Item Name bar code..*/}
            <div className="mb-2 p-2">
              <select value={category} placeholder='Produce'onChange={(e) => setCategory(e.target.value)} 
                className="w-full  border-2 border-gray-300 p-2 rounded-lg
                    font-sans text-black">
                    <option value="produce">Jordan 1</option>
                    <option value="meat">Jordan 2</option>
                    <option value="dairy">Jordan 3</option>
                    <option value="frozen foods">Jordan 4</option>
                    <option value="canned goods">Jordan 5</option>
                    <option value="dry goods">Jordan 6</option>
                    
              </select>
            </div>

            <div className="mb-2 p-2">
                <input type="text" placeholder="Size Here"  required className="w-45 mt-1 border-2 border-gray-300 p-2 rounded-lg
                    font-sans text-black" value={size} onChange={handleSizeChange}/>
            </div>

            
            <div className="flex justify-between items-center">

                {/* quantity code here*/}
              <div className="p-2 m-4 w-36 bg-white rounded-md"> 
                <div className="flex justify-between ">
                  <span className="text-black">{count}</span>
            
                  <div className="flex">
                
                    <button type="button"
                    onClick={decrement} className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                    hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75">
                        -
                    </button>
                    <button type="button"
                    onClick={increment} className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md 
                    hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75">
                        +
                    </button>
                  </div>
                </div>
              </div>


            {/* category code here*/}
            

            </div>

            {/* Submit button code here..*/}
                <button  type="submit" 
                className="w-full mt-4 py-2 px-4 bg-cyan-400 hover:bg-cyan-600 font-semibold rounded-lg shadow-md text-lg">🛒</button>
            
          </div>
        </form>

        
      </main>

      
      );
    }