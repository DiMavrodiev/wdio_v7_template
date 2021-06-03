const domains = {
    DEV: "",
    PROD: "",
}

const config = {
    domain: domains[process.env.ENV] || domains.DEV,
};

module.exports = config;