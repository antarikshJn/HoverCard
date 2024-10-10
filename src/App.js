import './App.css';
import { HoverCard, HoverCardTrigger, HoverCardContents } from "./components/HoverCard"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HoverCard>
          <HoverCardTrigger>
            Antariksh
          </HoverCardTrigger>
          <HoverCardContents>
            <div className="flex space-x-4">
              <div className="img-container">
                <img src="https://github.com/vercel.png" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex pt-2">
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContents>
        </HoverCard>
      </header>
    </div>
  );
}

export default App;
