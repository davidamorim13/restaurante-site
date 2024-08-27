import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
import { CategoriesScreen } from './componentes/screen/categories';
import { ProductsScreen } from './componentes/screen/products';
import './index.css';
import { HomeScreen } from "./componentes/screen/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen/>
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
