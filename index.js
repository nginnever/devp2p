'use strict'

const devp2p = require('devp2p')

let p2p

const options = {
	maxPeers: 3
}

p2p = new devp2p(options)
console.log(p2p.dpt.id.toString())