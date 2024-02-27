import { call, put, takeEvery } from "redux-saga/effects";

import { IPucharse } from "../../../Types/models";
import pucharseApi from "../../../services/pucharseApi";
import {
  handleGetListPucharseFail,
  handleGetPucharse,
  handleGetPucharseSuccess,
} from "../Reducers/pucharseSlice";

function* handlePucharseSaga() {
  try {
    const res: IPucharse[] = yield call(pucharseApi.getAllPucharses);

    yield put(handleGetPucharseSuccess(res));
  } catch (error) {
    yield put(handleGetListPucharseFail());
  }
}

function* pucharseSaga() {
  yield takeEvery(handleGetPucharse.type, handlePucharseSaga);
}

export default pucharseSaga;
