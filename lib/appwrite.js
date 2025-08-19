import { Client, Account, Avatars, Databases } from "react-native-appwrite";

// Appwrite Client Setup
export const client = new Client()
  .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT) // Your API Endpoint
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID); // Your project ID

export const account = new Account(client)
export const avatar = new Avatars(client)
export const database = new Databases(client)