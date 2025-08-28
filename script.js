/* The sunsings and their dates, their elements are in this object in object structure */

const signs = {

aries: {
    name: "aries",
    birthDateStartDay: 21,
    birthDateEndDay: 19,
    birthDateMonthStart: 3,
    birthDateMonthEnd: 4,
    element: "fire",
},
taurus: {
    name: "taurus",
    birthDateStartDay: 20,
    birthDateEndDay: 20,
    birthDateMonthStart: 4,
    birthDateMonthEnd: 5,
    element: "earth",
},
addNewSign(nameOfSign,birthDayStart,birthDayEnd,birthMonthStart,birthMonthEnd,elementOfSign){

       this[nameOfSign] = { name: nameOfSign,
        birthDateStartDay: birthDayStart,
        birthDateEndDay: birthDayEnd,
        birthDateMonthStart: birthMonthStart,
        birthDateMonthEnd: birthMonthEnd,
        element: elementOfSign,
       };
    }
};

signs.addNewSign("gemini",21,20,5,6,"air");
signs.addNewSign("cancer",21,22,6,7,"water");
signs.addNewSign("leo",23,22,7,8,"fire");
signs.addNewSign("virgo",23,22,8,9,"earth");
signs.addNewSign("libra",23,22,9,10,"air");
signs.addNewSign("scorpio",23,21,10,11,"water");
signs.addNewSign("sagittarius",22,21,11,12,"fire");
signs.addNewSign("capricorn",22,19,12,1,"earth");
signs.addNewSign("aquarius",20,18,1,2,"air");
signs.addNewSign("pisces",19,20,2,3,"water");
console.log(signs);
/* I added all sun signs with their characteristics.*/

/* Function signFinder lets you find your zodiac sign */

signFinder = (birthDay,birthMonth) => {
    if(birthMonth == 1){
        if(birthDay < 19){
            return "Capricorn";
        } else{
            return "Aquarius";
        }
    } else if(birthMonth == 2){
        if(birthDay < 19){
            return "Aquarius";
        } else {
            return "Pisces";
        }
    } else if(birthMonth == 3){
        if(birthDay < 21){
            return "Pisces";
        } else {
            return "Aries";
        }
    } else if(birthMonth == 4){
        if(birthDay < 19){
            return "Aries";
        } else {
            return "Taurus";
        }
    } else if(birthMonth == 5){
        if(birthDay < 20){
            return "Taurus";
        } else {
            return "Gemini";
        }
    } else if(birthMonth == 6){
        if(birthDay < 21){
            return "Gemini";
        } else {
            return "Cancer";
        }
    } else if(birthMonth == 7){
        if(birthDay < 23){
            return "Cancer";
        } else {
            return "Leo";
        }
    } else if(birthMonth == 8){
        if(birthDay < 23){
            return "Leo";
        } else {
            return "Virgo";
        }
    } else if(birthMonth == 9){
        if(birthDay < 23){
            return "Virgo";
        } else {
            return "Libra";
        }
    } else if(birthMonth == 10){
        if(birthDay < 22){
            return "Libra";
        } else {
            return "Scorpio";
        }
    } else if(birthMonth == 11){
        if(birthDay < 21){
            return "Scorpio";
        } else {
            return "Sagittarius";
        }
    } else if(birthMonth == 12){
        if(birthDay < 21){
            return "Sagittarius";
        } else {
            return "Capricorn";
        }
    }
};

const signNames = ["aries","taurus","gemini","cancer","leo","virgo","libra","scorpio","sagittarius","capricorn","aquarius","pisces"];
/* may be this could be useful later */
const dailyHoroscopeMessages = [
  "Today is a great day to ignore responsibilities. They’ll figure it out.",
  "Someone will give you advice today. Smile, nod, then do the opposite.",
  "You’re full of ideas today… mostly terrible ones, but enthusiasm counts.",
  "Expect a minor disaster. Or major. The universe doesn’t specify.",
  "Your confidence is admirable… but also completely unjustified.",
  "Procrastination is your superpower. Today, embrace it fully.",
  "You’ll meet someone today… probably annoying. Enjoy.",
  "Your luck is unpredictable today. Spoiler: it leans toward chaos.",
  "Avoid drama today. Or don’t. Honestly, it’s not your job to fix the world.",
  "Someone will misunderstand you. Pretend it was intentional—it’s more fun that way.",
  "Today, be bold. Or don’t. Life barely notices.",
  "Your social skills are top-notch… if judged by houseplants and pets.",
  "You might feel productive today. That’s adorable. Keep believing it.",
  "Someone will annoy you. You’ll react dramatically. It’s going to be fun.",
  "Your intuition is strong today… probably wrong, but strong.",
  "Avoid shopping today unless you like regret in a pretty package.",
  "Take a break from overthinking. Or don’t. The universe is indifferent.",
  "Expect compliments today… probably sarcastic, but take them anyway.",
  "Someone will try to teach you a lesson today. Ignore them expertly.",
  "Your energy levels are… fluctuating. Just go with it.",
  "You’ll accomplish something today… eventually. Maybe tomorrow.",
  "Trust your gut. It probably hates you, but hey, go for it.",
  "You’re likely to overreact today. Make it dramatic for extra points.",
  "Avoid unnecessary risks… unless boredom counts as a risk.",
  "Someone will gossip about you. Smile, you’re trending.",
  "Your brain is working overtime… mostly on nonsense.",
  "Expect minor chaos today. Or major. Life is never specific.",
  "Today is perfect for pretending you know what you’re doing.",
  "Someone will annoy you. You’ll annoy them back. Balance restored.",
  "Your sense of timing is impeccable… when it doesn’t matter.",
  "You’ll have a brilliant idea today… that you’ll forget immediately.",
  "Avoid making promises today. You won’t keep them anyway.",
  "Someone will misunderstand you. Laugh. Confuse them further.",
  "Your patience is heroic… until it isn’t. Watch for the breaking point.",
  "Expect the unexpected. Or the expected. Honestly, same thing.",
  "Someone will overreact. You’ll underreact. Perfect harmony.",
  "You might feel ambitious today… then nap instead. Smart choice.",
  "Avoid people with opinions today. Or embrace them. Either way, chaos ensues.",
  "Your charm is undeniable… mostly to people who can’t see clearly.",
  "Something mysterious will happen today. Probably involving coffee.",
  "You’ll make progress… in ways nobody will notice.",
  "Someone will criticize you today. Take notes. Or ignore. Both work.",
  "Your creativity is boundless… like a toddler with scissors.",
  "Today, embrace your inner chaos. It suits you.",
  "Someone will call you dramatic. Agree loudly.",
  "You might feel productive. Or sleepy. Both are valid.",
  "Expect a plot twist today… in the form of spilled tea or emails.",
  "Your intuition is loud… mostly yelling nonsense.",
  "Someone will test your patience. Fail spectacularly or pass mildly.",
  "You’re in control today… of nothing. Enjoy the illusion.",
  "Avoid making decisions today. Or make them. Life won’t care.",
  "Someone will annoy you. You’ll annoy yourself. Fun day ahead.",
  "Your motivation is inspiring… to anyone who doesn’t know you.",
  "Today is perfect for tiny rebellions… or big, unnecessary ones.",
  "Expect minor miracles… mostly involving spilled coffee or forgotten emails."
];



randomDailyMessage = (yourSign) => {
    let randomNum = Math.floor(Math.random()*dailyHoroscopeMessages.length);
    return "Dear "+ yourSign+",w "+ dailyHoroscopeMessages[randomNum].toLowerCase();
};

getDailyHoroscope = (birthDay, birthMonth) => {
    let sunSign = signFinder(birthDay,birthMonth);
    return randomDailyMessage(sunSign);
};

const lifeSuggestions = [
  "Aries: Okay, we get it—you’re a fire sign and everything’s a competition. But chill for a second. Don’t try to fight physics or AI today, okay? People are jealous of you anyway, and somehow you’re still helping them even when they don’t deserve it. Legendary, really.",

  "Taurus: Stop sleeping all day and do literally anything. Your beauty and money won’t move the world, so how about actually getting out of bed? Walking to the fridge doesn’t count… unless you feel ambitious.",

  "Gemini: Hey genius, if you really want to make a difference today, maybe try shutting up for five minutes. And that hobby of yours? Yeah… the one that’s been going on forever without producing anything. Maybe give it a break?",

  "Cancer: Maybe cry a little less, okay? Finish your masterclass in manipulating people, and then—just maybe—you can try having some fun today. If not, your drama will entertain everyone anyway, so no pressure.",

  "Leo: Newsflash: nobody actually cares what you’re doing. Stop pretending you’re all that. Have a real conversation with the mirror before putting on your sassy, ‘look at me’ act for the world. The mirror deserves honesty too.",

  "Virgo: New day, new chance… to stop obsessing over yourself and criticizing literally everyone. Here’s a tip: every time you want to criticize someone, put a coin in a jar. In three months, you’ll either be rich or distracted enough to stop being annoying. Win-win.",

  "Scorpio: Weren’t witches supposed to get burned or something? If you’ve got free time between your schemes and mysterious vibes, maybe socialize a little. Or design a detective game. At least then your intensity serves some purpose besides terrifying people.",

  "Libra: Yes, yes, we know you’re beautiful. No need for 1,000 Instagram selfies a day. Also, just because you’re an air sign doesn’t mean you can’t use your brain sometimes. Try it—it’s underrated.",

  "Capricorn: Stop waiting for love like it’s going to fall from the sky. You’re mostly in love with yourself anyway, in a complicated love-hate thing. Achievements won’t fix it, but friends, fun, and actually existing around people might. Shocking, I know.",

  "Aquarius: Yep, you’re the weird one, we get it. Sometimes a good TV series is just a good TV series, and no, you’re not always the smartest person in the room. Try cooking or doing laundry instead of communicating with aliens—it helps more than you think.",

  "Pisces: Hello? Earth calling. No, you’re not specially protected or a higher soul. You’re the manipulator, not the victim. Try actually making something—paint, write, create—anything besides praying to invisible forces. Shocking concept, I know.",

  "Sagittarius: You are not always right, and no, you have no idea what you’re talking about sometimes. Try being flexible—not just in yoga class, but when it comes to, you know, actual thoughts and ideas. Talking about yourself all the time does not magically make you correct, shocker."

];

lifeSuggestionsFunc = (birthDay,birthMonth) => {
    let sunSign = signFinder(birthDay, birthMonth);
    if(sunSign == "Aries"){
        return lifeSuggestions[0];
    }else if(sunSign == "Taurus"){
        return lifeSuggestions[1];
    }else if(sunSign == "Gemini"){
        return lifeSuggestions[2];
    }else if(sunSign =="Cancer"){
        return lifeSuggestions[3];
    }else if(sunSign =="Leo"){
        return lifeSuggestions[4];
    }else if(sunSign=="Virgo"){
        return lifeSuggestions[5];
    }else if(sunSign =="Scorpio"){
        return lifeSuggestions[6];
    }else if(sunSign=="Libra"){
        return lifeSuggestions[7];
    }else if(sunSign=="Capricorn"){
        return lifeSuggestions[8];
    }else if(sunSign=="Aquarius"){
        return lifeSuggestions[9];
    }else if(sunSign=="Pisces"){
        return lifeSuggestions[10];
    }else if(sunSign=="Sagittarius"){
        return lifeSuggestions[11];
    }
};

/*From now on it is going to be all about the browser */
/*From now on it is going to be all about the browser */
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const dayInput2 = document.getElementById("day1");
const monthInput2 = document.getElementById("month1");

document.getElementById("getHoroscope").addEventListener("click", () => {
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);

    const horoscope = getDailyHoroscope(day, month);

    document.getElementById("horoscopeOutput").innerText = horoscope;
});

document.getElementById("getSuggestion").addEventListener("click", () => {
    const day = parseInt(dayInput2.value);
    const month = parseInt(monthInput2.value);

    const suggestion = lifeSuggestionsFunc(day, month);

    document.getElementById("suggestionOutput").innerText = suggestion;
});
/*For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far to build the program and customize it to your liking.

Project Objectives:
Build a message generator program using JavaScript
Use Git version control
Use command line
Develop locally on your computer
Prerequisites:
JavaScript
Git and GitHub
Command line

Project Tasks
Keep track of your progress by dragging each task from "To Do" to "In Progress" to "Done" as you work on them. You can also click on a task to see more information about it.
To Do
In Progress
Done
8 / 8 done
Plan your project
Visualize your end result. What is it built with? What can it do? Make sure that it satisfies all of the project objectives.

Make a timeline for yourself and avoid the temptation to build things that aren’t required. Setting firm boundaries and deadlines will keep you on track and prevent scope creep.

The following tasks will help you identify natural break points.

Set up version control
Set up Git tracking in your directory and add and commit changes as you make them.

Next Steps
You’re welcome to expand your program beyond these project tasks and get creative!

Come Up with a Topic
Decide on what types of messages you want your program to output.

Create script and run it locally
On your computer, create a JavaScript file to write your code in. Make sure you are able to run your script locally in Node.

Store message components
Decide how to store all of the message components for your game.

Put the program together
Combine the different parts of your program so the random messages are selected, combined, and then displayed to the user each time they run the program.

Create the message
Add functionality to randomly select the different message components so they can create a cohesive message.

*/
/*Basic sentence structure in English: S V O. Subject Verb Object.*/
const subjects = [
  "You",
  "Your best friend who never listens",
  "Someone unexpected",
  "Your partner (yes, that one)",
  "A colleague who thinks they're smarter",
  "A family member who overshares",
  "Your neighbor who waters plants at midnight",
  "An old classmate you barely remember",
  "That person who texts only when they need something",
  "Your barista who knows too much",
  "A stranger on the train",
  "Your pet silently judging you",
  "A distant relative with bad advice",
  "The friend who always cancels plans",
  "Your boss pretending to care",
  "Your ex (sorry)",
  "The person ghosting you",
  "Someone who owes you money",
  "Your landlord (yikes)",
  "A random acquaintance from Instagram",
  "Your gym buddy skipping leg day",
  "The neighbor with loud music",
  "Your inner critic",
  "Someone you low-key stalk online",
  "Your sibling stealing your stuff",
  "That friend who never pays the bill",
  "Your old crush",
  "The one who left you on read",
  "Your future self rolling eyes",
  "Someone dramatic for no reason",
  "Your partner’s annoying friend",
  "A colleague oversharing lunch stories",
  "Your boss’s boss",
  "That influencer you hate-follow",
  "The cashier who sees your snacks",
  "Someone who mispronounces your name",
  "Your horoscope app rival",
  "The delivery guy who’s always late",
  "Your secret admirer (lol, sure)",
  "Your past decisions haunting you",
  "That random ex-coworker",
  "Your reflection in the mirror",
  "Your therapist silently judging",
  "The person taking your parking spot",
  "Someone you’ll regret texting",
  "Your inner child",
  "Your outer chaos",
  "A mysterious stranger",
  "The universe (rolling dice)"
];

const verbs = [
  "will discover",
  "might struggle with",
  "will attract (but not in a good way)",
  "will let go of, finally",
  "is going to transform into a bigger mess",
  "will be tested by cosmic nonsense",
  "will misinterpret a sign",
  "is about to overshare again",
  "will regret everything by Monday",
  "will ghost you then come back",
  "is doomed to repeat mistakes",
  "will trip over their own ego",
  "will stalk your socials",
  "might send the wrong text",
  "will spend too much on coffee",
  "is going to believe fake news",
  "will binge reality TV instead of growing",
  "will oversleep and call it destiny",
  "will ignore good advice (again)",
  "is about to make it awkward",
  "will eat their feelings",
  "is going to shop impulsively",
  "will cry over memes",
  "might join a cult (joking, maybe)",
  "will doomscroll at 3am",
  "will get bad haircut energy",
  "is destined to be late",
  "will forget passwords forever",
  "is going to overspend",
  "will start a pointless argument",
  "might quit and regret it",
  "will manifest chaos",
  "is going to believe a horoscope too literally",
  "will fight with Wi-Fi",
  "will forget birthdays",
  "is destined to burn toast",
  "will binge on snacks and regret nothing",
  "will text their ex at 2am",
  "is about to make poor choices",
  "will google symptoms again",
  "might overshare on Twitter",
  "will rage at slow walkers",
  "is doomed to buy unnecessary candles",
  "will run out of excuses",
  "is going to cry in the shower",
  "might laugh at the wrong time",
  "will lose AirPods again",
  "is destined to forget names",
  "will scroll TikTok instead of working",
  "might fight with customer service"
];

const objects = [
  "a hidden truth nobody asked for",
  "new opportunities in love triangles",
  "financial challenges (thanks, inflation)",
  "unexpected emotions during commercials",
  "a secret desire for snacks",
  "a sudden change in career (aka unemployment)",
  "fake enlightenment quotes",
  "endless small talk at work",
  "that unpaid bill haunting you",
  "a text from the wrong person",
  "awkward silence in meetings",
  "jealousy disguised as compliments",
  "overpriced astrology merch",
  "another pointless Zoom call",
  "a horoscope more accurate than therapy",
  "your playlist exposing you",
  "Netflix guilt",
  "unhealthy attachment to iced coffee",
  "a craving for chaos",
  "unread emails multiplying",
  "that suspicious Instagram DM",
  "awkward family dinners",
  "unexpected responsibilities (ew)",
  "too much caffeine",
  "badly timed tears",
  "romantic disappointment",
  "yet another fake apology",
  "unexpected bills",
  "drama you didn’t sign up for",
  "chaos in your group chat",
  "overthinking old texts",
  "impulse buys haunting your account",
  "meme-induced existential crisis",
  "late-night confessions",
  "career goals turning into side quests",
  "the endless search for Wi-Fi",
  "regrettable fashion choices",
  "overdue deadlines",
  "emotional baggage disguised as wisdom",
  "awkward hugs",
  "chaotic kitchen experiments",
  "a thirst trap gone wrong",
  "that one embarrassing memory",
  "sleep deprivation",
  "pointless arguments online",
  "anxiety over nothing",
  "your own dramatic monologue",
  "cosmic shade from the stars",
  "fake friends exposure",
  "your horoscope mocking you"
];

const cosmicInfluences = [
  "under the new moon that nobody cares about",
  "during Mercury retrograde (of course)",
  "as Saturn pretends to align",
  "with the power of the full moon ruining your sleep",
  "while Venus is too busy being dramatic",
  "thanks to Mars throwing tantrums",
  "when Jupiter just vibes",
  "as Neptune gaslights reality",
  "because Pluto wants attention",
  "when Uranus causes chaos",
  "while the stars laugh at you",
  "as the universe shrugs",
  "during cosmic Wi-Fi outage",
  "with planets in retrograde, shocker",
  "as astrology influencers profit",
  "when the sky just feels petty",
  "during celestial nonsense hour",
  "while the cosmos side-eyes you",
  "because destiny ran out of coffee",
  "as your rising sign stirs drama",
  "while retrogrades ruin your mood",
  "under fake cosmic pressure",
  "with full moon making people weird",
  "when constellations gossip",
  "as horoscopes make fun of you",
  "while the stars roll dice",
  "during peak cosmic absurdity",
  "as your chart drags you",
  "under fake spiritual vibes",
  "when Saturn plays gatekeeper",
  "while Mercury ruins Wi-Fi",
  "as Venus makes it messy",
  "during cosmic boredom",
  "when fate is on coffee break",
  "as destiny forgets your name",
  "while the moon causes drama",
  "with Jupiter being extra",
  "when Pluto overcompensates",
  "as stars act shady",
  "under chaotic cosmic gossip",
  "when Uranus is bored",
  "as Mars screams again",
  "during pointless alignments",
  "while horoscopes exaggerate",
  "because the sky ran out of ideas",
  "with zero celestial logic",
  "under cosmic peer pressure",
  "while your chart roasts you",
  "during star-sign chaos",
  "when astrology is trolling you"
];

const closings = [
  "Trust the process (lol).",
  "The stars are guiding you... badly.",
  "Be open to change, or don’t.",
  "Patience will bring clarity, maybe.",
  "Embrace the unknown, it’s cheaper than therapy.",
  "Nothing matters, but sure, light a candle.",
  "Your aura is tired of you.",
  "Smile, it confuses everyone.",
  "Blame Mercury, it’s trendy.",
  "Manifest snacks instead.",
  "Good vibes expired yesterday.",
  "The universe left you on read.",
  "Try journaling, or just nap.",
  "Your chakras are gossiping.",
  "Fake it till you make it (or don’t).",
  "This was sponsored by chaos.",
  "The cosmos is messy, just like you.",
  "Drink water, cry later.",
  "Your spirit guide muted notifications.",
  "Astrology can’t fix your Wi-Fi.",
  "Try meditation, fail, repeat.",
  "Stars say 'lol good luck'.",
  "Your moon sign is judging.",
  "Let destiny ghost you.",
  "Candle sales are up thanks to you.",
  "The energy is chaotic neutral.",
  "Don’t trust horoscopes, except this one.",
  "Your birth chart roasted you.",
  "It’s not karma, you’re just clumsy.",
  "Text your ex... just kidding.",
  "Mercury says sorry (not really).",
  "The vibes are unpaid interns.",
  "Stars are trolling you on purpose.",
  "Don’t wait for signs, order pizza.",
  "Manifest stability, receive chaos.",
  "Your rising sign called you out.",
  "No crystals can save this week.",
  "Horoscope accuracy: 1%.",
  "Astrology is a scam and so are you.",
  "Cry, then blame the moon.",
  "Don’t worry, nobody else knows what’s going on.",
  "The stars recommend therapy.",
  "It’s giving ‘main character energy’, badly.",
  "Your destiny is buffering.",
  "Retrogrades are excuses, use them.",
  "Self-care is muting group chats.",
  "The universe is passive aggressive.",
  "Your aura unsubscribed.",
  "Horoscopes can’t stop your bad decisions.",
  "The cosmos laughed and logged off."
];





specialFortuneTelling = () => {
    let randomNumber = Math.floor(Math.random()*50);
    let randomNumberTwo = Math.floor(Math.random()*50);
    let randomNumberThree = Math.floor(Math.random()*50);
    let randomNumberFour = Math.floor(Math.random()*50);
    let randomNumberFive = Math.floor(Math.random()*50);

    let theFortune = cosmicInfluences[randomNumber] + " "+ subjects[randomNumberTwo] + " "+ verbs[randomNumberThree] +" " + objects[randomNumberFour]+" " + closings[randomNumberFive];

    theFortune = theFortune.toLowerCase();
    return theFortune.charAt(0).toUpperCase() + theFortune.slice(1);
};

console.log(specialFortuneTelling());


/* The further things are gonna be about the browser. */

document.getElementById("getReading").addEventListener("click", () => {

    const reading = specialFortuneTelling();

    document.getElementById("readingOutput").innerText = reading;
});
