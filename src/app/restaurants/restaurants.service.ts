import{Restaurant} from './restaurant/restaurant.model'
import{Observable} from 'rxjs/Observable'
import{Http} from '@angular/http'
import {REST_APP_API} from '../app.api'
import{Injectable} from '@angular/core'
import{ErrorHandler} from '../app.error-handler'
import{MenuItem} from '../restaurant-detail/menu-item/menu-item.model'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class RestaurantService{
  constructor(private http:Http){}

//faz solicitação http para api_server da lista dos restaurantes
  restaurants():Observable<Restaurant[]>{
      return this.http.get(`${REST_APP_API}/restaurants`).map(response=>response.json())
      .catch(ErrorHandler.handleError)
  }

//faz solicitação http para api_server de um unico restaurante por id
  restaurantsById(id:string):Observable<Restaurant>{
      return this.http.get(`${REST_APP_API}/restaurants/${id}`).map(response=>response.json())
      .catch(ErrorHandler.handleError)
  }

//faz solicitação http para api_server pelos reviews de um unico restaurante por id
  reviewOfRestaurant(id:string):Observable<Restaurant>{
      return this.http.get(`${REST_APP_API}/restaurants/${id}/reviews`).map(response=>response.json())
      .catch(ErrorHandler.handleError)
    }

  menuOfRestaurant(id:string):Observable<MenuItem[]>{
      return this.http.get(`${REST_APP_API}/restaurants/${id}/menu`).map(response=>response.json())
      .catch(ErrorHandler.handleError)
    }
}
