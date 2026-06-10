import{r as n,R as t}from"./iframe-CRd1fYKG.js";import{L as p}from"./LineChart-CxL5GP7c.js";import{R as s}from"./zIndexSlice-BEDqBT5s.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Ddze4Uvk.js";import{X as d}from"./XAxis-CFDNTKtN.js";import{Y as y}from"./YAxis-CcTJnWbU.js";import{L as u}from"./Legend-C0BtyMBO.js";import{L as h}from"./Line-C_2j51dl.js";import{T as g}from"./Tooltip-C_MO0xVu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CTRhzR3z.js";import"./index-Co5B8-DW.js";import"./index-Dyy4uRrG.js";import"./index-Cu0dCOlk.js";import"./index-COR3Qgsn.js";import"./immer-DuXdSz_W.js";import"./get-CAg3-hN5.js";import"./renderedTicksSlice-BwoXfhkK.js";import"./axisSelectors-CW_HZ1K1.js";import"./d3-scale-Bw_PCS9h.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-C_1LRrwf.js";import"./isWellBehavedNumber-IulUlDH2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-_Ts9MuUK.js";import"./chartDataContext-24IFZ5R3.js";import"./CategoricalChart-7SQT56eo.js";import"./CartesianAxis-BngYAupc.js";import"./Layer-uzXkuSL7.js";import"./Text-BzOWhyUQ.js";import"./DOMUtils-meWqI4ST.js";import"./Label-GPMVhHkr.js";import"./ZIndexLayer-CMZSY73E.js";import"./types-fr95e_gP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BPYBvDTw.js";import"./symbol-F3eW-PP4.js";import"./path-DyVhHtw_.js";import"./useElementOffset-zRETVJYr.js";import"./uniqBy-VdDR52By.js";import"./iteratee-D7Xt4tdY.js";import"./Curve-CFiA9ic7.js";import"./step-COdk81Z_.js";import"./AnimatedItems-CGUpOpVe.js";import"./useAnimationId-B3UhTZxg.js";import"./ActivePoints-BZ8_19th.js";import"./Dot-BUHGfLi1.js";import"./RegisterGraphicalItemId-CFlZHpEu.js";import"./ErrorBarContext-DHhZn8TN.js";import"./GraphicalItemClipPath-BHaSLCrX.js";import"./SetGraphicalItem-DVL07t4G.js";import"./getRadiusAndStrokeWidthFromDot-BjbsTAVF.js";import"./ActiveShapeUtils-DdflEQCA.js";import"./Cross-D5hRXggN.js";import"./Rectangle-KYXVSxkg.js";import"./Sector-YCe3HcyT.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
