## react学习

下面是完成之后的demo

![react-todolist-demo](https://github.com/KamyoChae/react-todolist/blob/master/todolist_demo.gif)


一些感想：

react和vue差别还是有不少的，vue的组件每个都可以写成后缀为vue的文件，而react就是一个js文件，不知道后面会不会有一个.react文件出现，哈哈

每个react文件都要引入react内置模块，原因是react的核心使用了jsx语法。很久之前就听说过jsx语法了，一直觉得是很高大上的东西，过了一遍项目之后才知道，原来jsx就是在js里面写html标签，合法的写html标签。当然了如果不引用react模块的话，那就真的和普通的js文件一样了，也就不能合法的写上html元素

再一个就是vue里面的调用函数都是放在methods里面的，但react据说是号称函数式编程，所有方法一律扔到组件里，一个完整的组件是这个样子：
```javascript

import React, { Component } from 'react'

class items extends Component { 
    render() {
        return (
            <>
                <li>
                    <i className="indexnum">{this.props.itemIndex + 1}</i>
                    {this.props.text}
                    <i className="close" onClick={this.closeHandle}></i>
                </li>
            </>
        )
    }
    closeHandle = () => {
        this.props.delete(this.props.itemIndex)
    }
}

export default items 
```

可以看到上面的第一行代码里面我还写了个{Component}，这是es6的语法，意思就是直接把react里面的一个名为Component的东东扔进来然后给items继承一下，Component这个名字还不能改，改了项目就不能用了

class items extends Component这个写法还真是像java的继承，看到这行代码的时候我突然想起以前的一句话来：javascript就是抄抄java、抄抄c抄抄啥啥啥的就做出来了...莫名喜感

react的一个组件就是一个类，通过这个类来实现组件的套用，为了对外暴露这个类，需要在代码最后面写上export default items。这是模块化开发的一种常见方式了，已经记不清这是AMD还是CMD，等下去翻翻以前的写文章看看

这个组件类items里面必须要有的一个函数方法是render。render方法还得return一个html代码，这个代码用小括号括起来。

哦对了，写到这我得说说怎么把html代码插进react的虚拟dom里面。假设一个html元素`<li></li>`里面需要渲染上一个html元素（这个html元素我们用item表示），那就得用一个很危险的从操作，大概写成这个样子：

```html
<li dangerouslySetInnerHTML={{__html:item}}></li>
```
这个写法实现的效果和vue里面使用v-html的效果一模一样。

dangerouslySetInnerHTML拆开看就是dangerously Set InnerHTML，意为危险地设置一个innerHTML。

至于为啥危险，大概是为了防止被插入脚本攻击吧，react中不管插入啥都会使字符串的方式显示，除非用一个花括号括住。这里又要提一嘴，将变量渲染到dom节点上，vue是双大括号，react是单大括号。如果是渲染成属性，vue还得加个冒号“:”，react就不用。

react的父子组件传值也蛮有意思，这个只是单向数据流，和vue一样（vue的双向数据流指v-model那块），父传子props是不能修改的。不过vue里面可以写上一个props数组或者对象接收父组件传过来的值，而react则是直接在子组件使用this.props.yourname实现数据的渲染。

如果想用子组件操作父组件数据，vue的解决方式是用一个emit函数，而react则是直接就把父组件的函数给传过来，在子组件调用父组件的函数进行数据的操作，这个思路真是霸道！

还有要说的，react引入的组件必须是首字母开头大写，vue是可大可小，react就比较严谨了，凡是首字母大写开头的都是组件。

react的class和html的class重名了，所以html这里是改成了className，除此之外还有属性for，在class里面，属性for用htmlFor代替

还有一个要说的，render里面return的html必须用一个div包裹着，如果不想用div的话可以用Fragment，Fragment是react提供的一个不会在浏览器渲染出来的标签，不过如果想用的话必须要在上面引入Fragment，写法如下：

```javascript
import React, { Component , Fragment} from 'react'
class items extends Component { 
    render() {
        return (
            <Fragment>
                <li>
                    <i className="indexnum">{this.props.itemIndex + 1}</i>
                    {this.props.text}
                    <i className="close" onClick={this.closeHandle}></i>
                </li>
            </Fragment>
        )
    }
    closeHandle = () => {
        this.props.delete(this.props.itemIndex)
    }
}

export default items 
```
当然如果不想写的话也可以和上面一样直接用“<></>”代替



开发环境： 
```
    "react": "^16.8.3",
    "react-dom": "^16.8.3",
    "react-scripts": "2.1.5"
```