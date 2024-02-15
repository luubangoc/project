import { Fragment, useEffect} from "react";
import { useDispatch } from "react-redux";
import { handleProductsFetchRequest } from "./features/Redux/Reducers/productSlice";
import { useSelector } from "react-redux";
import { RootState } from "./features/Redux/Store/store";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleProductsFetchRequest());
  }, []);

  const listProduct = useSelector((state:RootState)=>state.reducer.productReducer.listProduct)
  console.log(listProduct);
  return <Fragment></Fragment>;
}

export default App;

