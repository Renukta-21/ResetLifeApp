const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const tasks = {
  todos: [
    {
      id: 1,
      type: 'chores',
      task: 'Drink 2L of water',
      streak: 5,
      repeat: 'Everyday',
      icon: 'water',
      'bg-imageID': 'waterBG',
      description: 'Stad hydrateded, stay energised'
    },
    {
      id: 2,
      type: 'gym',
      task: 'Workout',
      streak: 5,
      repeat: '5 days per week',
      icon: 'gym',
      'bg-imageID': 'gymBG',
      description: 'Stay strong, be a man'
    },
    {
      id: 3,
      type: 'study',
      task: 'Study Time',
      streak: 5,
      repeat: '5 days per week',
      icon: 'study',
      'bg-imageID': 'studyBG',
      description: 'A wise man always will be prepared'
    },
    {
      id: 4,
      type: 'leisure',
      task: 'Chill Out',
      streak: 5,
      repeat: '5 days per week',
      icon: 'leisure',
      'bg-imageID': 'chilloutBG',
      description: 'Get energy up, back to work'
    },
    {
      id: 5,
      type: 'work',
      task: 'Work',
      streak: 5,
      repeat: '5 days per week',
      icon: 'work',
      'bg-imageID': 'workBG',
      description: 'Getting on hard work'
    },
    {
      id: 6,
      type: 'health',
      task: 'health',
      streak: 5,
      repeat: '5 days per week',
      icon: 'health',
      'bg-imageID': 'healthBG',
      description: 'Keep up health, long life'
    }
  ],
  completed: [

  ]
}

app.get('/', (req, res) => {
  res.send(`
    <h1>Todoapp Backend</h1>
    <p>Acces <strong>/tasks</strong> to watch the full list</p>
    <p>Acces <strong>/todos</strong> to watch todos tasks</p>
    <p>Acces <strong>/completed</strong> to watch the completed list</p>`)
})
app.get('/todos', (req, res) => {
  res.send(tasks.todos)
})
app.get('/todos/:id', (req, res) => {
  const id = Number(req.params.id)
  const element = tasks.todos.find(t => t.id === id)
  if (element) {
    res.send(element)
  } else {
    res.status(404).send('ID does not exist')
  }
})
app.post('/todos', (req, res) => {
  tasks.todos = tasks.todos.concat(req.body)

  res.send(req.body)
})

app.get('/completed', (req, res) => {
  res.send(tasks.completed)
})

app.use((req, res, next) => {
  res.send('Path not found')
})
app.listen(3000, () => {
  console.log('App started on 3000')
})
