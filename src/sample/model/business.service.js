'use strict'

class businessService {
  constructor (apiService, bookingDataGeneratorService){
    'ngInject'
    this.apiService = apiService
    this.bookingDataGeneratorService = bookingDataGeneratorService

  }

  getAllInfo = async (businessId) => {
    let businessInfo = {
      business : await this.apiService.GET('/v1/user/service/' + businessId + '/allinfo'),
      pay : await this.apiService.GET('/v1/user/service/' + businessId + '/pay/reg/st'),
      policy : await this.apiService.GET('/v1/user/service/' + businessId + '/policy/list')
    }
    return await* this.bookingDataGeneratorService.getBusinessInfo(businessInfo)
  }

}

angular.module('BookingFarmUserApp')
  .service('businessService', businessService)