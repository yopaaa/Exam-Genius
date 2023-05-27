/* eslint-disable multiline-ternary */
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import data from '../data/exampleQustions.json'

function Home() {
  const [content, setcontent] = useState()
  const [refreshAnswers, setRefreshAnswers] = useState()

  const [questionsNo, setQuestionsNo] = useState(0)
  const [answers, setAnswers] = useState(new Array(data.length).fill(null))

  function renderReview() {
    setcontent(
      <>
        <h1 className={styles.questionMaterial}>Review</h1>
        <hr />
        <div className={styles.options} style={{ justifyContent: 'flex-start' }}>
          {answers.map((val, index) => {
            return (
              <>
                {val ? (
                  <div
                    style={{ padding: 15, backgroundColor: 'green', margin: 10, borderRadius: 15 }}
                    onClick={() => {
                      setQuestionsNo(index)
                    }}
                  >
                    {val}
                  </div>
                ) : (
                  <div
                    style={{ padding: 15, backgroundColor: 'red', margin: 10, borderRadius: 15 }}
                    onClick={() => {
                      setQuestionsNo(index)
                    }}
                  >
                    -
                  </div>
                )}
              </>
            )
          })}
        </div>
      </>
    )
  }

  useEffect(() => {
    const questionsData = data[questionsNo]
    setcontent(
      <>
        <h1 className={styles.questionMaterial}>{questionsData.questionMaterial}</h1>

        <hr />
        <p className={styles.question}>
          {questionsNo + 1}. {questionsData.question}
        </p>

        <div className={styles.options}>
          {questionsData.options.map((val) => {
            const { option, text } = val
            return (
              <div
                key={option}
                onClick={() => {
                  setAnswers(() => {
                    answers[questionsNo] = option
                    return answers
                  })
                  setRefreshAnswers(option)
                }}
                className={`${styles.option} ${answers[questionsNo] === option ? styles.select : null}`}
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
  }, [refreshAnswers, questionsNo])

  return (
    <div className={styles.main}>
      {content}

      <hr />
      <br />
      <div className={styles.QuestionsNavigation}>
        <Btn
          color={'red'}
          onClick={() => {
            if (questionsNo > 0) {
              setQuestionsNo(questionsNo - 1)
            }
          }}
          text={'back'}
        />

        <Btn
          text={questionsNo < data.length - 1 ? 'next' : 'send'}
          color={'blue'}
          onClick={() => {
            if (questionsNo < data.length - 1) {
              setQuestionsNo(questionsNo + 1)
              return
            }
            // alert(answers)
            renderReview()
          }}
        />
      </div>
    </div>
  )
}

function Btn(params) {
  return (
    <div className={styles.btn} style={{ backgroundColor: params.color, ...params.style }} onClick={params.onClick}>
      <p>{params.text}</p>
    </div>
  )
}
export default Home
