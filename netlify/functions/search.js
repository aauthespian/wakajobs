// netlify/functions/search.js
// Proxies requests to Google Gemini API (free tier — no credit card needed).

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API key not configured. Add GEMINI_API_KEY to Netlify environment variables." })
    };
  }

  try {
    const { prompt } = JSON.parse(event.body);

    // gemini-2.5-flash on v1beta — confirmed free tier as of April 2026
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 4000
          }
        })
      }
    );

    const data = await response.json();

    // Surface any API-level errors clearly
    if (!response.ok) {
      const message = data?.error?.message || `Gemini API error ${response.status}`;
      return {
        statusCode: response.status,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: message })
      };
    }

    // Check for blocked/empty response
    if (!data?.candidates?.length) {
      const blockReason = data?.promptFeedback?.blockReason || "No response generated";
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: `Gemini returned no results: ${blockReason}. Please try again.` })
      };
    }

    const text = data.candidates[0]?.content?.parts?.[0]?.text || "";

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ text })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
