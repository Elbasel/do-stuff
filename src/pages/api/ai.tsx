import { Configuration, OpenAIApi } from 'openai';

export const getAiResult = async (prompt: string): Promise<any> => {
  const configuration = new Configuration({});
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
  });

  return completion.data.choices[0].text || '';
};
