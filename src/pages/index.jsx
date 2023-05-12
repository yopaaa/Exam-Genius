import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

function Home() {
  const [questions, setQuestions] = useState()
  const [selected, setSelected] = useState()

  const [questionsNo, setQuestionsNo] = useState(0)

  const data = [
    {
      questionMaterial: 'Computer Software',
      question: 'What is an operating system?',
      options: [
        { option: 'a', text: 'A type of computer virus' },
        { option: 'b', text: 'A program that manages computer hardware resources' },
        { option: 'c', text: 'A type of computer game' },
        { option: 'd', text: 'A device used to input data into a computer' }
      ]
    },
    {
      questionMaterial: 'Computer Networking',
      question: 'What is the function of a router?',
      options: [
        { option: 'a', text: 'To connect multiple computers together' },
        { option: 'b', text: 'To display websites on the internet' },
        { option: 'c', text: 'To store data on a network' },
        { option: 'd', text: 'To route data packets between networks' }
      ]
    },
    {
      questionMaterial: 'Computer Security',
      question: 'What is a firewall?',
      options: [
        { option: 'a', text: 'A physical barrier that protects a computer from physical damage' },
        { option: 'b', text: 'A program that prevents unauthorized access to a computer or network' },
        { option: 'c', text: 'A device used to create backups of computer data' },
        { option: 'd', text: 'A type of computer virus' }
      ]
    },
    {
      questionMaterial: 'Computer Programming',
      question: 'What is a variable?',
      options: [
        { option: 'a', text: 'A function that performs a specific task' },
        { option: 'b', text: 'A container that stores a value' },
        { option: 'c', text: 'A type of computer virus' },
        { option: 'd', text: 'A device used to input data into a computer' }
      ]
    },
    {
      questionMaterial: 'Computer Hardware',
      question: 'What is RAM?',
      options: [
        { option: 'a', text: 'A type of storage device used to store data permanently' },
        { option: 'b', text: 'A type of input device used to scan images' },
        { option: 'c', text: 'A type of output device used to display images on a screen' },
        { option: 'd', text: 'A type of memory used by the CPU to temporarily store data and instructions' }
      ]
    },
    {
      questionMaterial: 'Computer Software',
      question: 'What is the purpose of an application program?',
      options: [
        { option: 'a', text: 'To manage computer hardware resources' },
        { option: 'b', text: 'To help users perform specific tasks' },
        { option: 'c', text: 'To connect multiple computers together' },
        { option: 'd', text: 'To process and execute instructions' }
      ]
    },
    {
      questionMaterial: 'Computer Networking',
      question: 'What is a DNS?',
      options: [
        { option: 'a', text: 'A type of network topology' },
        { option: 'b', text: 'A protocol used for file sharing' },
        { option: 'c', text: 'A system that translates domain names into IP addresses' },
        { option: 'd', text: 'A device used to connect multiple computers together' }
      ]
    },
    {
      questionMaterial: 'Computer Security',
      question: 'What is encryption?',
      options: [
        { option: 'a', text: 'A process of converting data into a code to protect its confidentiality' },
        { option: 'b', text: 'A type of computer virus' },
        { option: 'c', text: 'A program that prevents unauthorized access to a computer' },
        { option: 'd', text: 'A type of computer hardware' }
      ]
    },
    {
      questionMaterial: 'Computer Programming',
      question: 'What is a loop?',
      options: [
        { option: 'a', text: 'A type of data structure' },
        { option: 'b', text: 'A function that performs a specific task' },
        { option: 'c', text: 'A control flow statement that allows a program to repeat a set of instructions' },
        { option: 'd', text: 'A type of computer virus' }
      ]
    },
    {
      questionMaterial: 'Computer Hardware',
      question: 'What is a graphics card?',
      options: [
        { option: 'a', text: 'A type of storage device used to store data permanently' },
        { option: 'b', text: 'A type of input device used to scan images' },
        { option: 'c', text: 'A type of output device used to display images on a screen' },
        { option: 'd', text: 'A device that processes and renders graphics for display' }
      ]
    },
    {
      questionMaterial: 'Computer Networking',
      question: 'What is a VPN?',
      options: [
        { option: 'a', text: 'A type of network protocol' },
        { option: 'b', text: 'A type of file format' },
        { option: 'c', text: 'A method of securely connecting to a remote network over the internet' },
        { option: 'd', text: 'A device used to connect multiple computers together' }
      ]
    },
    {
      questionMaterial: 'Computer Software',
      question: 'What is the difference between system software and application software?',
      options: [
        { option: 'a', text: 'System software runs on servers while application software runs on personal computers' },
        {
          option: 'b',
          text: 'System software is used to create documents while application software manages computer hardware resources'
        },
        {
          option: 'c',
          text: 'System software manages computer hardware resources while application software performs specific tasks for the user'
        },
        {
          option: 'd',
          text: 'System software is used to connect to the internet while application software is used to store data'
        }
      ]
    },
    {
      questionMaterial: 'Computer Networking',
      question: 'What is DNS?',
      options: [
        { option: 'a', text: 'A program that manages computer hardware resources' },
        { option: 'b', text: 'A device used to input data into a computer' },
        { option: 'c', text: 'A type of computer virus' },
        { option: 'd', text: 'A system that translates domain names to IP addresses' }
      ]
    },
    {
      questionMaterial: 'Computer Security',
      question: 'What is two-factor authentication?',
      options: [
        { option: 'a', text: 'A program that prevents unauthorized access to a computer or network' },
        {
          option: 'b',
          text: "A method of verifying a user's identity using two different factors, such as a password and a fingerprint"
        },
        { option: 'c', text: 'A type of computer virus' },
        { option: 'd', text: 'A device used to create backups of computer data' }
      ]
    },
    {
      questionMaterial: 'Computer Programming',
      question: 'What is a loop?',
      options: [
        { option: 'a', text: 'A function that performs a specific task' },
        { option: 'b', text: 'A container that stores a value' },
        { option: 'c', text: 'A device used to input data into a computer' },
        { option: 'd', text: 'A programming construct that repeats a set of instructions until a specific condition is met' }
      ]
    },
    {
      questionMaterial: 'Computer Hardware',
      question: 'What is a graphics card?',
      options: [
        { option: 'a', text: 'A type of memory used by the CPU to temporarily store data and instructions' },
        { option: 'b', text: 'A type of output device used to display images on a screen' },
        { option: 'c', text: 'A type of storage device used to store data permanently' },
        { option: 'd', text: 'A type of hardware used to render and display images on a computer' }
      ]
    }
  ]
  const [answers, setAnswers] = useState(new Array(data.length).fill(null))

  function renderQuestions(no) {
    const question = data[no]
    setQuestions(
      <>
        <h1 className={styles.questionMaterial}>{question.questionMaterial}</h1>

        <hr />
        <p className={styles.question}>
          {questionsNo + 1}. {question.question}
        </p>

        <div className={styles.options}>
          {question.options.map((val) => {
            const { option, text } = val
            return (
              <div
                key={option}
                className={`${styles.option} ${selected === option ? styles.select : null}`}
                onClick={() => {
                  answers[no] = option
                  setSelected(option)
                }}
              >
                <p>
                  {option.toUpperCase()}. {text}
                </p>
              </div>
            )
          })}
        </div>
      </>
    )

    return true
  }
  useEffect(() => {
    renderQuestions(questionsNo)

    window.addEventListener('focus', function () {
      console.log('Halaman mendapatkan fokus')
    })

    window.addEventListener('blur', function () {
      console.log('Halaman kehilangan fokus')
      setSelected(null)
    })
  }, [selected])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        {questions}

        <hr />
        <br />
        <div className={styles.QuestionsNavigation}>
          <div
            className={styles.btn}
            style={{ backgroundColor: 'red' }}
            onClick={() => {
              if (questionsNo > 0) {
                setQuestionsNo(questionsNo - 1)
                setSelected(Date.now())
              }
            }}
          >
            <p>back</p>
          </div>
          <div
            className={styles.btn}
            style={{ backgroundColor: 'blue' }}
            onClick={() => {
              if (questionsNo < data.length - 1) {
                setQuestionsNo(questionsNo + 1)
                setSelected(Date.now())
              }
            }}
          >
            <p>{questionsNo < data.length - 1 ? 'next' : 'send'}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
