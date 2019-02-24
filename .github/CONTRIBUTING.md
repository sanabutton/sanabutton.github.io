# Contribution Guide

おはようございなーす！！さなボタン(2)のお手伝いがしたいせんせえですね？！

目的別に手順を書く予定なので、待っててください

- フロントエンドの開発
- サーバサイドの開発
- ボタンの追加・更新
- chores

## さなボタン(2) の構成

主なリポジトリは、[さなボタン(2) organisation ページ](https://github.com/sanabutton/) の Pinned Repositories を見てください。

## posts の日付関連の変数

- ファイル名につける日付は、配信・投稿のあった年月日 
- `date` は、その post を作った年月日（ファイル名の年月日の変数を上書きしてる）
- `last_modified_at` は、作成された後で最後に更新された年月日

各記事の更新日時の一覧たぶん使わないので、git log を参照してください。SSR する上で必要になったら、データとしてもたせます。

`last_modified_at` は、[公式の feed プラグイン](https://github.com/jekyll/jekyll-feed/blob/b85ef9a4c9815741e927d6f44213f4300fdd49f1/lib/jekyll-feed/feed.xml#L51)で使われている変数です。

ファイル名に配信・投稿のあった年月日を使っているのは、ファイルの管理上、より Primary で自然にソートできるものを Key として使いたいからです。

配信・投稿のあった年月日は、`streamed_at` などで別途変数に持ったほうが良いかもしれませんが、まだ不要なので、特に再代入などはしていません。
