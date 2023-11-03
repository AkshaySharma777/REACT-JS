import React from 'react';

import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import Ex3 from './components/Ex3';
import Ex4 from './components/Ex4';
import Ex5 from './components/Ex5';
import Ex6 from './components/Ex6';
import Ex7 from './components/Ex7';
import Ex8 from './components/Ex8';
import Ex9 from './components/Ex9';
import Ex10 from './components/Ex10';

function App() {
  return (
   <div className="container">
    <div className="row">
      <div className="col">
        <h1 className="bg-primary text-center">THIS IS APP COMPONENT (THIS IS PARENT COMPONENT)</h1>
      </div>
    </div>
    <Ex1/>
    <Ex2/>
    <Ex3/>
    <Ex4/>
    <Ex5 img = "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_640.jpg" name = "Parent Card" lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima amet laboriosam repudiandae inventore id consectetur veniam distinctio placeat vel mollitia soluta velit tempore necessitatibus doloribus incidunt, quidem nobis tenetur veritatis."/>
    <Ex6 img = "https://cdn.pixabay.com/photo/2023/06/20/01/30/ai-generated-8075768_640.jpg" name = "Parent Card" lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, tempore, dolor ipsam molestias aliquid ex ipsa fugit debitis numquam eaque, unde dignissimos aliquam reprehenderit? Rem accusamus hic dolores nihil fugit!"/>
    <Ex7 />
    <Ex8 img = "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_640.jpg" name = "Parent Card" lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima amet laboriosam repudiandae inventore id consectetur veniam distinctio placeat vel mollitia soluta velit tempore necessitatibus doloribus incidunt, quidem nobis tenetur veritatis."/>
    <Ex9 img = "https://cdn.pixabay.com/photo/2023/06/20/01/30/ai-generated-8075768_640.jpg" name = "Parent Card" lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, tempore, dolor ipsam molestias aliquid ex ipsa fugit debitis numquam eaque, unde dignissimos aliquam reprehenderit? Rem accusamus hic dolores nihil fugit!"/>
    <Ex10 />
   </div>
  );
}

export default App;
