//Deno.serve((req: Request) => new Response("Ergebnis=win"));

import { serve } from "https://deno.land/std/http/mod.ts";

function getResponse(anfrage: Request){
    const params=new URL(anfrage.url).searchParams;

    var a = params.get('a');
    var b = params.get('b');
  
    if (!a && !b) {
        return "e: Keine Parameter"
    }
    if (!a || !b) {
        return "e: Zu wenig Parameter"
    }
    if (params.get('a') === ''){
            return 'nix a';
    }
    if (params.get('b') === ''){
        return 'nix b';
    }

    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      return "Bitte numerische Parameter"+a+" : " +params.get(a);
    } 
    //jetzt aber
    if (a < b){
        return 'b wins';
    }
}

async function reqHandler(req: Request) {
  return new Response(getResponse(req));
}
serve(reqHandler, { port: 80 });


