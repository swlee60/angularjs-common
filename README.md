# angularjs-common
A front-end common module for Angularjs project that includes Webpack build, ES6 and Karma test / standard coding convention rule.
## Developing
### Build files

* build : npm run build
* build with phase (optional, default: local) : npm run build --phase=test

### Testing

* test : npm test

### Linking for local development

```
cd ~/projects/booking-fe-common    # go into the package directory
npm link                    # creates global link
cd ~/projects/booking-fe-common   # go into some other package directory.
npm link booking-fe-common # link-install the package
```

# License

[MIT](/LICENSE)
