import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Card, Anchor, Button } from '../components';

interface Quote {
  text: string;
  author: string;
}

/** FreeCodeCamp: Frontend Project 1 */
export function RandomQuoteMachinePage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [selectedQuote, setSelectedQuote] = useState<Quote>({
    text: 'Loading...',
    author: '',
  });

  const quoteApi = 'https://type.fit/api/quotes';

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(quoteApi);
        const data = await response.json();
        setQuotes(data);
        setSelectedQuote(data[Math.floor(Math.random() * data.length)]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchQuotes();
  }, []);

  const randomQuote = (): Quote => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const onClickRandom = () => {
    setSelectedQuote(randomQuote());
  };

  const twitterLink = `https://twitter.com/intent/tweet?text=${`${selectedQuote.text} - ${selectedQuote.author}`}`;
  const githubLink = 'https://github.com/sirawit-suk';

  return (
    <div
      id="quote-box"
      className="flex flex-col justify-center items-center w-full min-h-screen "
    >
      <Card className="p-12">
        <span>
          <FontAwesomeIcon className="scale-150 mx-4 pb-1" icon={faQuoteLeft} />
          <span className="text-2xl" id="text">
            {selectedQuote.text}
          </span>
          <FontAwesomeIcon
            className="scale-150  mx-4 pb-1"
            icon={faQuoteRight}
          />
        </span>
        <p className="text-muted self-end mt-2" id="author">
          {selectedQuote.author ? `- ${selectedQuote.author}` : '- Anonymous'}
        </p>
        <div className="flex justify-between w-full mt-8">
          <div className="flex gap-2">
            <Anchor id="github" href={githubLink}>
              <Button>
                <FontAwesomeIcon icon={faGithub} />
              </Button>
            </Anchor>
            <Anchor id="tweet-quote" href={twitterLink}>
              <Button>
                <FontAwesomeIcon icon={faTwitter} />
              </Button>
            </Anchor>
          </div>

          <Button id="new-quote" name="new quote" onClick={onClickRandom} />
        </div>
      </Card>
    </div>
  );
}

/**
    User Story #1: I can see a wrapper element with a corresponding id="quote-box".
    User Story #2: Within #quote-box, I can see an element with a corresponding id="text".
    User Story #3: Within #quote-box, I can see an element with a corresponding id="author".
    User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".
    User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".
    User Story #6: On first load, my quote machine displays a random quote in the element with id="text".
    User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".
    User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.
    User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.
    User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.
    User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.
*/
