var content = document.querySelectorAll('.scrollable');
//container = document.querySelectorAll('.scrollbar-container'),
content.forEach((el) => {
  el.addEventListener('scroll', function(e) {
    var scrollContainer = this.closest('.scrollContainer');
    var scrollBarContainer = scrollContainer.querySelector('.scrollbar-container');     
    var scroll = scrollBarContainer.querySelector('.scrollbar');
     
    scroll.style.height = scrollBarContainer.clientHeight * this.clientHeight / this.scrollHeight + "px";

    scroll.style.top = scrollBarContainer.clientHeight * this.scrollTop / this.scrollHeight + "px";

    scroll.addEventListener('mousedown', function(start){
      start.preventDefault();
      var y = scroll.offsetTop;
      var onMove = function(end){
        var delta = end.pageY - start.pageY;
        scroll.style.top = Math.min(scrollBarContainer.clientHeight - scroll.clientHeight, Math.max(0, y + delta)) + 'px';
        this.scrollTop = (this.scrollHeight * scroll.offsetTop / scrollBarContainer.clientHeight);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', function(){
        document.removeEventListener('mousemove', onMove);
      });
    });
  });
})

var event = new Event('scroll');

window.addEventListener('resize', () => {

  content.forEach((el) => el.dispatchEvent.bind(el, event))
  
});

content.forEach((el) => el.dispatchEvent(event));

