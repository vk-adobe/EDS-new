const { AcdlValidator } = await import('./validator.min.js');
const validator = new AcdlValidator();

// Add schemas
const schemas = [
    'pageContext',
    'productContext',
    'categoryContext',
    'product-page-view',
];
(await Promise.all(
    schemas.map(async schema => {
        const response = await fetch(`/scripts/acdl/schemas/${schema}.json`);
        return [await response.json(), schema];
    })
)).forEach(([schemaJson, schema]) => validator.addSchema(schemaJson, schema));

validator.start();