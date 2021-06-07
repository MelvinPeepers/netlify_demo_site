exports.handler = function(event, context, callback) {
    const randomWords = [
        'fence', 'unit', 'handlebars', 'willow', 'honeypot', 'hollowness', 'affair', 'molten', 'junior', 'young', 'bike', 'amoral', 'awesome', 'swarm', 'anywhere', 'recent', 'beak', 'abduction', 'zebra', 'groove',
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
