import{r as p,R as t}from"./iframe-DNnhIzqd.js";import{L as n}from"./LineChart-DhCmMB0O.js";import{R as s}from"./zIndexSlice-CZnRUfU-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BoinnBP8.js";import{X as d}from"./XAxis-DyyKFn3c.js";import{Y as y}from"./YAxis-DL1XukoQ.js";import{L as u}from"./Legend-rRcOGwD-.js";import{L as h}from"./Line-Bslt7b3k.js";import{T as g}from"./Tooltip-Dhrf56F8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CrR43_nu.js";import"./resolveDefaultProps-CTqEvKA7.js";import"./get-CjriyByo.js";import"./axisSelectors-D3RI42dK.js";import"./throttle-QyoUWs98.js";import"./index-WikYS3OE.js";import"./index-C-IHZC0A.js";import"./polarAxisSelectors-D96CZuW6.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-DjL9qVWl.js";import"./index-DDptWEzO.js";import"./index-B4kmWeHl.js";import"./renderedTicksSlice-CiWxl1hZ.js";import"./index-DCQUdeKB.js";import"./fillDefinitions-C2isIUYI.js";import"./CartesianChart-Dh9mzh7h.js";import"./chartDataContext-C9vkNbCm.js";import"./CategoricalChart-Baa8HnHb.js";import"./CartesianAxis-DyWgnQe6.js";import"./Layer-BC8osa1v.js";import"./Text-eO__rozb.js";import"./ZIndexLayer-BbOOCV2_.js";import"./Label-zRO_Glrc.js";import"./types-BRWBXBDp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DFH9iE38.js";import"./symbol-B9mQM-FG.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BaFq-POl.js";import"./uniqBy-_gekbtiv.js";import"./iteratee-6f6iZKQ8.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-D2jL9mPV.js";import"./Curve-BuuEl7Oa.js";import"./step-CcvBplbA.js";import"./dataEntryStyles-BLzS4I_n.js";import"./ActivePoints-CcA8jx8b.js";import"./Dot-1G0Boo2p.js";import"./activeStyles-C2NC3gaF.js";import"./useAnimationId-nuwJNMaM.js";import"./ErrorBarContext-BEOQHAHp.js";import"./SetGraphicalItem-CNXPVtw_.js";import"./ActiveShapeUtils-BT3Mq8P-.js";import"./useEffectiveDataKey-DDl_vZE8.js";import"./Cross-Q3vpjsWn.js";import"./Rectangle-BldvyN6i.js";import"./util-Dxo8gN5i.js";import"./Sector-DVFeULU9.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
