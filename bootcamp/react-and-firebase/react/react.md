# React

## Deploying React App to Netlify

### Build yourself

1. Cleanup unused files and add SEO
2. Run build command to create production build
3. Push it to netlify

### Use Netlify Continuous Deployment

1. Cleanup unused files and add SEO
2. Create a new branch named `production`
3. From Netlify, select repo as access point and connect production branch to Netlify
4. When adding changes, push it to the main branch first then pull production branch up to date with main. (instead of push it directly to the production).

## Routing

### Traditional Routing

1. New URL is entered in browser
2. HTTP request is sent to the server
3. Browser retrieves new HTML page

### Route component prop

In olden days, you were not able to pass children props into Route. So people used to:

```jsx
<Route path="/user/:username" component={User} />
```

and to if you need to pass props to `User`, you could:

```jsx
class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Index - {this.props.route.foo}</h1>;
  }
}

var routes = <Route path="/" foo="bar" component={User} />;
```

OR

From this [SO](https://stackoverflow.com/a/43299633/13036807):

> This is the solution from Rajesh, without the inconvenient commented by yuji, and updated for React Router 4. The code would be like this:

```jsx
<Route path="/comments" render={(props) => <User user={user} {...props} />} />
```

> Note that I use render instead of component. The reason is to avoid undesired remounting. I also pass the props to that method, and I use the same props on the Comments component with the object spread operator (ES7 proposal).

But now you can simply:

```jsx
<Route>
  <User user={user}>
</Route>
```

Before you jumping into using the syntax shown in "quick start guide", here's Brent's idea on that matter:

> Remember that a “quickstart” guide is intended to just quickly get someone up and running with a library/tool/technology, but the the techniques demonstrated in it aren’t always the “recommended” way to do something, just the fastest way to “get started”. Before Hooks the other techniques were the way to do it because of the way the children components got access to the props (match, location, and history). So in any legacy code you encounter out there, you’ll see the other methods, not the child method. So being familiar with the fact that multiple syntaxes exist will be useful for new react devs going out into the world (edited).

### Accessing query & search parameters

```jsx
<Route path="/skills/:skill" component={Skill}>
```

```jsx
const Skill = (props) => {
  return (
    <div className={'Blog'}>
      <h1>{props.params.match.skill}</h1>
    </div>
  );
};
```

OR

```jsx
import { useParam } from 'react-router-dom';

const Skill = (props) => {
  const { skill } = useParam();
  return (
    <div className={'Blog'}>
      <h1>{skill}</h1>
    </div>
  );
};
```

## Hooks

The Hook functions need to be called every time the component is rendered in order for them to do their magic. (edited)
