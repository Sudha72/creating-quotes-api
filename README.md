#Link
In SRC folder there is one example How can we use this api in angular ( Bonus => Basic RxJS and Angular Material )

https://testapi-qsha.onrender.com


#python program to upload lst into mongo db

from pymongo import MongoClient
import json

# Create a MongoClient instance
url="Atlas Url"
client = MongoClient(url)


db = client.api    //select database Name in my case db name is api


collection = db['quotes']  // select collection name in my case it is quotes

`
lst = [
    {
      "quote": "To be, or not to be: that is the question.",
      "author": "William Shakespeare",
      "category": "Existentialism"
    },
    {
      "quote": "All the world's a stage, and all the men and women merely players.",
      "author": "William Shakespeare",
      "category": "Philosophy"
    },
    {
      "quote": "To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man.",
      "author": "William Shakespeare",
      "category": "Self-Discovery"
    },
    {
      "quote": "The course of true love never did run smooth.",
      "author": "William Shakespeare",
      "category": "Love"
    },
    {
      "quote": "Love all, trust a few, do wrong to none.",
      "author": "William Shakespeare",
      "category": "Love"
    },
    {
      "quote": "Cowards die many times before their deaths; the valiant never taste of death but once.",
      "author": "William Shakespeare",
      "category": "Courage"
    },
    {
      "quote": "All that glitters is not gold.",
      "author": "William Shakespeare",
      "category": "Wisdom"
    },
    {
      "quote": "What's in a name? That which we call a rose by any other name would smell as sweet.",
      "author": "William Shakespeare",
      "category": "Philosophy"
    },
    {
      "quote": "We know what we are, but know not what we may be.",
      "author": "William Shakespeare",
      "category": "Self-Discovery"
    },
    {
      "quote": "The fault, dear Brutus, is not in our stars, but in ourselves, that we are underlings.",
      "author": "William Shakespeare",
      "category": "Philosophy"
    },
    {
      "quote": "Brevity is the soul of wit.",
      "author": "William Shakespeare",
      "category": "Humor"
    },
    {
      "quote": "This above all: to thine own self be true.",
      "author": "William Shakespeare",
      "category": "Self-Discovery"
    },
    {
      "quote": "All the perfumes of Arabia will not sweeten this little hand.",
      "author": "William Shakespeare",
      "category": "Drama"
    },
    {
      "quote": "To be wise and love, exceeds man's might.",
      "author": "William Shakespeare",
      "category": "Love"
    },
    {
      "quote": "To do a great right do a little wrong.",
      "author": "William Shakespeare",
      "category": "Ethics"
    },
    {
      "quote": "All's well that ends well.",
      "author": "William Shakespeare",
      "category": "Wisdom"
    },
    {
      "quote": "There is nothing either good or bad, but thinking makes it so.",
      "author": "William Shakespeare",
      "category": "Philosophy"
    },
    {
      "quote": "The miserable have no other medicine but only hope.",
      "author": "William Shakespeare",
      "category": "Hope"
    },
    {
      "quote": "Listen to many, speak to a few.",
      "author": "William Shakespeare",
      "category": "Communication"
    },
    {
      "quote": "There are more things in heaven and earth, Horatio, than are dreamt of in your philosophy.",
      "author": "William Shakespeare",
      "category": "Philosophy"
    },
    {
        "quote": "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
        "author": "Albert Einstein",
        "category": "Inspirational"
      },
      {
        "quote": "I have no special talent. I am only passionately curious.",
        "author": "Albert Einstein",
        "category": "Curiosity"
      },
      {
        "quote": "Try not to become a man of success, but rather try to become a man of value.",
        "author": "Albert Einstein",
        "category": "Success"
      },
      {
        "quote": "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
        "author": "Albert Einstein",
        "category": "Curiosity"
      },
      {
        "quote": "Reality is merely an illusion, albeit a very persistent one.",
        "author": "Albert Einstein",
        "category": "Philosophy"
      },
      {
        "quote": "Love is not just a feeling, it's an action that you must do every day.",
        "author": "Unknown",
        "category": "Love"
      },
      {
        "quote": "Love is composed of a single soul inhabiting two bodies.",
        "author": "Aristotle",
        "category": "Love"
      },
      {
        "quote": "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        "author": "Lao Tzu",
        "category": "Love"
      },
      {
        "quote": "To love and be loved is to feel the sun from both sides.",
        "author": "David Viscott",
        "category": "Love"
      },
      {
        "quote": "Love isn't something you find. Love is something that finds you.",
        "author": "Loretta Young",
        "category": "Love"
      },
      {
        "quote": "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
        "author": "Helen Keller",
        "category": "Love"
      },
      {
        "quote": "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
        "author": "Paulo Coelho",
        "category": "Love"
      },
      {
        "quote": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "author": "Dr. Seuss",
        "category": "Love"
      },
      {
        "quote": "I have decided to stick with love. Hate is too great a burden to bear.",
        "author": "Martin Luther King Jr.",
        "category": "Love"
      },
      {
        "quote": "Love is a force more formidable than any other. It is invisible—it cannot be seen or measured, yet it is powerful enough to transform you in a moment, and offer you more joy than any material possession could.",
        "author": "Barbara De Angelis",
        "category": "Love"
      },
      {
        "quote": "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.",
        "author": "Victor Hugo",
        "category": "Love"
      },
      {
        "quote": "When we are in love, we open ourselves to the world and become vulnerable, but that is also when we are most courageous.",
        "author": "Unknown",
        "category": "Love"
      },
      {
        "quote": "Love is not about how many days, months, or years you've been together. It's all about how much you love each other every day.",
        "author": "Unknown",
        "category": "Love"
      },
      {
        "quote": "We loved with a love that was more than love.",
        "author": "Edgar Allan Poe",
        "category": "Love"
      },
      {
        "quote": "Love is not a matter of counting the years... But making the years count.",
        "author": "Michelle St. Amand",
        "category": "Love"
      },
      {
        "quote": "Love is not what the mind thinks, but what the heart feels.",
        "author": "Greg Evans",
        "category": "Love"
      },
      {
        "quote": "Love is like the wind, you can't see it but you can feel it.",
        "author": "Nicholas Sparks",
        "category": "Love"
      },
      {
        "quote": "Hate is too great a burden to bear.",
        "author": "Martin Luther King Jr.",
        "category": "Hate"
      },
      {
        "quote": "Hate, it has caused a lot of problems in this world, but it has not solved one yet.",
        "author": "Maya Angelou",
        "category": "Hate"
      },
      {
        "quote": "I imagine one of the reasons people cling to their hates so stubbornly is because they sense, once hate is gone, they will be forced to deal with pain.",
        "author": "James Baldwin",
        "category": "Hate"
      },
      {
        "quote": "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
        "author": "Martin Luther King Jr.",
        "category": "Hate"
      },
      {
        "quote": "Hate, it has caused a lot of problems in the world, but has not solved one yet.",
        "author": "Maya Angelou",
        "category": "Hate"
      },
      {
        "quote": "I have decided to stick with love. Hate is too great a burden to bear.",
        "author": "Martin Luther King Jr.",
        "category": "Hate"
      },
      {
        "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison",
        "category": "wisdom",
      },
      {
        "quote": "You can observe a lot just by watching.",
        "author": "Yogi Berra",
        "category": "motivational",
      },
      {
        "quote": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln",
        "category": "Hate",
      },
      {
        "quote": "Difficulties increase the nearer we get to the goal.",
        "author": "Johann Wolfgang von Goethe",
        "category": "motivational",
      },
      {
        "quote": "Fate is in your hands and no one elses",
        "author": "Byron Pulsifer",
        "category": "success",
      },
      {
        "quote": "Be the chief but never the lord.",
        "author": "Lao Tzu",
        "category": "success",
      },
      {
        "quote": "Nothing happens unless first we dream.",
        "author": "Carl Sandburg",
        "category": "motivational",
      },
      {
        "quote": "Well begun is half done.",
        "author": "Aristotle",
        "category": "motivational",
      },
      {
        "quote": "Life is a learning experience, only if you learn.",
        "author": "Yogi Berra",
        "category": "motivational",
      },
      {
        "quote": "Self-complacency is fatal to progress.",
        "author": "Margaret Sangster",
        "category": "motivational",
      },
      {
        "quote": "Peace comes from within. Do not seek it without.",
        "author": "Buddha",
        "category": "success",
      },
      {
        "quote": "What you give is what you get.",
        "author": "Byron Pulsifer",
        "category": "motivational",
      },
      {
        "quote": "We can only learn to love by loving.",
        "author": "Iris Murdoch",
        "category": "love",
      },
      {
        "quote": "Life is change. Growth is optional. Choose wisely.",
        "author": "Karen Clark",
        "category": "success",
      },
      {
        "quote": "You'll see it when you believe it.",
        "author": "Wayne Dyer",
        "category": "motivational",
      },
      {
        "quote": "Today is the tomorrow we worried about yesterday.",
        "author": "Sudha Mala",
        "category": "success",
      },
      {
        "quote": "It's easier to see the mistakes on someone else's paper.",
        "author": "Suhda Maurya",
        "category": "success",
      },
      {
        "quote": "Every man dies. Not every man really lives.",
        "author": "Sudha",
        "category": "Love",
      },
      {
        "quote": "To lead people walk behind them.",
        "author": "Lao Tzu",
        "category": "Sucess",
      },
      {
        "quote": "Having nothing, nothing can he lose.",
        "author": "William Shakespeare",
        "category": "Sucess",
      },
      {
        "quote": "Trouble is only opportunity in work clothes.",
        "author": "Henry J. Kaiser",
        "category": "motivational",
      },
      {
        "quote": "A rolling stone gathers no moss.",
        "author": "Publilius Syrus",
        "category": "Philospy",
      },
     
  ]`

result = collection.insert_many(lst)
print(result.inserted_ids)
