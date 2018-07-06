// 1. Replace all the bad words, such as ugly, evil, shameless, obscene,
//   obese, greedy, replace it to the good adjective, we can use the word
// 'handsome' replace them.In addition, if the `hate him` appears in the
// sentence, we must replace `hate` to `praise`.
// 2. The sentence must be of sufficient length (50 characters, including
// spaces and punctuation), making it easier for people to see these changes.
// The first case: 
// If the sentence contains bad adjectives has been
// replaced for "handsome", and the sentence length less than 50
// characters, plus`very ` in front of `handsome`.Still not enough 50
// characters ? please plus more and more... Until length reached 50.
// The second case:
// If there is no bad words are replaced by handsome, the sentence length
// is less than 50, we must add the words of praise in the sentence:
// ` The handsome myjinxin, we praise him!!!!`
// 3. If the enemy is using all capitalized bad words to attack myjinxin,
//   so we have to use the same way to fight back, all replaced words `very`,
//     `handsome`, `praise` also be all capitalized too!

let badWords = ['ugly', 'evil', 'shameless', 'obscene', 'obese', 'greedy']
let praise = 'we praise him!!!!'

function isBadWord(word) {
  let count = 0
  if (badWords.includes(word)) {
    return word = 'handsome'
  }
  return word
}

function mustpraise(s) {
  //Praise makes people more handsome
  let sentenceArray = s.split(' ')
  let sentenceLength = s.split('').length
  sentenceArray = sentenceArray.map((word) => {
    return isBadWord(word)
  })
  console.log('sentenceArray (╯°□°)╯︵ ┻━┻ ', sentenceArray)
  if (sentenceLength < 50) {
    if sentenceArray
  }
  //console.log('sentenceArray (╯°□°)╯︵ ┻━┻ ', sentenceArray)
}

mustpraise("The evil myjinxin, eat our food, we hate him!")
//  "The handsome myjinxin, eat our food, we praise him!", "mission failed")

// mustpraise("The greedy myjinxin, stole my Lollipop, I hate him!")
//  "The handsome myjinxin, stole my Lollipop, I praise him!", "mission failed")

// mustpraise("myjinxin, stole my Lollipop.")
//  "myjinxin, stole my Lollipop. The handsome myjinxin, we praise him!!!!", "mission failed")

// mustpraise("The UGLY myjinxin, stole my Lollipop.")
//  "The VERY VERY HANDSOME myjinxin, stole my Lollipop.", "mission failed")