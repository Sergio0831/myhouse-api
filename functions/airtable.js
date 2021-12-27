const Airtable = require("airtable-node");
require("dotenv").config();

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID)
  .table("products");

exports.handler = async (event, context, cb) => {
  try {
    const { records } = await airtable.list();
    const products = records.map((product) => {
      const { id } = product;
      console.log(records);
      const { name, images, colors, price, slug } = product.fields;
      const url = images[0].url;
      return { id, name, slug, colors, url, price };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server Error"
    };
  }
};
