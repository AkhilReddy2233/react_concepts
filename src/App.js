import logo from './logo.svg';
import './App.css';
import { State } from './components/state';
import { Table } from './components/table/table';
import { Counter} from './components/counter';
import Gallery from './components/Gallery';
import ParentComponent from './components/ParentComp';
import Forms from './components/Forms';
import LifeCycleA from './components/LifeCycleA';
import ReferenceComp from './components/ReferenceComp';
import FocusInput from './components/classRef/FocusInput';
import PortalRoot from './components/PortalRoot';
import CounterClick from './components/CounterClick';
import HoverCounter from './components/HoverCounter';
import CounterClickTwo from './components/RenderMethod/CounterClickTwo';
import CounterHowerTwo from './components/RenderMethod/CounterHowerTwo';
import CounterTwo from './components/RenderMethod/Counter';
import ComponentF from './components/ContextAPI/ComponentF';
import { UserProvider } from './components/ContextAPI/UserContext';
import ComponentC from './components/ContextAPI/ComponentC';
import FetchPostList from './components/HTTP/FetchPostList';
import HookCounter from './components/Hooks/HookCounter';
import HookCounterTwo from './components/Hooks/HookCounterTwo';
import HookCounterThree from './components/Hooks/HookCounterThree';
import HookWithArray from './components/Hooks/HookWithArray';
import CounterWithoutHook from './components/Hooks/UseEffectHook/CounterWithoutHook';
import HookCounterUseEffect from './components/Hooks/UseEffectHook/HookCounter';
import UseEffectExample2 from './components/Hooks/UseEffectHook/UseEffectExample2';
import MouseContainer from './components/Hooks/UseEffectHook/MouseContainer';
import DataFetching from './components/Hooks/UseEffectHook/DataFetching';
import ReducerCounter from './components/Hooks/UseReducer.js/ReducerCounter';
import DataFetchingUseState from './components/Hooks/DataFetchingUseState';
import DataFetchingUseReducer from './components/Hooks/UseReducer.js/DataFetchingUseReducer';
import CandyDispenser from './components/Hooks/UseReducer.js/DataFetchingUseReducer';
import MainCallback from './components/Hooks/UseCallback/MainCallback';
import UseMemoCounter from './components/Hooks/UseMemo/UseMemoCounter';
import C1 from './components/Hooks/UseCustom/c1';
import C2 from './components/Hooks/UseCustom/c2';
import UserForm from './components/Hooks/UseCustom/UserForm';
import UseReducerRender from './components/ReactRender/UseReducerRender';
import Immutability from './components/ReactRender/Immutability';
import P from './components/RenderPandC/P';
import C from './components/RenderPandC/C';
import Layout from './components/Layout';
import MUIButton from './components/MUI/Button';
console.log(logo)
// import State from './components/state';

export function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user= {props.author}/>
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}
function Avatar(props){
  return (
<img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
  );
}
function App(props) {
  const characters = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    },
  ]
  
  return (
    <div className='app'>
      {/* <MUIButton /> */}
      <Layout/>
      {/* <P >
        <C />
      </P> */}
      {/* <Immutability />
      <UseReducerRender />
      <UserForm />
      <C1 />
      <C2 /> */}
      {/* <UseMemoCounter /> */}
      <MainCallback />
      {/* <DataFetchingUseReducer />
      <DataFetchingUseState />
      <ReducerCounter />
      <DataFetching /> */}
      {/* <MouseContainer /> */}
      {/* <UseEffectExample2 /> */}
      {/* <HookCounterUseEffect /> */}
      {/* <CounterWithoutHook /> */}
      {/* <HookWithArray />
      <HookCounterThree />
      <HookCounterTwo />
      <HookCounter/>
      <FetchPostList /> */}
      <UserProvider value='Akhil'>
        <ComponentC />
      </UserProvider>
      {/* <CounterTwo render={(count, incrementCount)=>(
        <CounterClickTwo count={count} incrementCount={incrementCount} />
      )} /> */}
      {/* <CounterTwo>
        {(count, incrementCount)=>(
          <CounterClickTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterTwo> */}
      {/* <CounterTwo render={(count, incrementCount)=>(
        <CounterHowerTwo count={count} incrementCount={incrementCount} />
      )} /> */}
      {/* <CounterClickTwo />
      <CounterHowerTwo /> */}
      {/* <CounterClick name='akhil'/>
      <HoverCounter />
      <PortalRoot />
      <FocusInput />
      <ReferenceComp />
      <LifeCycleA /> */}
      {/* <Forms /> */}
      {/* <Welcome name='Akhil' {...props}>
        <p>Child content</p>
      </Welcome>
      <Welcome name='Reddy'/>
      <Welcome name='Akhil'/> */}
      {/* <State/> */}
      {/* <Table data={characters}></Table> */}
      {/* <Counter></Counter> */}
      {/* <Gallery/> */}
      {/* <ParentComponent /> */}
    </div>
  );
}

export default App;

function Welcome(props) {
  console.log(props)
  return (
    <>
    <h1>Hello,{props.name} {props.msg} </h1>
    {props.children}
    </>
  )
}
