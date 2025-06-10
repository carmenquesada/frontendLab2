import OrderController from '../../../../../../IISSI2Carmen/Lab3Carquerod/DeliverUS-Backend/src/controllers/OrderController.js'
import ProductController from '../../../../../../IISSI2Carmen/Lab3Carquerod/DeliverUS-Backend/src/controllers/ProductController.js'
import RestaurantController from '../controllers/RestaurantController.js'

const loadFileRoutes = function (app) {
  // TODO: Include routes for restaurant described in the lab session README
  app.route('/restaurants')
    .get(
      RestaurantController.index
    )
    .post(
      RestaurantController.create
    )
  app.route('/restaurants/:restaurantId')
    .get(
      RestaurantController.show
    )
    .put(
      RestaurantController.update
    )
    .delete(
      RestaurantController.destroy
    )
  app.route('/restaurants/:restaurantId/orders')
    .get(
      OrderController.indexRestaurant
    )
  app.route('/restaurants/:restaurantId/products')
    .get(
      ProductController.indexRestaurant
    )
  app.route('/restaurants/:restaurantId/analytics')
    .get(
      OrderController.analytics
    )
}
export default loadFileRoutes
