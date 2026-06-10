import{r as n,R as t}from"./iframe-Sgab1gUe.js";import{L as p}from"./LineChart-C9bBA6s1.js";import{R as s}from"./zIndexSlice-BrzbkbEI.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DPBWGAPf.js";import{X as d}from"./XAxis-Be4f_XLH.js";import{Y as y}from"./YAxis-B3Csn4tH.js";import{L as u}from"./Legend-C53AcP9l.js";import{L as h}from"./Line-BamkpRBx.js";import{T as g}from"./Tooltip-Cqjxr8eG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DTduNXvU.js";import"./index-BkOZFEZb.js";import"./index-BsnSQtU-.js";import"./index-BLkVzwy_.js";import"./index-90Rz6XAP.js";import"./immer-jmjMSL8D.js";import"./get-BJyukGiE.js";import"./renderedTicksSlice-CVwVFFGF.js";import"./axisSelectors-8GhzU9TS.js";import"./d3-scale-Bg12AftI.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CNXENHcX.js";import"./isWellBehavedNumber-CJXdc3tU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CY44eXB-.js";import"./chartDataContext-NIXL8iaZ.js";import"./CategoricalChart-DwEPGx0k.js";import"./CartesianAxis-s1UQ10e0.js";import"./Layer-Dy3UQ8V8.js";import"./Text-Bwmob33r.js";import"./DOMUtils-CmwtFJfy.js";import"./Label-pFFfknml.js";import"./ZIndexLayer-DBRcOItw.js";import"./types-CA2ETL4c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CZkuTCUm.js";import"./symbol-BXAKInVH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-aoLYr1Hs.js";import"./uniqBy-D-eprie9.js";import"./iteratee-DfxU7rfy.js";import"./Curve-DfhFB3Po.js";import"./step-CWFXO9ga.js";import"./AnimatedItems-CFJVJstG.js";import"./useAnimationId-D0bn0X4e.js";import"./ActivePoints-_LL_I5Qc.js";import"./Dot-BvExYRbB.js";import"./RegisterGraphicalItemId-BSYxTo0u.js";import"./ErrorBarContext-WB4epqm3.js";import"./GraphicalItemClipPath-BB2uZM8Q.js";import"./SetGraphicalItem-Cu_IpSGW.js";import"./getRadiusAndStrokeWidthFromDot-bqVMqQYj.js";import"./ActiveShapeUtils-CypivSKC.js";import"./Cross-BAllvjaw.js";import"./Rectangle-CGR64IYi.js";import"./Sector-D8fKowAH.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
