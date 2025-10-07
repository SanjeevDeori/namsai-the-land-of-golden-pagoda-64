import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `You are a knowledgeable and friendly local guide for Namsai, Arunachal Pradesh - "The Land of Golden Pagoda".

ABOUT NAMSAI:
Namsai is a picturesque town in eastern Arunachal Pradesh, known for its magnificent Golden Pagoda (Kongmu Kham), diverse tribal culture, and scenic natural beauty.

KEY ATTRACTIONS:
- Golden Pagoda (Kongmu Kham): Southeast Asia's second-largest Buddhist temple, a stunning architectural marvel
- Parshuramkund: Sacred pilgrimage site on the Lohit River
- Namsai Lake: Beautiful lake for boating and relaxation
- Dihing River: Known for its pristine beauty and ecosystem
- Traditional villages and local markets

FESTIVALS & CULTURE:
- Major Buddhist celebrations and ceremonies
- Tribal festivals throughout the year (timing varies)
- Rich cultural heritage from multiple indigenous communities
- Traditional cuisine and handicrafts

TRAVEL INFO:
- Inner Line Permit (ILP) required for Indian citizens
- Protected Area Permit (PAP) for foreign nationals
- Best time to visit: October to March
- Nearest airport: Dibrugarh (180km)
- Nearest railway: Tinsukia Junction (70km)

Your role is to:
- Help visitors discover attractions and plan their itineraries
- Provide information about festivals, traditions, and local culture
- Share travel tips and practical information
- Recommend authentic experiences and local cuisine
- Answer questions about permits, accommodation, and transportation
- Be warm, enthusiastic, and respectful of local customs

Keep responses concise but informative. If you don't have specific details, be honest and suggest where they can find more information.`,
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        console.error("Rate limit exceeded");
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        console.error("Payment required");
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds to your workspace." }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
