/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
    return (
        <>
            <Head>
                <meta name="description" content="Hello world!" />
                <link rel="stylesheet" type="text/css" href="/css/theme.css" />
                <title>Fundación</title>
                <script src="/js/bootstrap.min.js"></script>
            </Head>
            <props.Component />
        </>
    );
}