const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "~api": path.resolve(__dirname, "src/api"),
      "~components": path.resolve(__dirname, "src/components"),
      "~hooks": path.resolve(__dirname, "src/hooks"),
      "~pages": path.resolve(__dirname, "src/pages"),
      "~styles": path.resolve(__dirname, "src/styles"),
      "~types": path.resolve(__dirname, "src/types"),
      "~utils": path.resolve(__dirname, "src/utils"),
    },
  },
};
