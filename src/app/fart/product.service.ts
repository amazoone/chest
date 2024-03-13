import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { ProductStatus } from '../models/productStatus';
import { ProductType } from '../models/productType';
import { ChildcareService } from './childcare.service';
import { Page } from '../models/page';
import { LogService } from './log.service';
import moment from 'moment-timezone';
import { Schedule } from '../models/schedule';

/**
 * Service dedicated to Product management.
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.api.url + "/childcares";

  constructor(
    private childcareService: ChildcareService,
    private http: HttpClient,
    private logger: LogService) { }

  /**
   * Creates a new Product via the API.
   * @param ccid the childcare's id
   * @param product the product to create
   * @returns Observable<Product> the created Product
   */
  create(ccid: number, product: Product): Observable<Product> {
    product.initKidIds();

    if (!product?.schedule?.zoneId) {
      this.logger.error("Product requested for creation without zoneId", {
        ccid: product.childcareId,
        name: product.name
      });
    }

    delete product.nextProcessing;
    delete product.children;
    delete product.started;
    delete product.nextProcessing;
    delete product.pastProcessing;
    delete product.statusMessage;
    delete product.error;
    delete product.totalAmount

    return this.http.post<Product>(this.apiUrl + "/" + ccid + "/products", product, { withCredentials: true });
  }

  getLastProcessing(ccid: number, schedule: Schedule): Observable<moment.Moment> {

    if (!schedule?.zoneId) {
      this.logger.error("Product requested for creation without zoneId", {
        ccid: ccid
      });
    }

    return this.http.post<moment.Moment>(this.apiUrl + "/" + ccid + "/products/lastProcessing", schedule, { withCredentials: true });
  }

  /**
   * Update the specific Product via the API.
   * @param ccid the childcare's id
   * @param product the product to update
   * @returns Observable<Product> the updated Product
   */
  update(ccid: number, product: Product): Observable<Product> {
    product = Object.assign(new Product(), product)
    product.initKidIds();
    delete product.started;
    delete product.lastProcessing;
    delete product.pastProcessing;
    delete product.nextProcessing;
    delete product.error;
    delete product.statusMessage;
    delete product.totalAmount

    if (!product?.schedule?.zoneId) {
      this.logger.error("Product requested for update without zoneId", {
        ccid: product.childcareId,
        id: product.id,
        name: product.name
      });
    }

    return this.http.put<Product>(this.apiUrl + "/" + ccid + "/products", product, { withCredentials: true });
  }

  /**
   * Get all Products for a specific childcare.
   * @param childcareId the selected childcare
   * @param type the product type
   * @param skip the page number
   * @param limit the number of element per page
   * @param sort the attribute on which the system has to sort the list
   * @param direction the direction of sorting
   * @returns Page<Product> the page contains the list of Product
   */
  getAll(childcareId: number, skip: number, limit: number, sort: string, direction: string, type?: ProductType, status?: ProductStatus): Observable<Page<Product>> {
    return this.childcareService.getAllProducts(childcareId, skip, limit, sort, direction, type, status);
  }

  /**
   * Delete a specific Product
   * @param ccid the childcare's id
   * @param id the id of the Product to delete
   */
  delete(ccid: number, id: string) {
    return this.http.delete(this.apiUrl + "/" + ccid + "/products/" + id, {});
  }

  /**
   * Get a specific Product
   * * @param ccid the childcare's id
   * @param id the id of the Product to get
   * @returns Observable<Product> the requested Product
   */
  get(ccid: number, id: string): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + "/" + ccid + "/products/" + id, { withCredentials: true });
  }

  exists(obj): boolean {
    return obj != null && obj != undefined;
  }
}
