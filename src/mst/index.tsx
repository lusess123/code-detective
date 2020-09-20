import { types, Instance, getRoot, SnapshotOut } from 'mobx-state-tree';
import React from 'react';

export const Child1 = types
  .model({
    Pro2: '123',
  })
  .actions(self => ({
    getParent() {
      const d = getRoot(self);
      return d;
    },
    jjj() {
      return [self];
    },
  }));

export const Child2 = types
  .model({
    Pro2: '123',
  })
  .actions(self => ({
    getParent(): any {
      const d = getRoot(self) as RootInstance;
      return d.Children2;
    },
    jjj() {
      return [self];
    },
  }));

export type TChild2 = Instance<typeof Child2>;
export type TChild21 = SnapshotOut<typeof Child2>;
// export type TChild22 = typeof Child2.type;

export const RootStore = types
  .model({
    Children1: types.map(Child1),
    Children2: types.array(Child2),
    Pro1: '123',
  })
  .actions(self => ({
    ggg() {
      return [...self.Children1.values()].map(a => a.Pro2);
    },
    ffff() {
      return [...self.Children1.values()].map(a => a);
    },
  }));

export type RootInstance = Instance<typeof RootStore>;

export default () => {
  return <h1>sdfdf</h1>;
};
