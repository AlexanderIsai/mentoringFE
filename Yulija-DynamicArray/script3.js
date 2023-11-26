class Node {
    constructor(item) {
        this.value = item;
        this.next;
    }
}

class CustomList {
    constructor() {
        this.head = undefined;
    }

    append(item) {
        if (this.head === undefined) {
            this.head = new Node(item);
            return;
        }

        let t = this.head;
        while (t.next !== undefined) {
            t = t.next;
        }
        t.next = new Node(item);
    }

    pushToTail (item) {
        let node = new Node(item);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    appendToIndex(index, item) {
        if (index === 0) {
            const node = new Node(item);
            node.next = this.head;
            this.head = node;
            return;
        }
        let count = 0;
        let t = this.head;

        while (count < index - 1) {
            t = t.next;
            count += 1;
        }

        const node = new Node(item);
        node.next = t.next;
        t.next = node;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }
    remove(index){
        if (index < 0) {
            return;
        }

        if (index === 0) {
            if (this.head) {
                this.head = this.head.next;
            }
            return;
        }

        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        while (current && currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }

        if (current) {
            previous.next = current.next;
        }
    }
    get(index) {
        if (index < 0) {
            return null;
        }
        let current = this.head;
        let currentIndex = 0;

        while (current && currentIndex < index) {
            current = current.next;
            currentIndex++;
        }
        return current ? current.value : null;
    }


}

class Printer {
    constructor() {
        this.sb = "";
    }

    print(list) {
        this.sb = "";
        let t = list.head;
        while (t !== undefined) {
            this.sb += `${t.value} `;
            t = t.next;
        }
        return `[${this.sb.trim()}]`;
    }
}

const main = () => {
    const list = new CustomList();
    const printer = new Printer();

    list.append(0);
    list.append(1);
    list.appendToIndex(0, 11);
    list.removeLast()
    list.pushToTail(15)
    list.remove(1)
    console.log(printer.print(list));
}

main();