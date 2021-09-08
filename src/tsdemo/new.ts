interface INew {
    aa(): 123
}

class NewClass implements INew {
    aa(): 123 {
        throw new Error("Method not implemented.");
    }
}