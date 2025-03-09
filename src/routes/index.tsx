import { RouteObject } from "react-router";
import Layout from "../layout";
import React from "react";
import KanbanBoard from "../components/KanbanBoard";



const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        children: [
          {
            path: "",
            element: <KanbanBoard />,
          },
        ],
      },
    ],
  },
];

export default routes;
