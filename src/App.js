import React, {useEffect, useState} from 'react'
import MainPage from './mainPage.js'
import Loader from './loader.js'


function App(){
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  })
  return(
    <div>
        {isLoading === true?
          <Loader />:
          <MainPage />
        }
    </div>
  )

}

export default App;
