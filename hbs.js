import path from "path";

export const hbsOptions = {
  viewEngine: {
    extname: ".hbs",
    partialsDir: path.join(__dirname, "views"),
    defaultLayout: false,
  },
  viewPath: path.join(__dirname, "views"),
  extName: ".hbs",
};
