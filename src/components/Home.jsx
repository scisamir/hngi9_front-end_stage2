import me from '../me.jpg';

export default function Home() {
    return (
        <div id="linktree">
          <img src={me} alt="my photo" id="profile_img" />  
          <h2 id="name">Samir Idris</h2>
          <a href="https://twitter.com/ScientistSamir" id="twitter">Twitter Link</a>
          <p hidden id="slack">scisamir</p>

          <a href="https://training.zuri.team/" id="btn_zuri">Zuri Team</a>
          <a href="http://books.zuri.team" id="books" title="This is where you find books about design and coding">Zuri Books</a>
          <a href="https://books.zuri.team/python-for-beginners?ref_id=scisamir" id="book_python" title="This is a concise and great book to help you understand python as fast as possible">Python Books</a>
          <a href="https://background.zuri.team" id="pitch" title="For many years, HNG has been graduating qualfied and experienced coders and designers">Background Check for Coders</a>
          <a href="https://books.zuri.team/design-rules" id="book_design" title="This book guides you to make you a great designer">Design Books</a>
          <a href={`contact`} id="contact">Contact Me</a>
        </div> 
    );
}