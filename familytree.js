import { LinkedList } from "./index.js";

const linkedList = new LinkedList();

//Adds members of the family to the tree from the head/start
linkedList.prepend('Brigette');
linkedList.prepend('Robert');
linkedList.prepend('Kevin');

//Prints out the family members added to the family tree
linkedList.toString();

//Adds members of the family tot the tree from the tail/end
linkedList.append('Finnegan');
linkedList.append('Doris');

//Prints out the family members added to the family tree and size of family tree
linkedList.toString();
linkedList.size();

//Checks to see if family member exists and at which index
linkedList.containsValue('Kevin')
linkedList.findValue('Kevin')
linkedList.containsValue('Pickle')
linkedList.findValue('Pickle')