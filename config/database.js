module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: "strapi2.cc4laerm1ffz.eu-west-1.rds.amazonaws.com",
        port: 3306,
        username: "admin",
        password: "nn4ACh9mst9J",
        database: "strapi",
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
