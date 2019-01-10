import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { Actions } from '../actions';
import { Article } from '../article';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() articles;

  model: Article = {
    id: null,
    title: "",
    link: "",
    tag: "#",
  };

  constructor(private actions: Actions) { }

  ngOnInit() {
    this.actions.loadAllArticles();
  }

  onSubmit() {
    this.actions.addArticle(this.model);
  }

  removeArticle(article) {
    this.actions.removeArticle(article);
  }
}
