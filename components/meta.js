import Head from 'next/head';

export default ({
    props = { title: "", description: "", image: "", url: "", keywords: "" },
}) => (
    <div>
        <Head>
            <title>{ props.title || "Seedbox" }</title>
            <meta 
                name="description"
                content={
                    props.description || ""
                }
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />

            <link 
                href="Css/bootstrap.min.css"
                rel="stylesheet"
                type="text/css"
            />
            <script src='Script\jquery-3.3.1.min.js'></script>
            <script src='Script\bootstrap.min.js'></script>
            <link 
                href="https://fonts.googleapis.com/css2?family=Muli:wght@500;600;700&display=swap"
                rel="stylesheet"
            />
            <link 
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
                rel="stylesheet"
                type="text/css"
            />
            <link 
                href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&display=swap"
                rel="stylesheet"
            />
            <link 
                href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" 
                rel="stylesheet"
                type="text/css" 
            />
            <script src="/Script/select2.min.js"></script>            
        </Head>
    </div>
);