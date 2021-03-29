// import React from 'react'

import Options from "./Options";
import Question from "./Question";
import TypeSelector from "./TypeSelector";
import{ useState} from 'react';

const CreateSurvey = ({squestions}) => {
const getRandom=()=>{return Math.floor((Math.random() * 1000)+1)}
const [qtext, setQtext] = useState('');
const [qType, setQtype] = useState(0);
const [options,setOptions]=useState([{uid: getRandom(),value: ''},{uid: getRandom(),value: ''}]);

 const addOptions = ()=>{
     let newOption={
         uid:getRandom(),
         value:''
     }
     let updatedOptions=[...options];// holds our curent options.
     updatedOptions.push(newOption);//we will push our new opton.
     setOptions(updatedOptions);
    // alert(" + clicked");

}
const deleteOptions=()=>{
    if(options.length===2)
    {
        alert("Error: A select type question should have atleast 2 options")
    }
    else{
        let updatedOptions=[...options];
    updatedOptions.pop();//delete the last object of the array
    setOptions(updatedOptions); 
    }
    
}
const updateOptionText=(id,text)=>{
 let updatedOptions=[...options];//copies the current state
 let changeIndex=updatedOptions.findIndex(x =>x.uid === id);
 updatedOptions[changeIndex].value=text;
 setOptions(updatedOptions);
}

    return (
        <>
         <TypeSelector  qType={qType} setQtype={setQtype}/>
         { 
             qType!==0 ?
             <>
              <Question />
              {options.map((opt,key)=>(
                  <Options 
                  key={key}
                  uid={opt.uid}
                  addOptions={addOptions}
                  deleteOptions={deleteOptions}
                  updateText={updateOptionText}
                  />
              ))}
          
             </>
            :null 
         }
     
         <Options/>
         
        </>
    )
}

export default CreateSurvey;
