import validator from "validator";
import User from "../db/models/User";

const RegisterValidation = async (data: {
    email: string;
    password: string;
    confirmation_password: string;
}): Promise<string | null> => {
    const { email, password, confirmation_password } = data;

    const userExist = await User.findOne({ where: { email } });
    if (userExist) {
        return "Email already registered.";
    }

    if (!email || !validator.isEmail(email)) {
        return "Invalid email address.";
    }

    if (!password || !validator.isLength(password, { min: 6 })) {
        return "Password must be at least 6 characters long.";
    }

    if (password !== confirmation_password) {
        return "Password and confirmation password must be the same.";
    }

    return null;
};

export default RegisterValidation;
