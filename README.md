# ResearchManager
使い方です．
私の場合なので，gitやtortoisegitなどは，ぞれぞれが使いやすい方法で大丈夫です．

## 環境構築
1. visual studio code(vscode)をインストール
2. node.jsをインストール
3. gitをインストール
4. tortoise gitをインストール

## リポジトリのクローン
1. https://github.com/seytwo/ResearchManager → [Clone or download] → リポジトリのurlを取得
2. ローカルの希望の場所にでクリック → [Gitクローン(複製)] → 1.のurlを指定 → OK

## node.js/electronの設定
1. vscodeを開く
2. ファイル → フォルダを開く → ローカルに保存したリポジトリを指定
3. 表示 → ターミナル
4. npm init -y  
(package.jsonを作成)
5. npm install electron  
(package-lock.json, node_modulesを作成)
6. npm install electron-packager

## vscodeで実行する方法
1. electron ./src/index.js  

## exe/appファイルから実行する方法
1. npx electron-packager ./src ResearchManager --platform=(win32/darwin) --arch=x64 --overwrite  
((win32/darwin)はどちらかを選択; ResearchManager-(win32/darwin)-x64を作成)
2. [ResearchManager/ResearchManager-(win32/darwin)-x64/resources]に[ResearchManager/data]をコピー
3. [ResearchManager/ResearchManager-(win32/darwin)-x64/ResearchManager.exe]を実行
