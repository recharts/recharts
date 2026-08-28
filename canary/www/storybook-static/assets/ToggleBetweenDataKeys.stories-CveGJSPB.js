import{r as n,R as t}from"./iframe-xbzO8ihI.js";import{L as p}from"./LineChart-BydhZkNw.js";import{R as s}from"./zIndexSlice-DHGEGTXf.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Baa-wggV.js";import{X as d}from"./XAxis-DsYRd7p5.js";import{Y as y}from"./YAxis-DldbyKuF.js";import{L as u}from"./Legend-BapYq9du.js";import{L as h}from"./Line-BdzEVQ9Q.js";import{T as g}from"./Tooltip-CGj2ny3y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B40yK-0z.js";import"./resolveDefaultProps-BksGg43P.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D-N5tVUk.js";import"./throttle-CSfITKZw.js";import"./index-BqW4Uzzs.js";import"./index-Db_N0V-Y.js";import"./isWellBehavedNumber-BpEs7sJw.js";import"./d3-scale-C-XGUw-P.js";import"./index-Bw8yyLrA.js";import"./index-VAUYyiDQ.js";import"./renderedTicksSlice-BCm2ZtcS.js";import"./index-DNQsy-E5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CVt6roZ8.js";import"./chartDataContext-DjNdQ09m.js";import"./CategoricalChart-Btyj_0ug.js";import"./CartesianAxis-D6daOnac.js";import"./Layer-CyOAhwla.js";import"./Text-DyvJm0Va.js";import"./DOMUtils-BBUQNy1o.js";import"./useId-BsQI64Io.js";import"./useBackwardsCompatibleTheme-BaDaWPI3.js";import"./Label-Db5UOJ54.js";import"./ZIndexLayer-CdA1EieN.js";import"./types-DVHQQz9N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BtGFaNTe.js";import"./symbol-D6-nJAG5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bp43p8yN.js";import"./uniqBy--5lFk6DW.js";import"./iteratee-DbaMtUdN.js";import"./Curve-D088EVRW.js";import"./step-wFZZajAR.js";import"./AnimatedItems-GZSCW2O0.js";import"./useAnimationId-n5GjykVw.js";import"./ActivePoints-Bo6-hXPj.js";import"./Dot-S_RimJ32.js";import"./RegisterGraphicalItemId-B8RWrhFG.js";import"./ErrorBarContext-DuvOSHRK.js";import"./GraphicalItemClipPath-C_jr7WWD.js";import"./SetGraphicalItem-C2V6xjnq.js";import"./getRadiusAndStrokeWidthFromDot-Cf72lShV.js";import"./ActiveShapeUtils-EHYmL-db.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-ElmD4pc-.js";import"./Rectangle-BOVHDpEg.js";import"./util-Dxo8gN5i.js";import"./Sector-E5xpJSOO.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
