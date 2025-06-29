import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home({ fortune }) {
  return (
    <div className="container">
      <Head>
        <title>Fortune Cookie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '80vh',
        padding: '2rem'
      }}>
        <Header title="Your Fortune Cookie" />
        <div id="fortune" style={{
          fontSize: '2em',
          textAlign: 'center',
          padding: '20px',
          border: '1px solid #ccc',
          background: '#fff',
          marginTop: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          {fortune}
        </div>
      </main>

      <Footer />
    </div>
  )
}

// Runs on every request, picking a random fortune
export async function getServerSideProps() {
  const fortunes = [
    "A new adventure is coming your way.",
    "Trust your instincts today.",
    "You'll make someone smile soon.",
    "Opportunity knocks lightly—be ready!",
    "A pleasant surprise is in store.",
    "Even a broken clock is right twice a day, but it still won’t get your work done",
"Your inner genius is currently on a coffee break",
"Procrastination: because great ideas need a dramatic entrance",
"Smile—it confuses the cynics",
"Wisdom is knowing you’re not wise, but hey, at least you know that",
"If opportunity knocks, consider it a polite suggestion",
"The early bird catches the worm, but the second mouse avoids the trap",
"Be yourself; everyone else is taken and often overrated",
"Your past mistakes called—they want royalties",
"A journey of a thousand miles starts with changing out of pajamas",
"Good things come to those who wait… but only if they also work",
"Listen twice as much as you speak, and maybe reverse that if bored",
"Your sarcasm is a gift—unwrap it carefully",
"Even the tallest oak started as an annoying acorn",
"A clear mind is like Wi-Fi: useless unless connected",
"Patience is a virtue; lack of it makes life interesting",
"You don’t need a fortune to know you’re rich in good intentions",
"Coffee: because adulting is hard",
"A closed mouth gathers no feet, but no gossip either",
"Your future self could use a thank-you note today",
"The grass is greener where you water it—weed responsibly",
"Mistakes are chapters in your encyclopedia of experience",
"Be kind: karma has a long memory and a sharp tongue",
"Why fit in when you were born to stand out… or at least lean in",
"Smart decisions often begin with ‘What could go wrong?’",
"If life gives you lemons, add tequila and salts",
"You’ll achieve greatness after you finish reading this",
"Worrying is like a rocking chair—it gives you something to do but goes nowhere",
"Your best teacher is failure; pay attention in class",
"Dreams without action are just Netflix marathons",
"A calm mind defuses even the loudest inner critic",
"If you stumble, make it part of the dance",
"Greatness often hides behind a messy workspace",
"Courage is fear with a blindfold; wear it wisely",
"Your oddball ideas make the world less boring",
"Seriousness is overrated; try whimsical occasionally",
"A goal without a plan is a wish with high rent",
"Success requires ambition and a backup nap",
"Knowledge speaks; wisdom listens and sometimes smirks",
"Stop waiting for permission to be awesome",
"Your comfort zone is nice, but nothing grows there",
"Sarcasm: because hitting people is frowned upon",
"A witty comeback is like a silent applause",
"Kindness is free—sprinkle that stuff around",
"Your life is your canvas; stop doodling",
"Every expert was once a beginner with good timing",
"If you want to be irreplaceable, start acting like a real human",
"Confidence is silent; insecurities are loud",
"Your future starts now—no refunds permitted",
"Opportunities are often disguised as hard work; put on a costume",
"Success is 10% inspiration and 90% figuring out how the coffee machine works",
"In the end, we only regret the chances we didn’t sarcastically decline",
"Fortune cookies are like life: unpredictable but delicious",
"Be the legend you pretend to be",
"Overthinking is like a rocking chair—lots of movement, no progress",
"Say ‘yes’ to new adventures and ‘no’ to lame excuses",
"Your smile is your logo; wear it everywhere",
"Patience: waiting until the pizza arrives without dialing back",
"Stress spelled backwards is desserts—think on that",
"Your inner critic needs a time-out",
"Every problem has a solution; often found under couch cushions",
"Think outside the box, then invite others over",
"Life’s short; eat the dessert first and laugh after",
"Sarcasm is your brain’s way of saying it needs coffee",
"You can’t pour from an empty cup—drink up",
"Dream big, nap often",
"Good things happen to those who hustle—and caffeinate",
"The wise plant trees under whose shade they will never sit",
"Worrying doesn’t empty tomorrow of troubles, it empties today of fun",
"Comparison kills joy and inflates egos; avoid both",
"Less perfection, more authenticity",
"Your time is limited; stop spending it doubting",
"Sarcasm: the brain’s natural defense against foolishness",
"Your attitude is contagious; pass on the good ones",
"Confidence is not walking into a room thinking you’re better; it’s not having to compare",
"Mistakes are proof that you’re learning; keep the receipt",
"Your legacy is built on small deeds and big laughs",
"Make your life a story worth telling",
"Sarcastic comments sold separately; handle with care",
"True strength is holding your coffee in one hand and dreams in the other",
"You’re here to do more than just blend in",
"Simplicity is the ultimate sophistication… with a dash of humor",
"Fear is temporary; regret is forever",
"A witty remark a day keeps dull moments away",
"Patience is bitter but its fruit is hilarious",
"Change your thoughts and you change the punchline",
"The most wasted of days is one without laughter",
"Your wisdom begins where your ego ends",
"Sarcasm is the lowest form of wit, but the highest form of relief",
"You miss 100% of the naps you don't take",
"Life rewards the bold and the slightly insane",
"Be the kind of person your dog thinks you are",
"Inhale confidence; exhale doubt",
"Dreams don’t work unless you do—or at least pretend to",
"If plan A fails, remember there are 25 more letters",
"Wise men learn more from fools than fools from the wise",
"You are your only limit—apply sarcasm liberally",
"A wise person knows nothing, but at least they admit it",
"Your best resources are time and sense of humor",
"Fortune favors the prepared (and slightly hilarious)",
"Wisdom is knowing when to log off",
"Don't let perfect be the enemy of done… unless perfectionism pays rent",
"Your grin is a free advertisement for joy",
"Sarcasm: the secret ingredient in witty conversations",
"A grateful heart has a clear mind and a sharper wit",
"You don’t find happiness; you create sarcasm",
"Success is stumbling from failure to failure with great commentary",
"Be the rainbow in someone’s sarcastic storm",
"Wise people talk because they have something to say; fools, because they have to comment",
"Your next breakthrough is behind a door labeled ‘Do Not Knock’",
"Embrace the glorious mess that you are—and add glitter",
"Sarcasm is the duct tape of conversation—use sparingly",
"Don’t count the days; make the days count—and funny",
"Wisdom often comes disguised as bad coffee",
"If at first you don’t succeed, skydiving is not for you—try coffee",
"Your life’s recipe: a pinch of wisdom, a dash of humor, and sarcasm to taste",
"Sometimes you win, sometimes you learn, sometimes you laugh",
"Your potential is endless—especially after caffeine",
"Live your truth, but add a twist of sarcasm",
"Bravery is jumping into the unknown with a punchline ready",
"A wise person’s words may be few, but their punchlines land",
"Don’t just chase your dreams—jog with great playlists",
"The secret to joy? Not taking yourself too seriously",
"Sarcasm: lifesaver in social interactions since forever",
"Your inner child called; they want more snacks",
"Wisdom is the reward for surviving your own mistakes",
"Life’s too short for bad coffee and boring people",
"A dash of humor makes the medicine of life go down",
"Never let your fears decide your future—or your punchlines",
"Your journey is unique; don’t compare highlight reels",
"Sarcasm adds flavor when sincerity is too bland",
"Aim for stars but pack snacks for detours",
"Wise people learn from everything; silly ones tell stories",
"Your best idea may come while dancing like nobody’s watching",
"Laughter is timeless; wisdom is ageless",
"Sarcasm: because punching faces is frowned upon",
"Trust your gut, but bring snacks",
"Wisdom speaks softly while sarcasm shouts",
"Don’t just make a living; make a life worth an epic tale",
"A sense of humor is a survival kit for adulthood",
"Wise souls know when to speak and when to roast",
"Your day becomes legendary with the right wrinkle in your brow",
"Sarcasm: the spice of dull conversations",
"Be wise enough to laugh at yourself first",
"Life’s plot twists require improv skills",
"Your smile is proof you survived another meeting",
"Wisdom is knowing you’re a work in progress, not a finished product",
"Let your funny bone guide your wise choices",
"Sarcasm is the safety valve for crazy times",
"In the book of life, make your chapter a bestseller",

    // ← add more fortunes here
  ];

  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[randomIndex];

  return {
    props: { fortune }
  };
}
