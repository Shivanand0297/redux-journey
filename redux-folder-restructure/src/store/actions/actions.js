import { createAction } from "@reduxjs/toolkit";

// manually creating an action type of app/reset to reset both movies and songs
export const reset = createAction("app/reset");
