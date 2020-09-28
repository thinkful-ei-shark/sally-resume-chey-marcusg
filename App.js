function App(props) {
    console.log(props)
    return (
        <div>
            <section id="introduction">
                <p>Hi I'm Sally I'm 25 and below this line you'll find more information about me.</p>
            </section>
            <br/>
            <section id="Education">
                <p>I have studied at:</p>
                <ul>
                    <li>IES BEZMILIANA</li>
                    <li>Minnesota University</li>
                </ul>
            </section>
            <br/>
            <section id="works">
                <p>I have worked at:</p>
                <div id="works_list">
                    <ul>
                        <li>Github as Engineer during 2018 and there I have to
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </li>
                        <li>Jetbrains as Project manager during 2019 and I'm still working there. My work consist in
                            A assumenda autem dolorem doloremque
                        </li>
                    </ul>
                </div>
            </section>
            <br/>
            </div>
      );
    }


    ReactDOM.render(
      <App/>,
      document.querySelector('#application-root')
    );
