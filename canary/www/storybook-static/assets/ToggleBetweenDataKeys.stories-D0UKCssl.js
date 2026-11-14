import{r as p,R as t}from"./iframe-DtzldFfh.js";import{L as n}from"./LineChart-DvMezkvu.js";import{R as s}from"./zIndexSlice-PhkkSvay.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BD5I5N2b.js";import{X as d}from"./XAxis-BY5CXCjh.js";import{Y as y}from"./YAxis-CQZ6A0GW.js";import{L as u}from"./Legend-CCpYiMhz.js";import{L as h}from"./Line-BvNBRL71.js";import{T as g}from"./Tooltip-CXQtUWKg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-RpB-MHrg.js";import"./resolveDefaultProps-u2nTClVy.js";import"./get-cF5BDHN6.js";import"./axisSelectors-C2izPxUf.js";import"./throttle-Drk_UoQx.js";import"./index-CCZfAL_G.js";import"./index-CuN-tN9X.js";import"./polarAxisSelectors-IPVOZM3m.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmMEJmfI.js";import"./index-xLc8fata.js";import"./index-6_OYP7D7.js";import"./renderedTicksSlice-DbXdst8y.js";import"./index-OfVoCx4o.js";import"./fillDefinitions-4fWzE3Hc.js";import"./CartesianChart-D8rXmJzw.js";import"./chartDataContext-BNrACUYr.js";import"./CategoricalChart-Bkw2UtyY.js";import"./CartesianAxis-DxmrFkoo.js";import"./Layer-BcJtH6wk.js";import"./Text-BCSLlBnR.js";import"./ZIndexLayer-BWdFNyrE.js";import"./Label-DAuHelmL.js";import"./types-aakKZZv0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CvrtYxxZ.js";import"./symbol-D-v3LMsn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-0o51WQzY.js";import"./uniqBy-DSURNKI0.js";import"./iteratee-BoqSWeEv.js";import"./isArguments-yB-y1yaH.js";import"./Curve-xzGpqU4W.js";import"./step-Dbgt0c4J.js";import"./dataEntryStyles-kT4_La43.js";import"./ActivePoints-klnIqfJn.js";import"./Dot-DiyqsLJ3.js";import"./activeStyles-BesdgLFE.js";import"./useAnimationId-Dzlg4g7S.js";import"./ErrorBarContext-CFgTAQbG.js";import"./SetGraphicalItem-31k7kJYq.js";import"./getRadiusAndStrokeWidthFromDot-CtzQdQd8.js";import"./ActiveShapeUtils-lUUDRG4C.js";import"./useEffectiveDataKey-BP-D5MQu.js";import"./Cross-D_bufb52.js";import"./Rectangle-sBf3lxLL.js";import"./util-Dxo8gN5i.js";import"./Sector-CK9Jq0GA.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
