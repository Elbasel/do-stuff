import React, { createContext, useContext } from 'react';
import secureLocalStorage from 'react-secure-storage';

const OPENAI_API_KEY_NAME = 'openai_api_key';

type Props = { children: React.ReactNode };

export const OpenAiApiKeyContext = createContext({});

export const OpenAiApiKeyContextProvider = ({ children }: Props) => {
  const getApiKeyFromStorage = (): { apiKey: string | null } => {
    return (
      { apiKey: `${secureLocalStorage.getItem(OPENAI_API_KEY_NAME)}` } ?? {
        apiKey: null,
      }
    );
  };

  const getApiKey = (): { apiKey: string | null } => {
    const apiKeyFromStorage = getApiKeyFromStorage();
    if (apiKeyFromStorage.apiKey !== null) return apiKeyFromStorage;
    return { apiKey: process.env.OPENAI_API_KEY || '' };
  };

  const setApiKey = (apiKey: string) => {
    secureLocalStorage.setItem(OPENAI_API_KEY_NAME, apiKey);
  };

  return (
    <OpenAiApiKeyContext.Provider
      value={{ getApiKey, setApiKey, getApiKeyFromStorage }}
    >
      {children}
    </OpenAiApiKeyContext.Provider>
  );
};
