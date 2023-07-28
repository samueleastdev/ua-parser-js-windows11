import React, {useEffect, useState} from 'react'
import {UAParser} from 'ua-parser-js'

function App() {
  const [userAgentData, setUserAgentData] = useState(null)

  useEffect(() => {
    const parser = new UAParser()
    const uaResult = parser.getResult()
    console.log('uaResult', parser)

    parser
      .getBrowser()
      .withClientHints()
      .then(function (browser) {
        console.log('Using Client-Hints: ', browser)
      })
    setUserAgentData(uaResult)
  }, [])

  return (
    <div className='App'>
      <h1>User Agent Information</h1>
      {userAgentData ? (
        <div>
          <p>Browser: {userAgentData.browser.name}</p>
          <p>Operating System: {userAgentData.os.name}</p>
          <p>Device: {userAgentData.device.model}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App
