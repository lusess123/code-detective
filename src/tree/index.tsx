export async function forEachAsync<T>(list: T[], fn: Function) {
  for (let t of list) {
    await fn(t);
  }
}



export function treeRecursionFind<T>(nodes: T[], findFun: (node: T) => boolean, findChildrenFun: (node: T) => T[], arrange: T[] = []){
  let result = null;
  let newArrange = [...arrange];
  nodes.find(a => {
    if (findFun(a)) {
      result = a;
      return true;
    }

    const list = findChildrenFun(a);

    if (list) {
      const res = treeRecursionFind(list, findFun, findChildrenFun, [...arrange, a]);
      result = res.result;
      if (result) newArrange = res.arrange;
      return res.result;
    }
  });
  return {
    result,
    arrange: newArrange
  };
};
export function treeRecursionForEach<T>(nodes: T[], eachFun: (node: T) => void, eachChildrenFun: (node: T) => T[]){
  nodes.forEach(node => {
    eachFun(node);
    const children = eachChildrenFun(node);

    if (children) {
      treeRecursionForEach(children, eachFun, eachChildrenFun);
    }
  });
};
export function treeRecursionGetSubtree(nodes: any[], childrenName: string, findFun: (node: any) => boolean, findChildrenFun: (node: any) => any[], mapFun?: (node: any) => any){
  const list: any[] = [];
  nodes.forEach(node => {
    if (findFun(node)) {
      // const newNode = {...node}
      const newNode = mapFun ? mapFun(node) : node;
      const children = findChildrenFun(node);

      if (children && children.length) {
        const _list = treeRecursionGetSubtree(children, childrenName, findFun, findChildrenFun, mapFun); // newNode.__children = _list


        list.push({ ...newNode,
          [childrenName]: _list
        });
      } else {
        list.push({ ...newNode
        });
      }
    }
  });
  return list;
};
