const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(list, k) {
  // создаем dummy-узел, чтобы не терять ссылку на голову списка
  const dummy = new ListNode(0);
  dummy.next = list;

  // удаляем все узлы со значением k
  let current = dummy;
  while (current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  // возвращаем новую голову списка (без узлов со значением k)
  return dummy.next;
}

module.exports = {
  removeKFromList
};