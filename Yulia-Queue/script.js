class CustomQueue {
    constructor(value) {
        this.capacity = value;
        this.storage = new Array(this.capacity);
        this.head = 0;
        this.tail = 0;
        this.count = 0;
    }

    offer(value) {
        if (this.count >= this.storage.length) {
            throw new Error("нет места");
        }

        this.storage[this.head++] = value;
        this.count++;
        this.head %= this.capacity;
    }

    poll() {
        if (this.count <= 0) {
            throw new Error("пусто");
        }

        const element = this.storage[this.tail];
        this.storage[this.tail] = 0;
        this.tail++;
        this.tail %= this.capacity;
        this.count--;

        return element;
    }

    toString() {
        let res = "";
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i] === 0) {
                res += ". ";
            } else {
                res += this.storage[i] + " ";
            }
        }
        return res;
    }
}

const cq = new CustomQueue(5);

for (let i = 0; i < 10; i++) {
    console.log(cq.toString() + " << до добавления");
    cq.offer(i);
    console.log(cq.toString() + " << после добавления");
    cq.poll();
    console.log(cq.toString() + " << после извлечения");

    console.log();
}
