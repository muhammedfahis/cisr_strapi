// var credFile = require("./udemy-study-react-firebase-adminsdk-nolxs-62da5b7458.json");

// module.exports = () => ({
//     upload: {
//         provider: 'to-firebase',
//         providerOptions: {
//             serviceAccount: credFile ,
//             bucket: "udemy-study-react.appspot.com",
//             debugLogs: true
//         },
//     },
// });

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: "ap-south-1",
        params: {
          Bucket: "islamicuniversity-1",
        },
        logger: console,
      },
    },
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey:
          "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",
      },
      settings: {
        defaultFrom: "muddasir009@gmail.com",
        defaultReplyTo: "muddasir009@gmail.com",
        testAddress: "muddasir009@gmail.com",
      },
    },
  },
});
