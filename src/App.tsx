import { DndProvider } from "react-dnd-multi-backend";
import "./App.css";
import { Backgammon } from "./pages/backgammon/BackgammonPage";
import { HTML5toTouch } from "rdndmb-html5-to-touch";

function App() {
    return (
        <>
            <DndProvider options={HTML5toTouch}>
                <Backgammon />
            </DndProvider>
        </>
    );
}
export default App;
