import express from "express";

const app = express();

app.use(express.static("dist"))

// app.get("/", (req, res) => {
//     res.send("Server is ready");
// });

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Lettuce Joke",
            "content": "Lettuce turn over a new leaf!"
        },
        {
            "id": 2,
            "title": "Math Joke",
            "content": "Parallel lines have so much in common—it’s a shame they’ll never meet!"
        },
        {
            "id": 3,
            "title": "Computer Joke",
            "content": "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
            "id": 4,
            "title": "Coffee Joke",
            "content": "I like my coffee like I like my mornings: dark and bitter."
        },
        {
            "id": 5,
            "title": "Fish Joke",
            "content": "What do you call a fish wearing a bowtie? Sofishticated!"
        }
    ];

    res.send(jokes);

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})