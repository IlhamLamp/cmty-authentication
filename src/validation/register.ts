import validator from "validator";
import User from "../db/models/User";

const RegisterValidation = async (data: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirmation_password: string;
}): Promise<string | null> => {
    const { first_name, last_name, email, password, confirmation_password } = data;

    const userExist = await User.findOne({ where: { email } });
    if (userExist) {
        return "Email already registered.";
    }

    if (!first_name || !validator.isLength(first_name, { min: 1 })) {
        return "First name cannot be empty.";
    }

    if (!last_name || !validator.isLength(last_name, { min: 1 })) {
        return "Last name cannot be empty.";
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
