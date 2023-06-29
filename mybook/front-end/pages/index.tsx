export default function Home() {
  const books = [
    {
      id: 1,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 2,
      title: "The Great Gatsby",
      imageUrl: "https://cdn.kobo.com/book-images/c5742da9-e63f-4ed5-acb6-074fab5e3f41/1200/1200/False/the-great-gatsby-11.jpg",
      description: "The story of Jay Gatsby and his ill-fated love for Daisy Buchanan, set against the backdrop of the roaring twenties in America.",
      genres: ["Drama"],
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
      description: "The story of Scout Finch and her family, who live in a small town in Alabama during the Great Depression. Scout's father, a lawyer, defends a black man accused of rape, and the trial becomes a major event in the town.",
      genres: ["Drama"],
    },
    {
      id: 4,
      title: "1984",
      imageUrl: "https://i.pinimg.com/originals/ea/f1/d2/eaf1d2f2d68a2cf606c11676257c86ac.jpg",
      description: "In a dystopian future, a man named Winston Smith rebels against the oppressive regime of the Party and falls in love with a fellow rebel, only to be brutally punished for his actions.",
      genres: ["Drama"],
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/58c180edff7c50dd0e51a2ad/1596041993633-UW2GTN4JZP8XLPZKKXCJ/9781847493699.jpg",
      description: "The story of Elizabeth Bennet and her relationships with various suitors, including the wealthy and proud Mr. Darcy.",
      genres: ["Drama"],
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      imageUrl: "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
      description: "The story of Holden Caulfield, a young man who has been expelled from prep school and is struggling to find his place in the world.",
      genres: ["Drama"],
    },
    {
      id: 7,
      title: "Animal Farm",
      imageUrl: "https://m.media-amazon.com/images/I/91LUbAcpACL._AC_UF894,1000_QL80_.jpg",
      description: "A political allegory that tells the story of a group of farm animals who rebel against their human farmer and try to create a society where the animals can be equal and free.",
      genres: ["Drama"],
    },
    {
      id: 8,
      title: "Lord of the Flies",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5866f837d1758e37151af0d5/1483358164547-YX9AIEAPDHEQPKKU5UC9/LordOfTheFliesSpotsCover23.jpg?format=1500w",
      description: "The story of a group of boys who are stranded on an uninhabited island and attempt to govern themselves, but their efforts ultimately descend into violence and chaos.",
      genres: ["Historical", "Drama"],
    },
    {
      id: 9,
      title: "Brave New World",
      imageUrl: "https://kbimages1-a.akamaihd.net/b75f696b-495b-45b7-b94d-dd6d1dfcf52d/1200/1200/False/brave-new-world-12.jpg",
      description: "A dystopian novel set in a future society where people are genetically engineered and conditioned to be content with their assigned roles in life.",
      genres: ["Sci-Fi"],
    },
    {
      id: 10,
      title: "Frankenstein",
      imageUrl: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2017/10/2a34d8_7edc06080c344f958cde383a3fa6f3f1mv2.jpg?resize=564%2C946&ssl=1",
      description: "The story of Victor Frankenstein, a young scientist who creates a monster from dead body parts and is horrified by what he has done.",
      genres: ["Horror"],
    },
    {
      id: 11,
      title: "Dracula",
      imageUrl: "https://kbimages1-a.akamaihd.net/9541dc73-a03c-433d-9e2c-9fba5ff67ea5/1200/1200/False/dracula-173.jpg",
      description: "The story of Count Dracula, a vampire who seeks to spread his curse to others, and the group of people who band together to stop him.",
      genres: ["Horror"],
    },
    {
      id: 12,
      title: "The Shining",
      imageUrl: "https://assets.blogs.bsu.edu/wp-content/uploads/sites/25/2020/03/09153737/shining-683x1024.jpg",
      description: "The story of Jack Torrance, a struggling writer who takes a job as the winter caretaker of the isolated Overlook Hotel, and his descent into madness.",
      genres: ["Horror"],
    },
    {
      id: 13,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 14,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 15,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 16,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 17,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 18,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 19,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 20,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 21,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 22,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 23,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 24,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 25,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 26,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 27,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 28,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 29,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 30,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 31,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 32,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 33,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 34,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 35,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 36,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 37,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 38,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 39,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 40,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    {
      id: 41,
      title: "The Drover's Wife",
      imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
      description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
      genres: ["Historical", "Drama"],
    },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    
    // {
    //   id: ,
    //   title: "The Drover's Wife",
    //   imageUrl: "https://cdn2.penguin.com.au/covers/original/9781761041938.jpg",
    //   description: "A retelling of the classic Australian short story 'The Drover's Wife' by Henry Lawson, with a focus on the resilience and strength of Indigenous women",
    //   genres: ["Historical", "Drama"],
    // },
    

    
    // Add more book objects here
  ];

  const maxRows = 4;
  const maxColumns = 3;

  // Calculate the maximum number of cards based on the row and column limits
  const maxCards = maxRows * maxColumns;

  return (
    <>
      <div className="hero min-h-screen bg-[url(https://images7.alphacoders.com/895/895992.jpg)]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className={`hero-content grid grid-rows-${maxRows} grid-flow-col gap-4`}>
          {books.slice(0, maxCards).map((book) => (
            <div key={book.id} className={`card w-96 bg-base-100 shadow-xl`}>
              <figure>
                <img src={book.imageUrl} alt={book.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {book.title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{book.description}</p>
                <div className="card-actions justify-end">
                  {book.genres.map((genre) => (
                    <div key={genre} className="badge badge-outline">
                      {genre}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}