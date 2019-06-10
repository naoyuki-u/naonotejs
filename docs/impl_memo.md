
動的に生成するページ

gatsby-node.jsにAPIを定義する。
gatsbyではビルド時に実行する処理をユーザーが定義できるよう、
ユックが用意されている。
これを利用して、動的にページを生成する。

`createPages`APIを使用する。

動的に生成するページのtempleteは、`src/templates`に
保存することが慣例。

## return new Promise

```js
return new Promise((resolve, reject) => {
    const A;
    const B;
    resolve(
        // 成功時に実行したい処理
    )
}
);
```

Primiseの引数：関数オブジェクト(ラムダ式)
このラムダ式の引数には、2つの関数オブジェクトを渡す。
1つ目のresolveは成功時の処理が実装されている関数オブジェクト、
2つめのrejectは失敗時の処理が実装されている関数オブジェクト。

## リダイレクト

指定したページへの遷移を実現する関数。
(`Link` componentでは無く。
例えば、componentのcallbackでページ遷移を実現したいときに使用する関数)

```jsx
import { navigation } from "gatsby"

navigation({URL});
```

## 画像の埋め込み方法

Aboutページでアイコンを埋め込もうとしていた時、
単純に下記でOKかと思ったが、画像が埋め込まれなかった。
(imgタグでもやってみたが、画像が見つからないときのアレが表示されていたので、
そもそも方法が間違っているみたい。)

```jsx
<Avatar src="../images/avatar.png" />
```

公式に説明があったので、適当に内容をメモしておく。
[ここ](https://www.gatsbyjs.org/docs/images-and-files/)

### Webパックを使用する方法

```jsx
import avatar from "../images/avatar.png"

<Avatar src={avatar} />
```

### GraphQLでファイルをクエリする方法

### `static`フォルダを使用する方法

## コメント機能の追加

- [参考](https://snipcart.com/blog/pelican-blog-tutorial-search-comments)
- [Various ways to include comments on your static site](https://darekkay.com/blog/static-site-comments/)

## SEO関連

サイトはヘッダーにメタ情報を持っている。
タイトルやアイコン情報、説明(description)など。
この情報はブラウザ上に表示され、また、SNS等の他のwebサイトで使用される。

こういった情報を提供するのがSEO componentの役割。

Helmetを使うことでこのような情報(メタ情報)をhtml内に埋め込むことができる。

```jsx
<Helmet>
    <meta name="description" content="hogehoge"/>
</Helmet>
```

`description`メタ情報に`content`で指定された情報を埋め込む。