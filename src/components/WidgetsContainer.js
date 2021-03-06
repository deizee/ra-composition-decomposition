import Widget from "./Widget";
import ListItem from "./ListItem";
import Link from "./Link";
import UnorderedList from "./UnorderedList";
import {words} from "../fakeData";

const WidgetsContainer = (props) => {
    return (
        <div className="widget-container ml150">
            <Widget title="Погода">
                <div>
                    <img style={{maxWidth: '100%'}} src="https://i.imgur.com/PAshNBi.png" alt="weather"/>
                </div>
            </Widget>
            <Widget title="Карта России">Расписания</Widget>
            <Widget title="Посещаемое" items={words}>
                <UnorderedList items={words} className="visited-list">
                    {items => items.map(item => (
                        <ListItem key={Math.random()} className="news-top-item">
                            <Link className="news-top-link" href="/">
                                {item}
                            </Link>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Widget>
            <Widget title="Телепрограмма">
                <p>18:40 На самом деле</p>
                <p>19:45 Пусть говорят</p>
                <p>21:00 Время</p>
                <p>21:30 "Презумпция невиновности"</p>
                <p>23:35 Вечерний Ургант</p>
            </Widget>
            <Widget title="Эфир">
                <p>▶ Управление как искусство</p>
                <p>▶ Ночь. Мир в это время</p>
                <p>▶ Андрей Вознесенский</p>
            </Widget>
        </div>
    );
};

export default WidgetsContainer;