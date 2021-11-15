import './App.css';
import styled from 'styled-components';

const WrapMenu = styled.div`
  display: flex;
  flex-direction: column;
  .menuName {
    padding: 5px 20px;
    position: relative;
    display: flex;
    cursor: pointer;
    &:hover {
      background-color: red;
      transition: 1s all ease;
      >.menuChildren {
        display: flex;
        flex-direction: column;
      }
    }
  }
  .menuChildren {
    display: none;
    position: absolute;
    left: 100%;
    top: 0;
    white-space: nowrap;
  }
`;

function App() {

  const menu = [
    { id: 'A', text: 'menu A', children: [
        { id: 'A.1', text: 'menu A.1', children : [
            { id: 'A.1.1', text: 'menu A.1.1', children: [] },
            { id: 'A.1.2', text: 'menu A.1.2', children: [] },
            { id: 'A.1.3', text: 'menu A.1.3', children: [] },
          ]
        },
        { id: 'A.2', text: 'menu A.2', children: [] },
      ]
    },
    { id: 'B', text: 'menu B', children: [
        { id: 'B.1', text: 'menu B.1', children: [
            { id: '', text: '', children: [] },
            { id: 'B.1.2', text: 'menu B.1.2', children: [] },
          ]
        },
        { id: 'B.2', text: 'menu B.2', children: [
            { id: 'B.2.1', text: 'menu B.2.1', children: [
              { id: 'B.2.1.1', text: 'menu B.2.1.1', children: [] },
              { id: 'B.2.1.2', text: 'menu B.2.1.2', children: [
                { id: 'B.2.1.2.1', text: 'B.2.1.2.1', children: [
                  { id: 'B.2.1.2.1.1', text: 'B.2.1.2.1.1', children: [] },
                ] },
              ] },
            ] },
          ]
        },
        { id: 'B.3', text: 'menu B.3', children: [] }
      ]
    },
    { id: 'C', text: 'menu C', children: [] },
    { id: 'D', text: 'menu D', children: [] },
];

  const renderMenu = (data) => {
    return data.map(item => {
      return <WrapMenu key={item.id}>
        {item.id && (
          <div className="menuName">
            {item.text}
            {!!item?.children?.length && (
              <div className="menuChildren">
                {renderMenu(item.children)}
              </div>
            )}
          </div>
        )}
      </WrapMenu>;
    })
  };

  return (
    <div className="App">
      <div className="App-header">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {renderMenu(menu)}
        </div>
      </div>
    </div>
  );
}

export default App;
