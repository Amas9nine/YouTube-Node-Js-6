const fs = require("fs");

// создание самой папки
// fs.mkdirSync("text-files");

// создание файла в папке
// fs.mkdir("text-files", () => {
//   fs.writeFile("./text-files/text.txt", "Azamat its call back()!!! ", () => { })
// })

// удалени файла файла с fs.unlink
// удаление самой папки с fs.rmdir
fs.unlink("./text-files/text.txt", () => {
  fs.rmdir("./text-files", () => { })
})