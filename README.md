# [www.natorisana.love](https://www.natorisana.love)

[初代さなボタン](http://sanabutton.ojaru.jp/)の更新が止まってしまったので、その後継サイト。

## Requirements

- [Ruby 安定版](https://www.ruby-lang.org/ja/)
- [Node.js 推奨版](https://nodejs.org/ja/)

もしくは

- [Docker CE stable](https://store.docker.com/search?q=&type=edition&offering=community)

## さなボタン(2)を使ってなにか作りたい方向けの情報

### Atom Feed とサイトマップ

Atom Feed と sitemap があります。

- https://www.natorisana.love/feed.xml
- https://www.natorisana.love/sitemap.xml

Feed は、 `updated` フィールドでソートされているので、「過去の配信分にボタンが追加された」場合でも更新通知が来ます。

sitemap は、例えば「配信ごとのボタンの一覧を返す JSON ファイルの一覧」などに使えると思います。
正しく sitemap になっているので、 [過去の宣伝のページ](https://www.natorisana.love/events.html)や[タロ耳又ボタン](https://www.natorisana.love/odanobu/)も含まれているので、適当にフィルタリングする必要があると思います。

### API があるよ

基本は、

- 「Feed を見て追加分を確認」と「updates で追加・更新されたやつを確認」
- ほしい分のボタン一覧を `/api/button/{title}.json` からとってくる

という流れになると思います。

#### 一覧系

一覧系は `/api/{version}/{name}.json` というパスになっています。 `{version}` は、SemVer MAJOR なバージョンです。

updates 以外はめちゃ重たいので実用できないと思います。Google Chrome で開こうとするとメモリ不足になるレベル。

- [updateds.json](https://www.natorisana.love/api/v1/updateds.json)
- [posts.json](https://www.natorisana.love/api/v1/posts.json) （めちゃ重たい）
- [buttons.json](https://www.natorisana.love/api/v1/buttons.json) （めちゃ重たい）

#### 配信ごとのボタンの一覧

各配信ごとのボタンは、 `/api/button/{title}.json` というパスになっています。これは `{title}` が `{stream_id}` に変わる可能性が高いです。
まだ使わないほうが良いです。
