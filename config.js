
config  = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    MONGODB_URI : process.env.MONGODB_URI,
    EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    APPLICATION_URL: "https://lti-master-1-git-main-salmakouhou.vercel.app/"
}

module.exports = config;
