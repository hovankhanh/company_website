import { Component, OnInit } from '@angular/core';
import { Categories } from '../../../models/categories';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Categories[];
  
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories(): void {
    this.categoriesService.getCategories().subscribe(categories => this.categories = categories);
  }

  add(name_cate: string): void {
    name_cate = name_cate.trim();
    if (!name_cate) { return; }
    this.categoriesService.addCate({ name_cate } as Categories);
  }

}
