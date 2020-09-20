import React from 'react';
import {
  model,
  Model,
  prop,
  modelAction,
  getRoot,
  getSnapshot,
  fnModel,
  FnModelData,
} from 'mobx-keystone';
import { computed } from 'mobx';
import {
  observer,
  useObserver,
  Observer,
  useLocalStore,
} from 'mobx-react-lite';

type DataTable<T> = Record<string, T> | undefined;

@model('myCoolApp/Todo')
class Todo extends Model({
  text: prop<string>(), // a required string
  done: prop(false),
  Todo2: prop<Todo2 | undefined>(),
  dt: prop<DataTable<Todo2>>(),
}) {
  @modelAction
  setDone(done: boolean) {
    this.done = done;
  }
  @modelAction
  setText(text: string) {
    this.text = text;
  }
  @computed
  get asString() {
    return `${!this.done ? 'TODO' : 'DONE'} ${this.text}`;
  }

  get self(): Todo {
    return this;
  }

  get self2(): Todo {
    return this.Todo2!.self;
  }
}

@model('myCoolApp/Todo2')
class Todo2 extends Model({
  text: prop<string>(), // a required string
  done: prop(false),
}) {
  @modelAction
  setDone(done: boolean) {
    this.done = done;
  }
  @modelAction
  setText(text: string) {
    this.text = text + '  iiii';
  }
  @computed
  get asString() {
    return `${!this.done ? 'TODO' : 'DONE'} ${this.text}`;
  }

  get self(): Todo {
    return new Todo({ Todo2: undefined, text: '234' });
  }

  get Root() {
    const f = getRoot(this) as Todo;
    console.log(f);
    //  f.text = +new Date() + 'uuuuu'
    f.setText(+new Date() + 'uuuuu');
    return f;
  }
}

const Obj = new Todo({
  text: '234',
  Todo2: new Todo2({
    text: 'ttyy',
  }),
  dt: {
    aa: new Todo2({
      text: '123',
    }),
  },
});

export default observer(() => (
  <div>
    <div>{JSON.stringify(getSnapshot(Obj))}</div>
    <h1>{Obj?.Todo2?.Root.text}</h1>
    <button onClick={() => Obj.Todo2!.setText(+new Date() + ' ooo')}>
      fff
    </button>
  </div>
));

type TFnRoot = {
  A1: string;
  B1: string;
};
const FnRoot = fnModel<TFnRoot>('aaa')
  .views({
    title() {
      return this.A1 + this.B1;
    },
  })
  .actions({
    setA1() {},
  });

const gg = FnRoot.create({ A1: '123', B1: '456' });
type fff = FnModelData<typeof FnRoot>;
