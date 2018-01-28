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
