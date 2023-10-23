/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
type obj = {title: string,};
class Component <T extends obj>{
  constructor (public props:T) {

  }
}

class Page extends Component<{title: "qweqwe"}> {
  pageInfo ():void {
    console.log(this.props.title);
  }
}

export {};