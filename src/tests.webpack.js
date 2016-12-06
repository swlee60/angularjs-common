// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.
import 'angular'
import 'angular-resource'
import 'angular-mocks/angular-mocks'

const requireAll = (requireContext) => { requireContext.keys().map(requireContext) }

// requireAll(require.context('./app/', true, /\.js$/))
requireAll(require.context('./module/', true, /^(?!.*\.config\.js$).*\.js$/))
requireAll(require.context('./module/', true, /[sS]pec\.js$/))
