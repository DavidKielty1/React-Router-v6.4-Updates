React Router 6.4 Changes:

Main index page ReactDOM
. . import ReactDOM from 'react-dom/client'
. . ReactDOM.createRoot(document.getElementById('root')).render(
. . <React.StrictMode>
. . . . <App />
. . </React.StrictMode>
)

Router createBrowserRouter
. . createRoutesFromElements(
. . . . Route Root path="/" element={<RootLayout/>}
. . . . . . Route index element={<WelcomePage/>} _index elements do not have paths_
. . . . . . Route path="/blog" element={<BlogLayout/>}
. . . . . . . .Route index element={<BlogPostsPage /> loader={blogPostsLoader}} _Loader for api.getPosts_ Nested Root
. . . . . . . .Route path=":id" element={<PostDetailPage />} loader={blogPostLoader} _Loader for ap.getPost_ Nested Root
. . . . . . Route path="/blog/new element={<NewPostPage />}
. . . . Route
. );
);

Wrap routes in CreateBrowserRouter, and createRoutesFromElements
. . createBrowserRouter,
. . createRoutesFromElements,
. . import from 'react-router-dom'

Index - index routes do not have paths, take parent element
. . Path - nested paths continue path from parent element.

useLoader();
. . Can get rid of useState functions, load data from the api page functions
. . App.jsx loader={blogPostsLoader} - import BlogPostsPage, { loader as blogPostsLoader } from "./pages/BlogPosts";

useRouteError();
. . load error messages and handling from the api page functions
. . create separate ErrorPage.jsx and link on root element within Router.
. . <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
. . -import { useRouterError } from 'react-router-dom

<Form> component
    Wrap the form element in Form instead of form, import from react-router-dom
    Can get rid of onSubmit 
    - import { Form } from 'react-router-dom'
