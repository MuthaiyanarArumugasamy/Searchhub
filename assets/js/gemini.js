/* =====================================
   SearchHub AI
   gemini.js
===================================== */

async function askGemini(prompt){

    const url =
`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

    const body = {

        contents:[

            {

                parts:[

                    {

                        text:prompt

                    }

                ]

            }

        ]

    };

    const response = await fetch(url,{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify(body)

    });

    const data = await response.json();

    try{

        return data.candidates[0].content.parts[0].text;

    }catch{

        return "Sorry, I couldn't generate a response.";

    }

}
