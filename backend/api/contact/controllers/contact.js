"use strict";

const { isNil, pick } = require("lodash/fp");
const axios = require("axios").default;
/**
 * Email.js controller
 *
 * @description: A set of functions called "actions" of the `email` plugin.
 */
module.exports = {
  async sendMail(ctx) {
    let data = ctx.request.body;
    let options = {
      to: "anarkroi@gmail.com",
      replyTo: data.mail,
      text: data.message,
    };
    try {
      // const reCaptchaOptions = {
      //   method: "get",
      //   url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_TOKEN}-cBRyIGkPUvdwcn_eH&response=${data.token}`,
      // };
      // const reCaptcha = await axios(reCaptchaOptions);

      // if (reCaptcha.data.success && reCaptcha.data.score >= 0.5) {
      try {
        await strapi.plugins.email.services.email.send(options);
      } catch (e) {
        if (e.statusCode === 400) {
          return ctx.badRequest(e.message);
        } else {
          throw new Error(`Couldn't send email: ${e.message}.`);
        }
      }
      // }
    } catch (e) {
      throw new Error(`Couldn't send email: ${e.message}.`);
    } // Send 200 `ok`
    ctx.send({});
  },

  async test(ctx) {
    const { to } = ctx.request.body;

    if (isNil(to)) {
      throw strapi.errors.badRequest(null, {
        errors: [
          { id: "Email.to.empty", message: "No recipient(s) are given" },
        ],
      });
    }

    const email = {
      to: to,
      subject: `Strapi test mail to: ${to}`,
      text: `Great! You have correctly configured the Strapi email plugin with the ${strapi.plugins.email.config.provider} provider. \r\nFor documentation on how to use the email plugin checkout: https://strapi.io/documentation/developer-docs/latest/development/plugins/email.html`,
    };

    try {
      await strapi.plugins.email.services.email.send(email);
    } catch (e) {
      if (e.statusCode === 400) {
        return ctx.badRequest(e.message);
      } else {
        throw new Error(`Couldn't send test email: ${e.message}.`);
      }
    }

    // Send 200 `ok`
    ctx.send({});
  },

  async getSettings(ctx) {
    const config = strapi.plugins.email.services.email.getProviderSettings();

    ctx.send({
      config: pick(
        [
          "provider",
          "settings.defaultFrom",
          "settings.defaultReplyTo",
          "settings.testAddress",
        ],
        config
      ),
    });
  },
};
