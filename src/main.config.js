module.exports = {
    targetURL: 'https://wt.franklin.com.tw:8081/openAccount/',
    pipelines: [{ name: 'home', path: '/step/home/home.js' }],
    config: { headless: false, slowMo: 50, defaultViewport: null }
};
