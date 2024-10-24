import React, { createContext, useState, useEffect, ReactNode } from "react";
import { getUserPreferences, setUserPreferences } from "./storage";

interface SettingsContextType {
  theme: string;
  notificationsEnabled: boolean;
  loading: boolean;
  updatePreferences: (
    newTheme: string,
    notificationsEnabled: boolean
  ) => Promise<void>;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [theme, setTheme] = useState<string>("light");
  const [notificationsEnabled, setNotificationsEnabled] =
    useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPreferences = async () => {
      const preferences = await getUserPreferences();
      if (preferences) {
        setTheme(preferences.theme);
        setNotificationsEnabled(preferences.notificationsEnabled);
      }
      setLoading(false);
    };

    loadPreferences();
  }, []);

  const updatePreferences = async (
    newTheme: string,
    notificationsEnabled: boolean
  ) => {
    await setUserPreferences(newTheme, notificationsEnabled);
    setTheme(newTheme);
    setNotificationsEnabled(notificationsEnabled);
  };

  return (
    <SettingsContext.Provider
      value={{
        theme,
        notificationsEnabled,
        loading,
        updatePreferences,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
