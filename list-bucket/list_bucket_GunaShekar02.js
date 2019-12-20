// const AWS = require('aws-sdk');

// exports.handler = async (event) => {
//   AWS.config.update({region: 'ap-south-1'});
//   let s3 = new AWS.S3();
//   const params = {
//     Bucket : 'guna-shekar-02',
//   };
//   const result = await s3.listObjects(params).promise();
//   return result;
// };

//ABOVE CODE USES ASYNC/AWAIT PATTERN. BELOW CODE USES PROMISES.

const AWS = require('aws-sdk');

exports.handler = (event) => {
  AWS.config.update({region: 'ap-south-1'});
  let s3 = new AWS.S3();
  const params = {
    Bucket : 'guna-shekar-02',
  };
  const result = s3.listObjects(params).promise();
  return result.then(data => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(data),
    };
    return response;
  })
  .catch(err => {
    const response = {
      statusCode: err.statusCode,
      body: JSON.stringify(err),
    };
    return response;
  });
};
