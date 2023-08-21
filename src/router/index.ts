import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import TaskListPage from "@/views/TaskListPage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "TaskListPage",
    component: TaskListPage,
  }
];

const router = createRouter({
  history: createWebHistory("/vueList-todo/"),
  routes,
});

export default router;
