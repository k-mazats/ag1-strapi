module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "ovh",
    providerOptions: {
      user: "contact@k-mazats.fr",
      pass: process.env.OVH_PASSWORD,
    },
    settings: {
      defaultFrom: "contact@k-mazats.fr",
    },
  },
  // ...
});
