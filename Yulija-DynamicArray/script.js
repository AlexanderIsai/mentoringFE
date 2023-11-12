class MyArray {
    constructor() {
        this.storage = Array(2);
        this.index = 0;
    }

    oldAppend = (item) => {
        const count = this.storage.length;
        const temp = Array(count + 1);

        for (let i = 0; i < count; i++) {
            temp[i] = this.storage[i];
        }

        this.storage = temp;
        this.storage[count] = item;
    }

    append = (item) => {
        if (this.index === this.storage.length) {
            const count = this.storage.length;
            const temp = Array(2 * count);
            for (let i = 0; i < count; i++) {
                temp[i] = this.storage[i];
            }
            this.storage = temp;
        }
        this.storage[this.index++] = item;
    }


    print = () => {
        let result = '';
        for (let i = 0; i < this.index; i++) {
            result += `${this.storage[i]} `;
        }
        return result;
    }

    search = (item) => {
        let result = -1;
        for (let i = 0; i < this.index; i++) {
            if (this.storage[i] === item){
                result = i
            }
        }
        return result
    }
    delete = (index) => {
        const temp = Array (this.storage.length - 1)
        for (let i = 0; i < index; i++) {
                temp[i] = this.storage[i]
        }
        for (let i = index + 1; i < this.storage.length; i++) {
            temp[i - 1] = this.storage[i]
        }
        this.index--
        this.storage = temp

    }
}

const main = () => {
    let myArray = new MyArray();
    for (let i = 0; i < 8; i++) {
        myArray.append(i);
        console.log(myArray.print());
    }
    console.log(myArray.search(5));
    myArray.delete(5)
    console.log(myArray.print());
};

main();
