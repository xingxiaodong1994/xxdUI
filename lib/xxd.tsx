import React, {PureComponent} from 'react';

class Xxd extends PureComponent {
    public state: { // state也需要声明类型；
        array2: number[],
        object:any
    };

    constructor(props: any) {
        super(props);
        this.state = {
            array2: [11, 22, 33],
            object:{
                name:"小明",
                value:"100",
            }
        };
    }

    deleteArray = () => {
        const {array2,object} = this.state;
         array2.splice(0,1,100);
        object.name="亚静";
        console.log("array2");
        console.log(array2);
        console.log(object);
        this.setState({
            array2,
            object:Object.assign({},object)
        })
    };

    render() {
        const {array2,object} = this.state;
        const lis = array2.map((item: number) => (<div onClick={this.deleteArray} key={item}>{item}</div>));

        return (
            <div>
                <div>{lis}</div>
                <div>
                    <div>{object.name}</div>
                    <div>{object.value}</div>
                </div>
            </div>

        );
    }
}

export default Xxd;