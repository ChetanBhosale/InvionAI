

export const Response = (status:boolean,message:string,data:object)  => {
    return {
        status,
        message,
        data
    }
}