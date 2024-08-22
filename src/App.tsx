import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
import { CategoriesScreen } from './componentes/screen/categories';
import { ProductsScreen } from './componentes/screen/products';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <p>ola</p>
   },
  {
    path: "/products",
    element: <ProductsScreen/>
   },
  {
    path: "/categories",
    element: <CategoriesScreen/>,
  },
]);


function App() {

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
