module.exports = {
	env: {
		node: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'prettier' // eslint-config-prettier，eslint继承prettier的配置，解决冲突
	],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module'
	},
	plugins: [
		'prettier' // eslint-plugin-prettier  eslint调用此插件来对代码进行检查，是否符合prettier的规范
	],
	rules: {
		'prettier/prettier': 'error' // 开启eslint-plugin-prettier的报错
	}
}
