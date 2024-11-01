import express from "express";
import client from "../config/google_oauth";

export const GoogleLogin = (req: express.Request, res: express.Response) => {
  const authURL = client.generateAuthUrl({
    access_type: "offline",
    scope: ["profile", "email"],
  });
  res.redirect(authURL);
};

export const GoogleCallback = async (
  req: express.Request,
  res: express.Response
) => {
  const code = req.query.code as string;

  if (!code) {
    return res
      .status(400)
      .json({ status: 400, message: "Authenticated code not found" });
  }
};
