import { NextFunction, Request, Response } from "express"
import validator from "./validate_";

const idRequiredQuery = async (req: Request, res: Response, next: NextFunction) => {
    const ValidationRule = {
        "id": "required|string",
    }
    validator.validatorUtilWithCallbackQuery(ValidationRule, {}, req, res, next);
}
const idRequired = async (req: Request, res: Response, next: NextFunction) => {
    const ValidationRule = {
        "id": "required|string",
    }
    validator.validatorUtilWithCallback(ValidationRule, {}, req, res, next);
}

const _UserIdRequired = async (req: Request, res: Response, next: NextFunction) => {
    const ValidationRule = {
        "user": {
            _id : "required|string"
        },
    }
    validator.validatorUtilWithCallback(ValidationRule, {}, req, res, next);
}

const idRequiredParams = (req: Request, res: Response, next: NextFunction) => {
    const ValidationRule = {
        "id": "required|string",
    }
    validator.validatorUtilWithCallback(ValidationRule, {}, req, res, next);
}


export default {
    idRequired,
    idRequiredQuery,
    _UserIdRequired,
    idRequiredParams,
}