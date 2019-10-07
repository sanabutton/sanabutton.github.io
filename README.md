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
正しく sitemap になっているので、 [過去の宣伝のページ](https://www.natorisana.love/events.htm)や[タロ耳又ボタン](https://www.natorisana.love/odanobu/)も含まれているので、適当にフィルタリングする必要があると思います。
