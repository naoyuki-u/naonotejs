
## Componentのファイル構成

componentごとに`jsx`と`css modules`ファイルをフォルダに分けたいとする。

- componentA
    - componentA.jsx
    - componentA.modules.css

単純に上記のようなファイル構成とすると、このcomponentを別ファイルからimportするときに、

```jsx
import componentA from "/componentA/componentA"
```

という風に、`jsx`のファイル名まで指定する必要があって面倒。

`jsx`ファイルを`index.jsx`とすればファイル名を指定しなくてもOKになるが、
全てのcomponentの`jsx`ファイルの名前が同じになってしまうので、
エディタで見分けるときに面倒。
(例えば、VScodeでCtrl+Tabで表示ファイルを変更するとき、
ダイアログ上に`index.jsx`が並んでしまい、どれが目的のファイルか判別しづらい)

- componentA
    - index.jsx
    - componentA.modules.css

解決策として、`componentA.jsx`にcomponentの中身を定義し、
同フォルダにそのcomponentをimportした`index.jsx`を作成する。

- componentA
    - index.jsx
    - componentA.jsx
    - componentA.modules.css

こうすることで、`jsx`のファイル名をcomponentの名前と一致させて見やすくしつつ、
別ファイルからimportするときは`jsx`ファイルの名前まで指定しなくてOKとなる。
`index.jsx`は一度作成してしまえば、編集することはないので、
タブを閉じてしまえば、Ctrl+Tabでのページ遷移の候補として表示されずにすっきりする。

```jsx
import {default} from "./componentA"
```

## Ant designテーマカラーの変更方法

LESSを使う。

`gatsby-plugin-less`をインストールする。(lessも)

```sh
npm install --save gatsby-plugin-less less
```

`gatsby-config.js`に以下を追加する。

```js
{
    resolve: `gatsby-plugin-less`,
    options: {
    javascriptEnabled: true,
    modifyVars: require(`./src/styles/theme.js`),
    },
},
```

`javascriptEnabled: true`の箇所だが、これを指定しないと下記エラーが出る。
[(参考)](https://github.com/gatsbyjs/gatsby/issues/6252)  

> *Inline JavaScript is not enabled. Is it set in your options?*


あとは、`theme.js`に以下のように上書きする設定を書けばOK。
各テーマのデフォルトは、
[ここ](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)
から確認できる。
プロパティ名をここで確認して、上書きしたい場合は以下に追記するようにして書けばOK。

```js
module.exports = {
    'primary-color': '#1DA57A',
};
```

## GraphQLの使い方

([引用](https://mottox2.com/posts/202))

> - gatsbyからgraphqlをインポートして、テンプレートリテラル内にGraphQLのクエリを書く。
> - GatsbyJSのPageコンポーネントでqueryという名前でクエリをexportするとgraphqlを実行してくれる。
> - GraphQLによって得られるデータはdataという名前でpropsに付与される。
> - データとコンポーネントが分離されており、GraphQLが間を取り持ってくれるのが分かると思います。