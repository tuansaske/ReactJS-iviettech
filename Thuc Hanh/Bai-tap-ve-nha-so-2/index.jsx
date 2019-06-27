<!DOCTYPE html>
<html>

<head>
  <meta http-equiv='Content-type' content='text/html; charset=utf-8'>
  <title>Bai tập dựng trang làm việc với PROPS</title>
  <script src="js/react.development.js"></script>
  <script src="js/react-dom.development.js"></script>
  <script src="js/babel.min.js"></script>
  <link rel="stylesheet" type="text/css" href="css/styles.css" />
</head>

<body>
  <div id="root" class="container-form"></div>
  <script type="text/babel">
  function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);  </script>
</body>
