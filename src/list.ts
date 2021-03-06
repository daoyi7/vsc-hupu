import * as vscode from "vscode";
import { App } from "./app";
import Article from "./article";
import Readed from "./readed";

export class List implements vscode.TreeDataProvider<vscode.TreeItem> {
  private _onDidChangeTreeData = new vscode.EventEmitter<
    vscode.TreeItem | undefined
  >();
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

  refresh(): void {
    this._onDidChangeTreeData.fire(undefined);
  }

  getTreeItem(ele: vscode.TreeItem): vscode.TreeItem {
    return ele;
  }

  getChildren(element?: vscode.TreeItem): vscode.TreeItem[] {
    return App.instance.NewsList.map((l) => new Article(l));
  }
}

export class ReadedList implements vscode.TreeDataProvider<vscode.TreeItem> {
  private _onDidChangeTreeData = new vscode.EventEmitter<
    vscode.TreeItem | undefined
  >();
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

  refresh(): void {
    this._onDidChangeTreeData.fire(undefined);
  }

  getTreeItem(ele: vscode.TreeItem): vscode.TreeItem {
    return ele;
  }

  getChildren(element?: vscode.TreeItem): vscode.TreeItem[] {
    return App.instance.ReadedList.map((l) => new Readed(l));
  }
}
