## さなボタン(2)の構成
さなボタン(2) は、[「本体」（このリポジトリ）](https://github.com/sanabutton/sanabutton.github.io) と [「音源」置き場](https://github.com/sanabutton/sounds) で構成されています。

「音源」は、ボタンを押したときに再生される音声をおいておくだけの場所です。
「本体」は、音源データそのもの以外の「さなボタン(2)を構成するすべて」が含まれます。音源に関するメタデータも本体に含みます。

![ブラウザと本体と音源とのアクセス](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/sanabutton/sanabutton.github.io/development/__docs/client-server-accesses.puml) 
![アクセスからボタンを押すまでのシーケンス図](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/sanabutton/sanabutton.github.io/development/__docs/play-sounds-sequence.puml)

## ビルドについて
### 本体

Docker が使えるなら `docker-compose up` 、Node.js と Ruby がインストールされている環境であれば `npm run watch` すれば、ファイルの変更を検知して勝手にビルドしてくれます。
ビルドの最終的な成果物は `_site` ディレクトリへ出力されるため、 `_site/index.html` をブラウザで開けば、ローカルでさなボタンの本体が動きます。

さなボタン(2) 本体のビルドは、以下のようなフローになっています。

![ビルドフローのアクティビティ図](http://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/sanabutton/sanabutton.github.io/development/__docs/build-flow.puml)

各「ビルド」の具体的なコマンドは、[package.json](https://github.com/sanabutton/sanabutton.github.io/blob/development/package.json) の script を見ればわかります。

もともとは、クライアントサイドのビルドをするつもりはなかったため（ビルドしなければいけないような複雑なものを実装する気がなかったため）、ビルドをより完結にするために、GitHub Pages がサポートしている Jekyll をそのまま活用していました。しかし、[「（フロントエンドで）JavaScriptをゴリゴリ使いたい場面」で困るよね](https://github.com/sanabutton/sanabutton.github.io/issues/97)という話が出たので、後から クライアントサイドのビルドタスクが追加されました。

### 音源

「音源」は、ファイルを置いているだけなので､特に自動化されたビルド等はありません。

将来的に、生放送のアーカイブの音声ファイルを与えたら、良さげな感じにカットされた音声ファイルを出力する ようなものを作るかもしれませんが、それにしても「音源」のビルドを自動化することはないでしょう。
