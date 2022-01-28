import requests from './request'

export const test = () => {
    return requests({
        url: '',
        method: 'GET'
    })
}