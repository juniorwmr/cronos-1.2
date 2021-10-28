// eslint-disable-next-line @typescript-eslint/no-var-requires
const moduleAlias = require('module-alias');

// Or multiple aliases
moduleAlias.addAliases({
  '@config': `${__dirname}/build/config`,
  '@middlewares': `${__dirname}/build/middlewares`,
  '@shared': `${__dirname}/build/shared`,
  '@entities': `${__dirname}/build/entities`,
  '@repositories': `${__dirname}/build/repositories`,
  '@useCases': `${__dirname}/build/useCases`,
  '@database': `${__dirname}/build/database`,
  '@helpers': `${__dirname}/build/helpers`,
});

//
// Import settings from a specific package.json
//
moduleAlias(`${__dirname}/package.json`);
