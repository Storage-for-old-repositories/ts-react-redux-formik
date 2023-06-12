import { FormikBase, Main, ReduxAsync, ReduxBase, ReduxRtk } from "@/pages";
import { ROUTES_EXAMPLES } from "@/shared";
import { createBrowserRouter } from "react-router-dom";

const examples = {
  "/formik_base": <FormikBase />,
  "/redux_base": <ReduxBase />,
  "/redux_async": <ReduxAsync />,
  "/redux_rtk": <ReduxRtk />,
} satisfies Record<keyof typeof ROUTES_EXAMPLES, JSX.Element>;

const examplesList = Object.entries(examples).map(([path, element]) => {
  return { path, element };
});

export const routerExamples = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  ...examplesList,
]);
