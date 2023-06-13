# Bootstrap Mireco

Mireco pre-wrapped in bootstrap styles for your convenience.

Check out the [live demo demo page here][1].

For more information on Mireco, head over to its [project page here][2].

## Installation

- Install bootstrap in your project, ensuring that the bootstrap css is loaded
- Install this package using your package manager of choice eg: `npm install bootstrap-mireco`
- Load the release css file `node_modules/bootstrap-mireco/dist/index.css` in your project
- Use like you would mireco:

```
import React, { useState } from 'react'
import { Text } from 'bootstrap-mireco'

export const Form = () => {
  const [name, setName] = useState('')
  return (
    <Text
      value={name}
      onChange={setName}
      placeholder="Enter your name"
      block
    />
  )
}
```

[1]: https://bor3ham.github.io/bootstrap-mireco/
[2]: https://github.com/bor3ham/mireco/
