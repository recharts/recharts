import{r as n,R as t}from"./iframe-CWavEj4K.js";import{L as p}from"./LineChart-BgC7HVQX.js";import{R as s}from"./zIndexSlice-5FODTzGQ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dzo1EOTg.js";import{X as d}from"./XAxis-eQhyZl4T.js";import{Y as y}from"./YAxis-DW5tby8v.js";import{L as u}from"./Legend-BdpiRDzw.js";import{L as h}from"./Line-CsLLlM8L.js";import{T as g}from"./Tooltip-BRYEDCb1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BHgaBn1E.js";import"./index-rtKProJN.js";import"./index-CB7M5YEf.js";import"./index-CAI0wlC8.js";import"./index-BUN8uoaU.js";import"./throttle-Bkho8TEt.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BaH7gash.js";import"./axisSelectors-XK5eG7GE.js";import"./resolveDefaultProps-Di3JUEKf.js";import"./isWellBehavedNumber-DmSAVoQw.js";import"./d3-scale-BaBPlFPk.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-0mhtnzxI.js";import"./chartDataContext-B5TlaDO0.js";import"./CategoricalChart-DbdrFP36.js";import"./CartesianAxis-CUeBd0Qu.js";import"./Layer-CGV1iRtS.js";import"./Text-DKOGU3E1.js";import"./DOMUtils-bwyz7eCe.js";import"./Label-BBFntxVE.js";import"./ZIndexLayer-BFe8VyCX.js";import"./types-BmbikVaN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-hO1GCjZB.js";import"./symbol-y17aD_bO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BUB8Afxb.js";import"./uniqBy-CCg55Ce9.js";import"./iteratee-DuHJ9aff.js";import"./Curve-Be2eVpFP.js";import"./step-De38Fzbp.js";import"./AnimatedItems-tOezhTob.js";import"./useAnimationId-DfkBBgp-.js";import"./ActivePoints-Bl1BNxPS.js";import"./Dot-DxpmSLW5.js";import"./RegisterGraphicalItemId-C4WMjaGC.js";import"./ErrorBarContext-DxKtXG2P.js";import"./GraphicalItemClipPath-CrXxzkB7.js";import"./SetGraphicalItem-DS2vQ-KW.js";import"./getRadiusAndStrokeWidthFromDot-CWHux7lI.js";import"./ActiveShapeUtils-DeeBbphL.js";import"./Cross-BIG51hIR.js";import"./Rectangle-B4KQS2cd.js";import"./util-Dxo8gN5i.js";import"./Sector-gkgCDT7g.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
