const requireAll = (requireContext) => { requireContext.keys().map(requireContext) }

requireAll(require.context('../module/', true, /^(?!.*\.(spec|config)\.js$).*\.js$/))
// requireAll(require.context('../services/', true, /^(?!.*\.spec\.js$).*\.js$/))
// requireAll(require.context('../directives/', true, /^(?!.*\.spec\.js$).*\.js$/))

// import '../module/module.js'
// import '../services/test.service.js'
