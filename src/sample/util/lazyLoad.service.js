'use strict'

const TYPE = {
  ANGULAR_MODULE: 'angular_module',
  LIBRARY: 'library'
}

class LazyLoadService {
  constructor ($ocLazyLoad, $document){
    'ngInject'
    this.ocLazyLoad = $ocLazyLoad
    this.document = $document[0]

    this.lazyLoadedMap = {}
  }

  lazyLoad = async (targetList, lazyLoadStrategy, methodName) => {
    if (!angular.isArray(targetList)) {
      throw new Error(`lazyLoadService.${methodName}()'s parameters must be Array`)
    }

    return await Promise.all(targetList.map((targetUrl) => this[lazyLoadStrategy](targetUrl)))
  }

  angularModules = async (moduleList) => {
    return await this.lazyLoad(moduleList, 'lazyLoadModule', 'angularModule')
  }

  libraries = async (libraryList) => {
    return await this.lazyLoad(libraryList, 'lazyLoadLibrary', 'library')
  }

  lazyLoadModule = async (moduleUrl) => {
    if (this.lazyLoadedMap[moduleUrl]) {
      return
    }

    await this.ocLazyLoad.load(moduleUrl)
    this.lazyLoadedMap[moduleUrl] = {
      type: TYPE.ANGULAR_MODULE,
      url: moduleUrl
    }

    return moduleUrl
  }

  lazyLoadLibrary = (libraryUrl) => {
    return new Promise((resolve, reject) => {
      if (this.lazyLoadedMap[libraryUrl]) {
        return resolve()
      }

      let scriptElement = this.document.createElement('script')
      scriptElement.type = 'text/javascript'
      scriptElement.onload = scriptElement.onreadystatechange = () => {
        this.lazyLoadedMap[libraryUrl] = {
          type: TYPE.LIBRARY,
          url: libraryUrl
        }
        resolve()
      }
      scriptElement.src = libraryUrl
      this.document.getElementsByTagName('head')[0].appendChild(scriptElement)
    })
  }
}

angular.module('BookingFarmUserApp')
  .service('lazyLoadService', LazyLoadService)