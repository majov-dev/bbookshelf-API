
export class ApiError extends Error {
    public readonly statuscode: number

    constructor(message: string, statuscode: number) {
        super(message)
        this.statuscode = statuscode
    }
}

export class BadRequestError extends ApiError {
    constructor(message: string) {
        super(message, 400);
    }
}