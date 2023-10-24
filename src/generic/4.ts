/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
type Obj = {title: string,};
class Component <T extends Obj>{
  constructor (public props:T) {

  }
}

class Page extends Component<Obj> {
  pageInfo ():void {
    console.log(this.props.title);
  }
}

export {};