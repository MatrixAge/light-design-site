const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

const modifyVars = lessToJS(
	fs.readFileSync(path.resolve(__dirname, '../styles/custom.less'), 'utf8')
)

const handleAntd = (config, isServer) => {
	if (isServer) {
		const antStyles = /antd\/.*?\/style.*?/
		const origExternals = [ ...config.externals ]

		config.externals = [
			(context, request, callback) => {
				if (request.match(antStyles)) return callback()
				if (typeof origExternals[0] === 'function') {
					origExternals[0](context, request, callback)
				} else {
					callback()
				}
			},
			...(typeof origExternals[0] === 'function' ? [] : origExternals)
		]

		config.module.rules.unshift({
			test: antStyles,
			use: 'null-loader'
		})
	}
}

module.exports = {
	modifyVars: modifyVars,
	handleAntd: handleAntd
}
