import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

export const getUserPreferences = async (): Promise<{
  theme: string;
  notificationsEnabled: boolean;
} | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem("@user_preferences");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Failed to fetch preferences:", e);
    return null;
  }
};

export const setUserPreferences = async (
  theme: string,
  notificationsEnabled: boolean
): Promise<void> => {
  try {
    const jsonValue = JSON.stringify({ theme, notificationsEnabled });
    await AsyncStorage.setItem("@user_preferences", jsonValue);
  } catch (e) {
    console.error("Failed to save preferences:", e);
  }
};

export const getSensitiveData = async (key: string): Promise<string | null> => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (e) {
    console.error("Failed to fetch sensitive data:", e);
    return null;
  }
};

export const setSensitiveData = async (
  key: string,
  value: string
): Promise<void> => {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (e) {
    console.error("Failed to save sensitive data:", e);
  }
};

export const deleteSensitiveData = async (key: string): Promise<void> => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (e) {
    console.error("Failed to delete sensitive data:", e);
  }
};
