import init from '../../core/main.js';
import home from '../openAccount/home/home.js';

(async function () {
    const context = {
        page: null
    };
    context.page = await init('https://wt.franklin.com.tw:8081/openAccount/');
    home(context);
})();
