Theory Assignment:

    Chapter -03 : Laying foundation

    Q. What is JSX?
    Ans. JSX stands for JavaScript XML. JSX is a HTML like syntax but not Javascript inside HTML. JSX uses React.createElement. JSX is converted to React.createElement and this is done by Babel. 
         For Ex - const element = <h1>Hello, world!</h1>.
    
   Q. What are the superpowers of JSX?
   Ans. JSX advantages are :
        1. Readability : JSX code is easrier to read than normal React code.
        2. Less Code : We don't need to write React.createElement for creating an HTML element. JSX allows us to write less code.
        3. Maintainability : It does not require high maintainability.
        4. XSS safe : Cross script is not possible
        
   Q. Role of type attribute in script tag. What options can I use there?
   Ans. Type attribute in script tag specifies the MIME type of the script and identify content of script. MIME(Multipurpose Internet Mail Extension)
        types enable browsers to recognize the filetype of a file. It has default value which is "text/javascript".
        A script tag having type="module" attribute specifies that it to be considered as a Javascript module.
        
        The diferent types of options that can be passed are:
        text/javascript, text/ecmascript, application/javascript and application/ecmascript.
 
   Q. {TitleComponent} VS {<TitleComponent/>} VS {<TitleComponent></TitleComponent>} in JSX ?
   Ans. {TitleComponent} : This value describes the TitleComponent as a javascript expression or a variable. It is also a react element.
                  
        {<TitleComponent/>} : This value describes the Component which returns the JSX. TitleComponent is a function that is returning the JSX value.
        
        <TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no children components.The opening and closing tags are created to include the child components.
        Ex - 
        
        <TitleComponent>
            <ChildComponen1 />
            <ChildComponen2 />
            <ChildComponen3 />
        </TitleComponent>
