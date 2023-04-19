exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: 'Method Not Allowed'
      };
    }
  
    const requestBody = JSON.parse(event.body);
    // Process the request body as needed
  
    return {
      statusCode: 200,
      body: 'OK'
      
    };
  };
  