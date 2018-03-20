# parcel_starter

- [Parcel](http://www.css88.com/doc/parcel/getting_started.html) 是一個Web應用程序 打包器(bundler) ，與以往的開發人員使用的打包器有所不同。它利用多核處理提供極快的性能，並且你不需要進行任何配置。
- Parcel 内置了一個開發伺服器，這會在你更改文件時自動重建你的應用程序，並支持 模組熱替換 ，以便你快速開發。
- Parcel 支援 CommonJS 和 ES6 模組語法来導入文件。它還支持動態 import() 函數語法來異步加載模組。
- 儘管許多 打包器(bundler) 都要求你安装和配置插件来轉換資源，Parcel 內置許多轉譯器，讓你開箱即用。
    - 你可以使用 Babel 轉換 JavaScript，CSS 使用 PostCSS ，HTML 使用 PostHTML 。當在模組中找到配置文件（例如 .babelrc ，.postcssrc ）時， Parcel 會自動進行這些轉換。
- Parcel 支援零配置代碼拆分，開箱即用。這使您可以將你的應用程序代碼拆分為可以按需加載的獨立包，這意味着更小的初始包大小和更快的加載時間。


## 使用

- Server running at http://localhost:8000

```
npm start
```
