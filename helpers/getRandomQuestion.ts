type QuestionTypes = 'topic'

const questions: Record<QuestionTypes, string[]> = {
  topic: [
    "Would you rather be a hobbit or an elf for 24 hours?",
    "What is the last “good” thing you ate?",
    "Would you rather it snow or rain for a year?",
    "What do you say during awkward silence?",
    "Do you have any strange or unique phobias?",
    "Are people better at creating things or destroying them?",
    "Where is the worst place you could get stuck in?",
    "What do you wish there was more of in the world?",
    "What sound do you hate hearing?",
    "What is your favorite transportation method, and why?",
    "Do you believe in Murphy's law?",
    "What is your favorite thing to do in your spare time?",
    "What is your favorite thing about Discord?",
    "Who's your favorite content creator?",
    "How much time do you spend on Discord every day?",
    "What is your least favorite thing about the internet?",
    "If you were invited to attend Hogwarts, which Hogwarts house would you choose?",
  ],
}

export const getRandomQuestion = (type: keyof typeof questions) => {
  if (!type || !questions[type])
    return `{ERROR: NO QUESTIONS FOUND FOR THIS TYPE, ${String(type)}}`
  const questionsOfType = questions[type]
  const randomIndex = Math.floor(Math.random() * questionsOfType.length)
  return questionsOfType[randomIndex]
}
