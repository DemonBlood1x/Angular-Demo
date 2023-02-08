import { Component } from '@angular/core';
import { Product } from '../pages/products/interfaces/product.interface';
import { ProductsService } from '../pages/products/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  selectedFile!: File;
  fileName: string = '';
  products!: Product[];

  constructor(private productSvc: ProductsService) {}


  onFileSelected(event: any) {
    const file:File = event.target.files[0];
    let fileReader: any;

      if (file) {
        this.fileName = file.name;

        fileReader = new FileReader();
        fileReader.readAsText(file, "UTF-8");
        fileReader.onload = () => {
          this.products = JSON.parse(fileReader.result);

          //Here the delete method in case you want to change the list
          this.generateProducts(this.products)

        fileReader.onerror = (error: any) => {
          console.log(error);
        }
      }
    }
  }

  //Delete list method (if you want to remplace the product list with a new file)
  async deleteCurrentProducts(){
    const sleep = (ms:any) => new Promise(r => setTimeout(r, ms));
    for(var i=1; i <= 6; i++){
      console.log("deleting product "+i)
      this.productSvc.deleteProduct(i);
      await sleep(500);
    }
  }


  loadPropertyFile(products: any) {
    this.productSvc.uploadfile(products).subscribe((data: any) => {
      this.products = data;

      console.log("Update product ");
    });
  }

  async generateProducts (data: Product[]) {
    const product = []
    const sleep = (ms:any) => new Promise(r => setTimeout(r, ms));
    for (var id = 0; id < data.length; id++) {
      product.push({
        "name": data[id].name,
        "description": data[id].description,
        "calendar": data[id].calendar
      })
      console.log(product[id])
      this.loadPropertyFile(product[id])
      await sleep(500);
    }
    this.refresh()
    return { "products": product }
  }

  refresh(): void {
    window.location.reload();
}


}
