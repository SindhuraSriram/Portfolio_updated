// netlify/functions/views.js

export async function handler(event, context) {
  try {
    // Fetch from CounterAPI.dev (reliable and CORS-friendly)
    const response = await fetch(
      'https://api.counterapi.dev/sindhura_sriram/home?increment=true'
    );

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: `Counter API failed with status ${response.status}`,
        }),
      };
    }

    const data = await response.json();

    // Return the value with CORS headers
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ value: data.value }),
    };
  } catch (error) {
    console.error('Error fetching view count:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
}
