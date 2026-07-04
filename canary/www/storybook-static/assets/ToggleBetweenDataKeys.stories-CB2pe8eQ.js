import{r as n,R as t}from"./iframe-CwAvad--.js";import{L as p}from"./LineChart-_-H7-oS0.js";import{R as s}from"./zIndexSlice-B2fpzDns.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DllQ9z3q.js";import{X as d}from"./XAxis-BvogKVrk.js";import{Y as y}from"./YAxis-MJLPmDW2.js";import{L as u}from"./Legend-B1tdzHVH.js";import{L as h}from"./Line-6FU32cog.js";import{T as g}from"./Tooltip-Bt4YXD2U.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-yCiiQ5ZZ.js";import"./index-C7e37hiD.js";import"./index-Be6HzbxO.js";import"./index-Dn-gVD0q.js";import"./index-Bp9sH-Ly.js";import"./throttle-CrTklCSM.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-DxVowf0r.js";import"./axisSelectors-gPKIePgu.js";import"./resolveDefaultProps-IMOML7UF.js";import"./isWellBehavedNumber-zbfLgurd.js";import"./d3-scale-D8xH9yG8.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DnHhaR9q.js";import"./chartDataContext-QAMmb-FO.js";import"./CategoricalChart-Bfs9hS_5.js";import"./CartesianAxis-Bp0BWyNg.js";import"./Layer-DrEfcBvU.js";import"./Text-CMmFO1Ku.js";import"./DOMUtils-Wq5LU4mE.js";import"./Label-Bfni9WDi.js";import"./ZIndexLayer-nfC8QR9T.js";import"./types-MLS83tAs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Gg7Vpfem.js";import"./symbol-BMZOsAHr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cg3HrgTI.js";import"./uniqBy-BQQiLG87.js";import"./iteratee-A6arNK9y.js";import"./Curve-D0-SKbNI.js";import"./step-2IVSrnG4.js";import"./AnimatedItems-ChIe5_bS.js";import"./useAnimationId--5AtISHD.js";import"./ActivePoints-C9ktctM9.js";import"./Dot-Dc5RP_RF.js";import"./RegisterGraphicalItemId-C2zHigBB.js";import"./ErrorBarContext-CChsqgpp.js";import"./GraphicalItemClipPath-BiAQEIv1.js";import"./SetGraphicalItem-BRzb5Fh_.js";import"./getRadiusAndStrokeWidthFromDot-BTB7kz6B.js";import"./ActiveShapeUtils-BNg4U5cF.js";import"./Cross-Du1c2uqK.js";import"./Rectangle-CDEEKCGc.js";import"./util-Dxo8gN5i.js";import"./Sector-6KETZnCF.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
