import React, { useState } from 'react'

import Header from '../../components/Header/Header.jsx'
import ExploreMenue from '../../components/ExploreMenue/ExploreMenue.jsx'
import FoodDisplayList from '../../components/FoodDisplayList/FoodDisplayList.jsx';


function Home() {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenue category={category} setCategory={setCategory}/>
      <FoodDisplayList category={category} />
    </div>
  )
}

export default Home