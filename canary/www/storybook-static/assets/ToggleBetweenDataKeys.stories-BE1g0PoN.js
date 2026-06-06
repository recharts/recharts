import{r as n,R as t}from"./iframe-CfFwYGba.js";import{L as p}from"./LineChart-AHe7WCdb.js";import{R as s}from"./zIndexSlice-DfErsUYp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DWyJ9S1X.js";import{X as d}from"./XAxis-C1PjqHUu.js";import{Y as y}from"./YAxis-D4OA0xxQ.js";import{L as u}from"./Legend-CXn0w7Sh.js";import{L as h}from"./Line-1W0aDq6r.js";import{T as g}from"./Tooltip-D9G1T0b-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BG04mOMU.js";import"./index-jr7opHAK.js";import"./index-DNhYiVbG.js";import"./index-B1M76gQx.js";import"./index-DKyALkfw.js";import"./immer-ChF14mwi.js";import"./get-VqHCUeFt.js";import"./renderedTicksSlice-CeRHVXP-.js";import"./axisSelectors-DhigzgEo.js";import"./d3-scale-CO_OUUyv.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CNXn3RtZ.js";import"./isWellBehavedNumber-DNsnRpQn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BKL_0SO1.js";import"./chartDataContext-CvyqEHRa.js";import"./CategoricalChart-D8Sfn5Og.js";import"./CartesianAxis-DYBfrE-6.js";import"./Layer-CIeZ6xN1.js";import"./Text-6g8FEB5n.js";import"./DOMUtils-CelkDAhh.js";import"./Label-BfJ1m9lw.js";import"./ZIndexLayer-CO0_v3Z6.js";import"./types-B8Ju2LTD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DyL8V-3O.js";import"./symbol-DZxqdVbQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DHiFNrkV.js";import"./uniqBy-2uTalxV9.js";import"./iteratee-CgWzIoT6.js";import"./Curve-CvFToXA1.js";import"./step-Cz7LQHZ8.js";import"./AnimatedItems-DufJJ5tM.js";import"./useAnimationId-q4Azt8JP.js";import"./ActivePoints-BvFcDKGx.js";import"./Dot-CQusYe0D.js";import"./RegisterGraphicalItemId-DuA2mhLl.js";import"./ErrorBarContext-yluf_OAo.js";import"./GraphicalItemClipPath-CycB6t93.js";import"./SetGraphicalItem-BVwnEQ5r.js";import"./getRadiusAndStrokeWidthFromDot-ClnovYdE.js";import"./ActiveShapeUtils-BoiiDjBc.js";import"./Cross-CJdDez7_.js";import"./Rectangle-Dp-9d2wb.js";import"./Sector-BK2jXRga.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
