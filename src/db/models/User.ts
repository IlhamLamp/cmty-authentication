import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/db_connect";

interface UserAttributes {
  id?: number;
  email?: string;
  password?: string;
  otp_code?: string;
  otp_expiration?: Date;
  is_verified?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface UserInput extends Optional<UserAttributes, "id"> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number;
  public email!: string;
  public password!: string;
  public otp_code!: string;
  public otp_expiration!: Date;
  public is_verified!: boolean;
  public created_at!: Date;
  public readonly updated_at!: Date;
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    otp_code: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    otp_expiration: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    is_verified: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    created_at: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    updated_at: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: connection,
    timestamps: true,
    underscored: true,
    modelName: "User",
    tableName: "user",
  }
);

export default User;
