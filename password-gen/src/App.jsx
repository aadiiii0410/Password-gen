import { useState, useCallback, useEffect, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(10);
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [characterAllowed , setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("");

  const passref = useRef(null)

  const PasswordGenerator = useCallback(()=>{
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      
      if(numberAllowed) str = str + "0123456789"
      if(characterAllowed) str = str + "!@#$%^&*-_+=[]{}~`"

      for(let i=1;i<=length;i++)
      {
        let char = Math.floor(Math.random()* str.length)
        pass = pass + str.charAt(char)
      }

      setPassword(pass)
  },[length,numberAllowed,characterAllowed,setPassword])

  const copytoclip = useCallback(()=>{
    passref.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>
  {
    PasswordGenerator()
  },[length,numberAllowed,characterAllowed,PasswordGenerator]);

  return (
    <div className="h-screen w-screen bg-black flex  justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"> <span className="mb-4 text-lg">PASSWORD GENERATOR</span>
        <div className="flex justify-center bg-white px-4 py-2 rounded-lg w-full">
          <input
            type="text"
            value={password}
            ref={passref}
            className="flex-grow text-black text-lg outline-none"
            readOnly
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2" onClick={copytoclip}>copy</button>
        </div>
        <div className="flex items-center gap-3 mt-4 text-orange-500">
          <input type="range" min="8" max="15" value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}/>
          <span>Length: {length}</span>
          <input type="checkbox" checked={numberAllowed} className="cursor-pointer" onChange={(e)=>{setNumberAllowed((prev)=>!prev)}}/> <span>Numbers</span>
          <input type="checkbox" checked={characterAllowed} className="cursor-pointer" onChange={(e)=>{setCharacterAllowed(!characterAllowed)}}/> <span>Characters</span>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
