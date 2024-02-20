from openai import OpenAI
import openai
from django.conf import settings

client = OpenAI(api_key=settings.OPENAPI_KEY) 

def get_response(context):
    try:
        chat_completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": f"{context}"}]
        )
        return chat_completion.choices[0].message.content
    except openai.error.APIError as e:
        raise ValueError(f"OpenAI API returned an API Error: {e}")
    except openai.error.APIConnectionError as e:
        raise ValueError(f"Failed to connect to OpenAI API: {e}")
    except openai.error.RateLimitError as e:
        raise ValueError(f"OpenAI API request exceeded rate limit: {e}")

