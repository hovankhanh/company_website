import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { Categories } from '../../../models/categories';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  public cate: Categories;
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    // this.cate = new Categories();
  }

  addCate(name_cate: string){
    console.log(name_cate);
  }

}
