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

一覧系は `/api/{version}/{name}.json` というパスになっています。 `{version}` は、SemVer MAJOR なバージョンです。

- [updateds.json](https://www.natorisana.love/api/v1/updateds.json) 更新のあった posts とその更新日。
- [post-list.json](https://www.natorisana.love/api/v1/post-list.json) 「配信ごとのボタンのページ」の URL 一覧
- [posts.json](https://www.natorisana.love/api/v1/posts.json) Jekyll のビルドイン変数 `site.posts` をそのまま JSON にしたもの（ブラウザでは開けないサイズ）
- [buttons.json](https://www.natorisana.love/api/v1/buttons.json) ボタンの一覧（ブラウザでは開けないサイズ）

各配信ごとのボタンは、 `/api/button/{title}.json` というパスになっています。一覧系の post-list.json を見てください。
