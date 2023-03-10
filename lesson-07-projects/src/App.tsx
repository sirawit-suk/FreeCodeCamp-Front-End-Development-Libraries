import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar, MainContainer, Footer } from './shared';
import { NAVIGATION_EXTENDS } from './constants/navigations-constant';
import {
  DrumMachinePage,
  HomePage,
  MarkdownPreviewerPage,
  NotFoundPage,
  RandomQuoteMachinePage,
  TwentyFivePlusFiveClockPage,
} from './pages';
import { JavaScriptCalculatorPage } from './pages/JavaScriptCalculatorPage/JavaScriptCalculatorPage';

// export for unit testing in the future
// doc: https://www.youtube.com/watch?v=cchqeWY0Nak&t=1581s

export function Body() {
  const {
    home,
    randomQuoteMachine,
    markdownPreviewer,
    drumMachine,
    notFound,
    javaScriptCalculator,
    twentyFivePlusFiveClock,
  } = NAVIGATION_EXTENDS;

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
        key={javaScriptCalculator.name}
        path={javaScriptCalculator.path}
        element={<JavaScriptCalculatorPage />}
      />
      <Route
        key={twentyFivePlusFiveClock.name}
        path={twentyFivePlusFiveClock.path}
        element={<TwentyFivePlusFiveClockPage />}
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
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <NavBar />
      <MainContainer>
        <Body />
      </MainContainer>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
