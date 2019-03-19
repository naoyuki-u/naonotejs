
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

