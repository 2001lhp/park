import type { LoginConfig, ParkResponseType } from "@/types/park"
import request from "@/utils/http"

export const login = (data: LoginConfig) => {
    return request<{ token: string }>('park/login', 'post', data)
}

export const getParkInfo = () => {
    return request<ParkResponseType>('/park/statistics/info', 'GET')
}