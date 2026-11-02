import{r as p,R as t}from"./iframe-D_uMBlIp.js";import{L as n}from"./LineChart-BPXGQ-9z.js";import{R as s}from"./zIndexSlice-Cqv84PqK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-KrPu7pZ6.js";import{X as d}from"./XAxis-ChmGUeiL.js";import{Y as y}from"./YAxis-Q267elff.js";import{L as u}from"./Legend-BMwEwXrz.js";import{L as h}from"./Line-DDu_6whQ.js";import{T as g}from"./Tooltip-D9RzUAhb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-gFpkW2lO.js";import"./resolveDefaultProps-B5MtCWD4.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BH5tVjmc.js";import"./throttle-z9Tdm54L.js";import"./index-r7_kFCKH.js";import"./index-DecxnzXH.js";import"./polarAxisSelectors-PGXXztW2.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-De88z7ff.js";import"./index-BKkZnPf8.js";import"./index-BDJW8MG1.js";import"./renderedTicksSlice-CTrf5tAn.js";import"./index-DolxpBYu.js";import"./fillDefinitions-Cx6GiVLd.js";import"./CartesianChart-CnGjeW1j.js";import"./ZIndexPortal-CZb6tOfo.js";import"./CategoricalChart-BP_Fs5vF.js";import"./CartesianAxis-CaJmW0E9.js";import"./Layer-B6KF3bsJ.js";import"./Text-CgSvhKKx.js";import"./DOMUtils-BNA43YVy.js";import"./ZIndexLayer-B-ClRqkn.js";import"./Label-xcLv9MPJ.js";import"./types-DFJuzk9K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C6zxOEV9.js";import"./symbol-kWjCqPSu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-cdiG7Q_h.js";import"./uniqBy-CwR9iSeD.js";import"./iteratee-C8wVZEUu.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D7Q9HT-0.js";import"./step-CndKQIzs.js";import"./LabelList-lhjdoetJ.js";import"./ActivePoints-CutcUh5t.js";import"./Dot-CWRVOvZp.js";import"./activeStyles-Dd3au7Dm.js";import"./useAnimationId-BUGTxmjG.js";import"./dataEntryStyles-BSEnNQ9n.js";import"./ErrorBarContext-d3qxHiYM.js";import"./SetGraphicalItem-jkYvUFdr.js";import"./getRadiusAndStrokeWidthFromDot-DtDP844S.js";import"./ActiveShapeUtils-CosApWaB.js";import"./useEffectiveDataKey-CgejumXO.js";import"./Cross-sb0TeG48.js";import"./Rectangle-D8h04Bjl.js";import"./util-Dxo8gN5i.js";import"./Sector-b-nTepMT.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
