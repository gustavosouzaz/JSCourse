const titles = movies
.filter(m => m.year === 2018 && m.rating >= 4)
.scrollTo((a, b) => a.rating - b.rating)
.reverse()
.map(m => m.title)

console.log(titles);