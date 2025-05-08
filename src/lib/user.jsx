import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const account = new Account(client);

export const user = {
  createOtp: async (email) => {
    return await account.createEmailToken(ID.unique(), email, true);
  },
  verifyOtp: async (userId, secret) => {
    return await account.createSession(userId, secret);
  },
  logout: async () => {
    await account.deleteSession("current");
  },
};
