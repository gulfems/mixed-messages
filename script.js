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
        if(birthDay < 15){
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
    return "Dear "+ yourSign+" "+ dailyHoroscopeMessages[randomNum];
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
