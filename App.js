import './App.css';
import {Component} from 'react'
import Person from './person/person';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {id:123,name: 'Alvin', phone:'89876543210', career: 'IT', email: '789573@mail.ru', meeting: '20.12 - 12:00'},
        {id:1235,name: 'Mark', phone:'89807487610', career: 'Banking', email: '709543@mail.ru', meeting: '25.12 - 14:00'},
        {id:1236,name: 'Dave', phone:'89876098310', career: 'HR', email: '789523@mail.ru', meeting: ''},
        {id:1237,name: 'Daniel', phone:'84376543010', career: 'Real Estate', email: '689543@mail.ru', meeting: ''},
      ]
    }
  }

  onValueChange = (id, value) =>{
    this.setState(({data}) => {
      const item = data.find(item => item.id === id)
      const newItem = {...item, meeting: value}
      const index = data.indexOf(item)
      const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1, data.length)]
      return{
        data: newData
      }
    })
  }
  render(){
    const {data} = this.state
    const personList = data.map(item => {
      return <Person {...item} key={item.id} onValueChange={(id,value) => this.onValueChange(id,value)}/>
     })

   return (
     <table className='responsive-table'>
       <thead>
         <tr>
             <th>Name</th>
             <th>Phone</th>
             <th>Career</th>
             <th>Email</th>
             <th>meeting</th>
         </tr>
       </thead>
     <tbody>
      {personList}
     </tbody>
   </table>
   );
 }
}
export default App;
