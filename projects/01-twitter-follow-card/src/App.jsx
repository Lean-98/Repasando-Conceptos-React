import './index.css'
import { TwitterFollowCard } from '../src/components/TwitterFollowCard'
import { Title } from './components/Title'

const users = [
  {
    id: 1,
    userName: 'Alex1s',
    name: 'Alexis Bazan',
    isFollowing: false
  },
  {
    id: 2,
    userName: 'Midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    id: 3,
    userName: 'Fernando_her85',
    name: 'Fernando Herrera',
    isFollowing: true
  },
  {
    id: 4,
    userName: 'Anonimo',
    name: 'Anonimo',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='container'>
      <Title title='A quién seguir' />
      {users.map(({ userName, name, isFollowing, id }) => (
        <TwitterFollowCard
          userName={userName}
          initialIsFollowing={isFollowing}
          key={id}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
