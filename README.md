# epoch-rounder

epoch-rounder is a simple utility to round epoch timestands to the closest block of seconds.

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install epoch-rounder.

```bash
npm i epoch-rounder --save
```

## Usage

```javascript
epoch-rounder.floor(EPOCH_TIMESTAMP, CLOSEST_BLOCK_OF_SECONDS);
```

```javascript
const epoch-rounder = require("epoch-rounder");

// It supports floor, round, ceil, and trunc
epoch-rounder.floor(1585907250, 300); // returns 1585907100
epoch-rounder.round(1585907250, 300); // returns 1585907400
epoch-rounder.ceil(1585907250, 300); // returns 1585907400
epoch-rounder.trunc(1585907250, 300); // returns 1585907100

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License
[MIT](https://choosealicense.com/licenses/mit/)