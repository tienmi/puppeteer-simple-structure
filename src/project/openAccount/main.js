const init = require('../../core/main');
const home = require('../openAccount/home/home');

(async function () {
    const context = {
        page: null
    };
    context.page = await init('https://wt.franklin.com.tw:8081/openAccount/');
    home(context);
})();
