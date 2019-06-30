const ChildComponent = () => {
  return(
    <div>
      <p>I am a child</p>
    </div>
  )
};

class ParentComponent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>I am a parent</h1>
        <ChildComponent/>
      </div>
    );
  }
}
