class BookApp {
     constructor(title,author,isbn){
          this.title = title;
          this.author = author;
          this.isbn = isbn;
          this.table = document.querySelector('table');
     }

     addBook() {
          const tr = document.createElement('tr');
          const main = document.querySelector('main h1');
          const goodInfo = document.createElement('section');

          goodInfo.classList.add('goodInfo');
          goodInfo.innerHTML = 'Data successfully added';

          tr.innerHTML = `
               <td>${this.title}</td>
               <td>${this.author}</td>
               <td>${this.isbn}</td>
               <td><button class="deleteBook">Hapus</button></td>
          `;
          
          this.table.appendChild(tr);
          main.appendChild(goodInfo);

          setTimeout(() => goodInfo.style.display = 'none', 2000);
     }

     deleteBook(target) {
          this.table.removeChild(target.parentElement.parentElement)
     }
}

const submit = document.querySelector('main button');
const input = document.querySelectorAll('input');


window.addEventListener('click', function(point){
     const target = point.target;
     const [titleOutput,authorOuput,isbnOuput] = input;
     const book = new BookApp(titleOutput.value,authorOuput.value,isbnOuput.value);

     if(target.classList.contains('submit')){
          if(titleOutput.value == '') alert('Title data not yet filled')
          else if(authorOuput.value == '') alert('Author data not yet filled')
          else if(isbnOuput.value == '') alert('ISBN data not yet filled')
          else {
               book.addBook();
               titleOutput.value = '';
               authorOuput.value = '';
               isbnOuput.value = '';          
          }   
     }else if(target.classList.contains("deleteBook")){
          const confirmInfo = confirm('Anda yakin ingin menghapus data ini ?');

          if(confirmInfo) book.deleteBook(target);

     }

})