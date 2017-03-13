# points

Install NVM
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash

nvm install
nvm use
npm install

RUN CODE
node lib/index.js {input}

VALID INPUT Examples
node lib/index.js 5x5 (1,2)
node lib/index.js 5x5 (1,2) (3,4)
node lib/index.js 3x3 '(1, 2)' '(3, 3)' '(2, 3)'




TESTING
npm test