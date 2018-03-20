import '../css/main.scss';

console.log('hello world');

const asyncLoading = async () => {
    const utils = await import('./utils.ts');
    utils.default.show();
}

asyncLoading();
