import{r as p,R as t}from"./iframe-Co7Udrye.js";import{L as n}from"./LineChart-DrShy5NM.js";import{R as s}from"./zIndexSlice-DOrD3bq8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-uGTq3yzf.js";import{X as d}from"./XAxis-C4fRrpXS.js";import{Y as y}from"./YAxis-CRk-eV3B.js";import{L as u}from"./Legend-DZTzeHvv.js";import{L as h}from"./Line-x-R_Kf7-.js";import{T as g}from"./Tooltip-nc81_9QB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CzRhzMVT.js";import"./resolveDefaultProps-Dj6LZrRJ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-e3Zjl34d.js";import"./throttle-Cc_t6lxE.js";import"./index-5ZcPFJjn.js";import"./index-CzbcfkCz.js";import"./polarAxisSelectors-c8_8zpzH.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DSuWQh9E.js";import"./index-DQWwvV1b.js";import"./index-CKK_KqSf.js";import"./renderedTicksSlice-Isf4L0Ae.js";import"./index-CXV1GNFt.js";import"./fillDefinitions-CeRUcb47.js";import"./CartesianChart-CFLJJfWX.js";import"./chartDataContext-BKcXeGAI.js";import"./CategoricalChart-DPV1qzDX.js";import"./CartesianAxis-CBeq856j.js";import"./Layer-C65liL5F.js";import"./Text-DVQecdV7.js";import"./ZIndexLayer-DEtSsufZ.js";import"./Label-DffVq635.js";import"./types-CNLXZtmS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-zaaHBVPb.js";import"./symbol-B6ox5qf9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-yaxFxPbx.js";import"./uniqBy-HSw8sR7S.js";import"./iteratee-wNQh5Cd7.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CTNqeiLd.js";import"./step-hcE1AvzR.js";import"./dataEntryStyles-KlXlC10J.js";import"./ActivePoints-DbiUIU0R.js";import"./Dot-i29ttLNG.js";import"./activeStyles-dIWWSidH.js";import"./useAnimationId-DDJ6zjpL.js";import"./ErrorBarContext-DzV5SKcC.js";import"./SetGraphicalItem-CrBdfN6J.js";import"./getRadiusAndStrokeWidthFromDot-Bxe1mCKc.js";import"./ActiveShapeUtils-CIdGHQK5.js";import"./useEffectiveDataKey-C3nLlcoP.js";import"./Cross-D5k0JUgR.js";import"./Rectangle-CFZCBY1B.js";import"./util-Dxo8gN5i.js";import"./Sector-BXDrijJd.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
