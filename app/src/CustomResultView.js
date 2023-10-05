const CustomResultView = ({
    result,
    onClickLink
  }) => (
    <li className="sui-result">

      <div className="sui-result__body">
        <div className="sui-result__image">
          <img src={result.organization_logo.raw} alt="" />
        </div>
        <div className="sui-result__header">
        <h3>
          <a onClick={onClickLink} href={result.url.raw}>
            {result.name.raw}
          </a>
          </div>
          <div className="sui-result__body"><li><h6>{result.city.raw}</h6></li></div>
        </h3>
        
      
      
      </div>
      
    </li>
  );
  
export default CustomResultView;