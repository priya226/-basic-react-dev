import React, { useContext } from 'react'
import { UserContext, channelContext } from './Practice'

function Nested2Component() {
    const userName = useContext(UserContext);
    const channelName = useContext(channelContext)
  return (
    <div>
        <div>Nested2Component</div>
        <p>
            Welcom {userName} to channel {channelName}
        </p>
    </div>
  )
}

export default Nested2Component