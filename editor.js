    // Initialize Editor.js with tools
    const editor = new EditorJS({
        holder: 'editorjs',
        tools: {
            header: {
                class: Header,
                inlineToolbar: ['link']
            },
            list: {
                class: List,
                inlineToolbar: true
            }
        },
    });

    // Save the editor's content
    function saveContent() {
        editor.save().then((outputData) => {
            console.log('Article data: ', outputData);
            // You can send the outputData to the server or perform any other action with it
            alert('Content saved! Open the console to view the data.');
        });
    }