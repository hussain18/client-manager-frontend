import axios from 'axios'

const SERVER_URL = process.env.REACT_APP_HOST
const LOCAL_TOKEN = process.env.REACT_APP_LOCAL_TOKEN
let TOKEN = null
const HEADERS = {
  'Content-type': 'application/json',
}

// Getting Authority status
export const getAuth = () => {
  if (!TOKEN) {
    TOKEN = window.localStorage.getItem(LOCAL_TOKEN)
  }
  return TOKEN
}

// Getting Refreshed Tokens
const getToken = async () => {
  return TOKEN || window.localStorage.getItem(LOCAL_TOKEN)
}

const saveToken = (token) => {
  window.localStorage.setItem(LOCAL_TOKEN, token)
}

export const removeAuth = () => {
  window.localStorage.removeItem(LOCAL_TOKEN)
}

// Authenticating requests
export const login = async (userData) => {
  try {
    const opts = {
      url: '/admin/login',
      body: userData,
    }
    const { token } = await POST(opts)
    saveToken(token)
  } catch (error) {
    console.log('LOGIN_ERROR: \n' + JSON.stringify(error.response))
    const {
      data: { message },
      statusText,
    } = error?.response
    return { err: { message, statusText } }
  }
}

// Authorized Requests
export const authRequest = async (url, request, body = {}) => {
  try {
    const opts = {
      url,
      body: body,
      headers: {
        authorization: await getToken(),
      },
    }

    const res = await request(opts)
    return { res }
  } catch (error) {
    console.log('AUTHORIZED_REQUEST_ERROR: \n', JSON.stringify(error.response))
    const err = {
      message: error.response.data.message,
      status: error.response.statusText,
    }
    return { err }
  }
}

// Basic requests
export async function GET(opts) {
  const URL = SERVER_URL + opts.url
  const header = opts.headers ? opts.headers : HEADERS
  const res = await axios.get(URL, { headers: header })
  return res.data
}

export async function POST(opts) {
  const URL = SERVER_URL + opts.url
  const header = opts.headers ? opts.headers : HEADERS
  const body = opts.body
  const res = await axios.post(URL, body, { headers: header })
  return res.data
}

export async function PATCH(opts) {
  const URL = SERVER_URL + opts.url
  const header = opts.headers ? opts.headers : HEADERS
  const body = opts.body
  const res = await axios.patch(URL, body, { headers: header })
  return res.data
}
