import React, { useState, lazy, Suspense } from 'react'
import {ErrorBoundary} from 'react-error-boundary';

import ErrorFallback from '../../error/ErrorBoundary.js';

import Header from '../../components/Header/Header.jsx'
// import ExploreMenue from '../../components/ExploreMenue/ExploreMenue.jsx'
// import FoodDisplayList from '../../components/FoodDisplayList/FoodDisplayList.jsx';

const ExploreMenue = lazy(()=> import("../../components/ExploreMenue/ExploreMenue.jsx"));
const FoodDisplayList = lazy(()=> import("../../components/FoodDisplayList/FoodDisplayList.jsx"));


function Home() {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { }}>
          <Suspense fallback={<div>Loading</div>}>
      <ExploreMenue category={category} setCategory={setCategory}/>
      <FoodDisplayList category={category} />
      </Suspense>
        </ErrorBoundary>
    </div>
  )
}

export default Home