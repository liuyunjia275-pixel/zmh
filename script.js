const wishes = [
  '愿今天的你，收到一个不期而遇的好消息。',
  '愿我们把小小的开心，认真地过成大大的日子。',
  '愿风有约，花不误，岁岁如此，永远向前。',
  '愿你眼里有光，身边有爱，脚下的路正开花。',
  '愿每次出发，都有彼此和明亮的远方。'
];
let current = 0;
document.querySelector('#wish-button').addEventListener('click', () => {
  const next = (current + 1 + Math.floor(Math.random() * (wishes.length - 1))) % wishes.length;
  current = next;
  const text = document.querySelector('#wish-text');
  text.animate([{opacity:1, transform:'translateY(0)'},{opacity:0, transform:'translateY(-8px)'},{opacity:1, transform:'translateY(0)'}], {duration:420, easing:'ease-out'});
  text.textContent = wishes[current];
});
