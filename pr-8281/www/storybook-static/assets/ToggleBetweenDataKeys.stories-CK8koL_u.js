import{r as p,R as t}from"./iframe-Ctz7IHW3.js";import{L as n}from"./LineChart-DOcDLrdJ.js";import{R as s}from"./zIndexSlice-BOhKAINV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B14trDzl.js";import{X as d}from"./XAxis-C7TfuOxC.js";import{Y as y}from"./YAxis-B3lARwfm.js";import{L as u}from"./Legend-BzVily9F.js";import{L as h}from"./Line-DAx-7uu_.js";import{T as g}from"./Tooltip-r3g93jn4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B5-BQ43L.js";import"./resolveDefaultProps--WcksQI-.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CmsQwY11.js";import"./throttle-BK8aOUUW.js";import"./index-Tzm4T3gC.js";import"./index-CP4Z1Y6_.js";import"./polarAxisSelectors-2S85hvBv.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B7S8RTAk.js";import"./index-D9m5BeGD.js";import"./index-DTCcovWx.js";import"./renderedTicksSlice-zg3AzzRh.js";import"./index-D8taZNOk.js";import"./fillDefinitions-BjpebX6W.js";import"./CartesianChart-Dig5bGoH.js";import"./chartDataContext-CSFdu_tp.js";import"./CategoricalChart-pUCO11xA.js";import"./CartesianAxis-D2YA5lRA.js";import"./Layer-DwO5QDCB.js";import"./Text-d5sUAgwt.js";import"./ZIndexLayer-GawJhFHW.js";import"./Label-Cx25Byjk.js";import"./types-o_vm3YHF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D3D7M8Jk.js";import"./symbol-B5JmXw1t.js";import"./path-BBMZd4YL.js";import"./useElementOffset-ByunqyrY.js";import"./uniqBy-bNtr2rug.js";import"./iteratee-DTnJTgMl.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CcQspbXE.js";import"./Curve-BmO4aPRH.js";import"./step-CWzaq-TC.js";import"./dataEntryStyles-DhE1x9oW.js";import"./ActivePoints-BEz7jJwJ.js";import"./Dot-Djhcp3TT.js";import"./activeStyles-DYt1MbCF.js";import"./useAnimationId-CDmHN2F8.js";import"./ErrorBarContext-CWAd3_q9.js";import"./SetGraphicalItem-ZbovNH06.js";import"./ActiveShapeUtils-CHF2XahU.js";import"./useEffectiveDataKey-v8KMaUS0.js";import"./Cross-BLSzdsqy.js";import"./Rectangle-BKam2C2s.js";import"./util-Dxo8gN5i.js";import"./Sector-DjfR3mh1.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
