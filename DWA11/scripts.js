//@ts-check
import { dispatch, subscribe, getState } from "./module/store.js";
import { add, subtract, reset } from "./module/actions.js";

subscribe((_, next) => console.log(next));

getState();
dispatch(add());
dispatch(add());
dispatch(add());
getState();
dispatch(subtract());
getState();
dispatch(reset());
getState();
dispatch(subtract());
getState();
