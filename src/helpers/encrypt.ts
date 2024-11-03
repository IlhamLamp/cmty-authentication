export const encodeEmail = (email: string) => {
  return Buffer.from(email).toString("base64");
};

export const decodeEmail = (encodedEmail: string) => {
  return Buffer.from(encodedEmail, "base64").toString("utf-8");
};
