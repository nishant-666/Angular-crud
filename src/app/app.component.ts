import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud';
  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.userService.getAllData()
      .subscribe(data => {
        console.log(data)
      })
  }
  submitData(value: any) {
    let body = {
      name: value.name,
      age: value.age
    }
    this.userService.postData(body)
    .subscribe(response => {
      console.log(response)
    })
  }

  updateData(value: any){
    let body = {
      name: value.name,
      age: value.age
    }

    this.userService.updateData(body, `622c55fbdea0f4aaa5cdfc4f`)
    .subscribe(response => {
      console.log(response);
    })
  }

  delete(){
    this.userService.deleteData(`622c573cf23ce54e445b2bed`)
    .subscribe(response => {
      console.log(response);
    })
  }
}
