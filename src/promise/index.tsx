// type resolverFun = resolverParm => void
type pAction<T> = (p?: T) => void;
type execer<T, Error> = (
  onResolved?: pAction<T>,
  onRejected?: pAction<Error>,
) => MyPromise<T, Error>;

export default class MyPromise<T, Error> {
  private state: 'pending' | 'resolved' | 'rejected' = 'pending';
  private data?: T | Error | undefined;
  // private error? : Error
  private resolverFunCallBackList: pAction<T>[] = [];
  private rejectFunCallBackList: pAction<Error>[] = [];
  private uid = +new Date();

  private resolverFun: pAction<T> = p => {
    if (this.state !== 'pending') return;
    this.state = 'resolved';
    // this.error = undefined
    this.data = p;
    this.resolverFunCallBackList.forEach(f => {
      f();
    });
  };

  private rejectFun: pAction<Error> = p => {
    if (this.state !== 'pending') return;
    this.state = 'rejected';
    this.data = p;
    this.rejectFunCallBackList.forEach(f => {
      f();
    });
  };

  constructor(execer: execer<T, Error>) {
    // alert('constructor')
    this.uid = +new Date();
    setTimeout(() => {
      try {
        execer(this.resolverFun, this.rejectFun);
      } catch (error) {
        this.rejectFun(error);
      }
    }, 0);
  }

  public then: execer<T, Error> = (onResolved, onRejected) => {
    return new MyPromise((resolver, reject) => {
      switch (this.state) {
        case 'resolved':
          setTimeout(() => {
            resolver(onResolved && onResolved(this.data as T));
          });
          break;
        case 'rejected':
          setTimeout(() => {
            resolver(onRejected && onRejected(this.data as Error));
          });
          break;
        default:
          if (onResolved) {
            // alert(this.uid+'      '+this.resolverFunCallBackList.length)
            this.resolverFunCallBackList.push(() => {
              setTimeout(() => {
                const newData = onResolved(this.data as T);
                resolver(newData || (this.data as T));
              });
            });
            // alert(this.uid+'      '+this.resolverFunCallBackList.length)
          }
          if (onRejected) {
            this.rejectFunCallBackList.push(onRejected);
          }
          break;
      }
    });
    // return this
  };

  public catch = (reject: pAction<Error>) => {
    if (reject) {
      this.rejectFunCallBackList.push(reject);
    }
    return this;
  };

  static all(promises: MyPromise<unknown, unknown>[]): any {
    return null;
  }

  static race(promises: MyPromise<unknown, unknown>[]): any {
    return null;
  }

  static resolve() {}

  static reject() {}
}

// type MyPromise =  MyPromise<unknown, unknown>
