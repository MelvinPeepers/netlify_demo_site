exports.handler = function(event, context, callback) {
    const randomWords = [
      "name", "ideology", "illustrate", "spot", "constraint", "hostile", "quote", "repetition", "conference", "undermine", "tin", "allowance", "show", "organ", "minute", "palm", "export", "abridge", "horizon", "marathon", "wreck", "stereotype", "custody", "cafe", "hunting", "shout", "rubbish", "extinct", "steam", "adventure", "adult", "file", "password", "peak", "grave", "implication", "clique", "characteristic", "modest", "trouser", "conservative", "terrace", "rational", "import", "feature", "production", "make", "incredible", "player", "articulate", "weed", "context", "slot", "calorie", "registration", "foreigner", "neighborhood", "craft", "guitar", "tone", "step", "dictionary", "aisle", "minimum", "abolish", "general", "tight", "cutting", "cycle", "strong", "change", "dressing", "clothes", "brainstorm", "aviation", "bullet", "red", "link", "reflection", "knock", "dose", "present", "grudge", "coalition", "performance", "cunning", "tendency", "bare", "location", "seat", "inside", "pray", "shelter", "debut", "wander", "imagine", "sock", "beautiful", "family", "hostility", "photograph", "jail", "cinema", "step", "ride", "support", "light", "bomber", "influence", "amber", "spoil", "motorist", "progress", "vote", "equinox", "bronze", "national", "genuine", "robot", "reason", "worm", "bush", "native", "jewel", "depend", "snake", "dependence", "negative", "platform", "fork", "shorts", "determine", "solve", "technology", "AIDS", "finished", "north", "provoke", "prosecution", "insight", "trade", "sink", "graduate", "debate", "ceiling", "lean", "revoke", "suspect", "notebook"
    ];
    const randomNumber = Math.floor(Math.random() * 10);
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ word: randomWords[randomNumber] }),
    });
  };
