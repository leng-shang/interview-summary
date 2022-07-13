//1.params
//<Route path='/path/:name' component={Path}/>
//<link to="/path/2">xxx</Link>
//this.props.history.push({pathname:"/path/" + name});
//读取参数用:this.props.match.params.name

//2.query
//<Route path='/query' component={Query}/>
//<Link to={{ pathname : '/query' , query : { name : 'sunny' }}}>
//this.props.history.push({pathname:"/query",query: { name : 'sunny' }});
//读取参数用: this.props.location.query.name

//3.state
//<Route path='/sort ' component={Sort}/>
//<Link to={{ pathname : '/sort ' , state : { name : 'sunny' }}}> 
//this.props.history.push({pathname:"/sort ",state : { name : 'sunny' }});
//读取参数用: this.props.location.query.state 

//4.search
//<Route path='/web/search ' component={Search}/>
//<link to="web/search?id=12121212">xxx</Link>
//this.props.history.push({pathname:`/web/search?id ${row.id}`});
//读取参数用: this.props.location.search

//5.优缺点
//1.params在HashRouter和BrowserRouter路由中刷新页面参数都不会丢失
//2.state在BrowserRouter中刷新页面参数不会丢失，在HashRouter路由中刷新页面会丢失
//3.query：在HashRouter和BrowserRouter路由中刷新页面参数都会丢失
//4.query和 state 可以传对象

