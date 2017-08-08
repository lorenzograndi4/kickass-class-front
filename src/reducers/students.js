const students = [
  { name: 'Lorenzo',
    picture: './assets/1.png',
    classId: 9,
    currentColor: 'green',
    evaluations: [
      {date: Date('2017-08-08'), color: 'yellow', remark: 'Boring' },
      {date: Date('2017-08-09'), color: 'red', remark: 'Lazy' },
      {date: Date('2017-08-10'), color: 'red', remark: 'Stupid' },
    ]
  },
  { name: 'Tobia',
    picture: './assets/2.jpeg',
    classId: 9,
    currentColor: 'green',
    evaluations: [
      {date: Date('2017-08-08'), color: 'yellow', remark: 'Boring' },
      {date: Date('2017-08-09'), color: 'yellow', remark: 'Lazy' },
      {date: Date('2017-08-10'), color: 'green' },
    ]
  },
]

export default (state = students, {type, payload} = {}) => {
  return state
}
