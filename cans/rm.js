const fs = require('fs')

try {
  fs.mkdirSync('./parent/child', { recursive: true })
} catch (e) {
  console.error(e)
}

fs.writeFileSync('./parent/child/test.tmp', 'test')

fs.watch('./parent', { recursive: true }, (eventType, filename) => {
  console.log(eventType, filename)
})

fs.rmSync('./parent/child/test.tmp')
