const person = {
  name: "john"
};

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(person)
  };
};
