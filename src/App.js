import "./styles.css";

const App = () => {
  const state = {
    partyType: "Personel Gecesi",
    entertainment: "clowns",
    venue: {
      name: "Radisson Blu Vadi İstanbul Otel",
      capacity: 120
    }
  };

  return (
    <div>
      <Party
        partyType={state.partyType}
        entertainment={state.entertainment}
        venue={state.venue}
      />
    </div>
  );
};

const Party = (props) => {
  return (
    <div>
      <h1>Personel Gecesi</h1>
      <p className="text1">
        Bu {props.partyType} En Fazla {props.venue.capacity} Kişi Kapasite İle{" "}
        {props.venue.name}'de Gerçekleşecektir.
      </p>
      <div className="footer">
        <div className="left">
          <p className="text2">Öne Çıkan Eğlence: Dans Koreografisi</p>
        </div>

        <div className="right">
          <p>Bu Önemli Gecede Bizlerle Olmanız Dileğiyle.</p>
        </div>
      </div>
      <p className="date">18.01.2024</p>
    </div>
  );
};
export default App;
