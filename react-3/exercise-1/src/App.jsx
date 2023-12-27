import React, { useState } from 'react';

function App() {
    // adding state here.
  const [info, setInfo] = useState();

  const handleClick = (value) => {
    // code here.
    setInfo(value);
  };

  return (
    <div>
      <button onClick={()=> handleClick('Fullname')}>Fullname</button>
      <button onClick={()=> handleClick('Age')}>Age</button>
      <button onClick={()=>handleClick('Picture')}>Picture</button>
      <DisplayInfo info1={info}/>
    </div>
  );
}
//ไม่ใช้ const handleClick ให้ใส่ในreturnเป็น <button onClick={()=> setInfo('Fullname)}> ทีละตัว


function DisplayInfo({info1}) {
  //ฟังก์ชันใส่เป็น props ก็ได้
//ต้อง set counst {info1}=props; ด้วย
let content; // 
  if ( info1=== 'Fullname') { // ถ้าในfunction ใส่เป็นprops ให้ใส่ในif เป็นif(props.info1)ตามค่าที่เซตไว้ในDisplayInfo
    content = <h2>John Doe</h2>;
  } else if (info1 === 'Age') {
    content = <h2>30</h2>;
  } else if (info1 === 'Picture') {
    content = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    content = <p>Please select an option.</p>;
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default App;

// getname
// 1.1)object.name
// 1.2)declare variable  const name = object.name
// 1.3)destuc..    const {name} = object
