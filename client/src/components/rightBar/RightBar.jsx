import "./rightBar.scss";

const RightBar = () => {
  return (
    <div id="rightBarContainer">
      <div className="performanceContainer">
        <div className="performanceContainer_title">
          <h2>Performance</h2>
        </div>
        <hr />
        <div className="conversionContent">
          <div className="table views">
            <div className="table_totalTitle">
              <h3>Visitas</h3>
              <div className="table_content_total">200000</div>
            </div>

            <div className="table_Content">
              <div className="ayer">
                <span>Ayer</span> <b>100</b>
              </div>
              <div className="hoy">
                <span>Hoy</span> <b>200</b>
              </div>
            </div>
          </div>
          <hr />
          <div className="table uniqueVisitors">
            <div className="table_totalTitle">
              <h3>Visitantes Unicos</h3>
              <div className="table_content_total">200000</div>
            </div>

            <div className="table_Content">
              <div className="ayer">
                <span>Ayer</span> <b>100</b>
              </div>
              <div className="hoy">
                <span>Hoy</span> <b>200</b>
              </div>
            </div>
          </div>
          <hr />
          <div className="table conversions">
            <div className="table_totalTitle">
              <h3>Conversiones</h3>
              <div className="table_content_total"> 200000</div>
            </div>
            <div className="table_Content">
              <div className="ayer">
                <span>Ayer</span> <b>100</b>
              </div>
              <div className="hoy">
                <span>Hoy</span> <b>200</b>
              </div>
            </div>
          </div>
          <hr />
          <div className="table conversionsRatio">
            <div className="table_totalTitle">
              <h3>Ratio Conversiones</h3>
            <div className="table_content_total"> 2%</div>
            </div>
            <div className="table_Content">
              <div className="ayer totalVisitas">
                <span>Ayer</span> <b>100</b>
              </div>
              <div className="hoy totalConversiones">
                <span>Hoy</span> <b>200</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightBar;
