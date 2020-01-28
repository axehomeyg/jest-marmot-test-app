import React            from 'react'
import { render }       from 'react-dom'
import Pure             from "./pure"

// Our tests will load App directly and simulate the provider, using the wrapper/plugin support
render(<Pure />, document.getElementById('root'))
