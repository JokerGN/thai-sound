import Axios from 'axios'

const serverUrl = 'http://thai-sound-api.chaluline.com'

export const userData = (payload) => {
  return Axios({
    method: 'POST',
    url: `${serverUrl}/auth/login`,
    data: payload
  })
  .then(function (res) {
    return res.data
  })
}

export const registerData = (payload) => {
  return Axios({
    method: 'POST',
    url: `${serverUrl}/auth/register`,
    data: payload
  })
  .then(function (res) {
    return res.data
  })
}

export const getUserData = () => {
  return Axios({
    method: 'GET',
    url: `${serverUrl}/user/showall`
  })
  .then(function (res) {
    return res.data
  })
}

export const changeStatusData = (payload) => {
  return Axios({
    method: 'POST',
    url: `${serverUrl}/user/change_status`,
    data: payload
  })
  .then(function (res) {
    return res.data
  })
}

export const getSoundData = () => {
  return Axios({
    method: 'GET',
    url: `${serverUrl}/sound/showall`
  })
  .then(function (res) {
    return res.data
  })
}
