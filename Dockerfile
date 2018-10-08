# そのまま使いたかったのだけれど、依存先のライブラリが古かったりして動かなかったので。
FROM starefossen/github-pages

COPY Gemfile /usr/src/app
COPY Gemfile.lock /usr/src/app

RUN apk --update add --virtual build_deps \
    build-base ruby-dev libc-dev linux-headers \
  && bundle install \
  && apk del build_deps \
  && rm -rf /usr/lib/ruby/gems/*/cache/*.gem

WORKDIR /usr/src/app

CMD jekyll serve -d /_site --watch --force_polling -H 0.0.0.0 -P 4000
