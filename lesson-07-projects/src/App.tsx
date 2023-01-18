import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar, MainContainer, Footer } from './shared';
import { NAVIGATION_EXTENDS } from './constants/navigations-constant';
import {
  DrumMachinePage,
  HomePage,
  MarkdownPreviewerPage,
  NotFoundPage,
  RandomQuoteMachinePage,
} from './pages';

// export for unit testing in the future
// doc: https://www.youtube.com/watch?v=cchqeWY0Nak&t=1581s

export function Body() {
  const { home, randomQuoteMachine, markdownPreviewer, drumMachine, notFound } =
    NAVIGATION_EXTENDS;

  return (
    <Routes>
      <Route key={home.name} path={home.path} element={<HomePage />} />
      <Route
        key={randomQuoteMachine.name}
        path={randomQuoteMachine.path}
        element={<RandomQuoteMachinePage />}
      />
      <Route
        key={markdownPreviewer.name}
        path={markdownPreviewer.path}
        element={<MarkdownPreviewerPage />}
      />
      <Route
        key={drumMachine.name}
        path={drumMachine.path}
        element={<DrumMachinePage />}
      />

      <Route
        key={notFound.name}
        path={notFound.path}
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <MainContainer>
        <Body />
      </MainContainer>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
