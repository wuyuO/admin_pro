import {Resource} from './resource.js'
export default{
  createdUser (data) {
    return Resource.save({ model: 'user', method: 'login' }, data)
  },
  login (data) {
    return Resource.save({ model: 'user', method: 'login' }, data)
  }
}
