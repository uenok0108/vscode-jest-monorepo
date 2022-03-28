# vscode-jest-monorepo

VSCodeの拡張機能「Jest」をmonorepo構成で利用する場合のサンプル。  
本サンプルは

- yarn workspace
- turborepo

にて構成しています。

## 使い方

1. VSCodeに[Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)の拡張機能をインストールする。  
2. 本リポジトリをVSCode上で「Open Folder」から開くのではなく、「Open Workspace from File」で開く。  
その際に本リポジトリに同梱されている `.code-workspace` ファイルを指定。
