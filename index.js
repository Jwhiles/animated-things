
var draw = SVG('drawing').size(2050, 2000)
draw.viewbox(00,00,650,1000)
draw.rect(200,300).fill('yellow');
draw.rect(110,100).fill('palevioletred').move(-10, 30)
// draw.text('hello').font({family: 'Futura', size: 144})
//   .path('M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80')
//   .animate(2000, '<>')
//   .plot('M10 80 C 40 200, 65 150, 95 80 S 150 10, 180 80')
//   .loop(true, true)

var polyline = draw.polyline('0,0 100,50 50,100 120,120 120,120')
  .fill('none')
  .rotate(-24)
  .skew(0, 5)
  .animate()
  .stroke({ width: 2 })
  .rotate(0)
  .move(10, 140)
  .animate()
  .rotate(45)
  .skew(25, 0)


draw.text('woah')
  .move(-200, 0)
  .font({family: 'Futura', size: 84})
  .animate(1400, '<>')
  .move(0,0)

draw.text('hello')
  .move(-240, 33)
  .skew(25, 30)
  .font({family: 'Futura', size: 54})
  .animate(1500, '<>')
  .move(-30,-30)
  .skew(0, 0)


