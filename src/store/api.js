import { createAction } from "@reduxjs/toolkit";

export const apiCallStarted = createAction("api/CallStarted");
export const apiCallSuccess = createAction("api/CallSuccess");
export const apiCallFailed = createAction("api/CallFailed");
