'use strict'

if (process.env.NODE_ENV === 'production') {
	module.exports = require('./build/bundle')
} else {
	module.exports = require('./build/bundle.min')
}
