console.log("Saurabh, you are amazing and perfect");

class LinkedList {
  head;
  tail;
  size;
  constructor(nodeValue) {
    this.head = {
      value: nodeValue,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  appendNode(nodeValue) {
    let newN = {
      value: nodeValue,
      next: null,
    };
    this.tail.next = newN;
    this.tail = newN;
    this.size++;
  }

  insertNodeAtNth(position, nodeValue) {
    if (position < 0 || position > this.size) {
      alert("Please enter correct index");
      return;
    } else {
      let newNode = {
        value: nodeValue,
        next: null,
      };

      if (position == 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let curr, prev;
        curr=this.head;
        let count=0;
        while(count<position){
            count++;
            prev=curr;
            curr=curr.next;
        }
        newNode.next=curr;
        prev.next=newNode
      }

      this.size++;
    }
  }


  printAll(){
    let current=this.head;
    while(current!=null){
      console.log(current.value);
      current=current.next;
    }
  }

  deleteNode(elementValue){
    let current=this.head, prev=null;
    if(current.value==elementValue){
      this.head=current.next;
    }else{
      while(current.value!=elementValue){
        prev=current;
        current=current.next;
      }

      prev.next=current.next;

    }

    this.printAll();
  }

}

const l1 = new LinkedList(200);
l1.appendNode(400);
l1.appendNode(500);
l1.appendNode(600);
l1.appendNode(700);
l1.insertNodeAtNth(2, 450);
// l1.printAll()
// l1.deleteNode(600)
// l1.deleteNode(200)
console.log(l1);
