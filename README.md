# Expando generates instant data snippets for the Visual Studio Code editor
![Expando for atom](https://raw.github.com/expandoco/expando-vscode/master/images/vscode.gif)

### Installing
Launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter.

```
apm install expando-vscode
```

### Basic usage
Type Expando syntax and then run the `Expando: Expand` command or press `SHIFT+ENTER`. 

The following basic types are supported:
* `string` random string value
* `int` random integer number
* `float` random float number
* `date` random date
* `bool` random boolean value

More advanced types include:
* `company` random company name
* `email` random email address
* `fname` random first name
* `lname` random last name
* `tel` random telephone number

Separate each type with a comma (`,`)
```
fname,lname,age
```

Specify custom field aliases by using a colon (`:`)
```
firstName:fname,lastName:lname
```

Use brackets for child level objects
```
company,profile:(open:float,close:float)
```

For object arrays, use astrix (`*`)
```
(fname)*10
```

For simple arrays, use `@`
```
tweet:string,tags@5
```

The default generation is `json`, but `xml` and `csv` is also supported
```
items:(string,int)*10=xml
```
or
```
(company,price:float)*10=csv
```
