import { useEffect, useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { getAiResult as apiGetAiResult } from '../pages/api/ai';

type OpenAIError = {};

const useAi = (prompt: string) => {
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<OpenAIError | undefined>(undefined);

  useEffect(() => {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const getAiResult = async () => {
      const aiResult = await apiGetAiResult(prompt);
    };

    //     console.log(error);
    //   }
    //   const openaiError: OpenAIError = new OpenAIError({
    //     statusCode: error.response.status,
    //     message: error.response.data.error.message,
    //     code: error.response.data.error.code,
    //   });
    //   setError(openaiError);
    //   console.log(openaiError);
    // }
  }, [prompt]);

  return { result, error };
};

export default useAi;
