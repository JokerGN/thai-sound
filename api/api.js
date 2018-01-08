import Axios from 'axios'

export const userData = (payload) => {
  return Axios({
    method: 'POST',
    url: 'http://localhost:3001/auth/login',
    data: payload
  })
  .then(function (res) {
    return res.data
  })
}

export const registerData = (payload) => {
  return Axios({
    method: 'POST',
    url: 'http://localhost:3001/auth/register',
    data: payload
  })
  .then(function (res) {
    return res.data
  })
}

export const getUserData = () => {
  return Axios({
    method: 'POST',
    url: 'http://localhost:3001/user/showall'
  })
  .then(function (res) {
    return res.data
  })
}
