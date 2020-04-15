window.onload = () =>
{
    console.log(Path.root());
    const controller = new Controller();
    const window = new Window(controller, 
    {
        element: document.body
    });
};