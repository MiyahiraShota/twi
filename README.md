# twi
コマンドラインでtwitterをするやつ。  
つぶやくことしかできないです。  
タイムラインを見ないので、作業に集中できます。（後付け設定）  

## 初期設定

### configをつくる
`src/config/twitter_config_template.json`をコピーして
`src/config/twitter_config.json`を生成

```
cp -r src/config/twitter_config_template.json src/config/twitter_config.json
```

twitterのアクセストークンを入力してください
ここもプログラムでできたらいいね

### npm？の設定
```
$ npm install
$ npm link
```
or
```
$ make
```

## つかう
`twi`って打って内容を入れてEnter
```
$ twi
✔ なんていう？ … つぶやく
```


## 今後
- 改行できるようにしたい
- twitter_configもtwi内でできるようにしたらいいよね
- twitter_configを暗号化したい。（だって、会社サーバー内にいれたいもんね）
