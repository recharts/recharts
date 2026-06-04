import{r as n,R as t}from"./iframe-cxp8IH44.js";import{L as p}from"./LineChart-C3nI9I5A.js";import{R as s}from"./zIndexSlice-DVvPLO9J.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CDO8L1GF.js";import{X as d}from"./XAxis-BkiXq_ih.js";import{Y as y}from"./YAxis-cx-UkRCp.js";import{L as u}from"./Legend-oZ1KxmzA.js";import{L as h}from"./Line-Dugp2-IC.js";import{T as g}from"./Tooltip-C_xzS1J3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-9oJQLgI7.js";import"./index-CMrkNKT4.js";import"./index-BUvfJbFI.js";import"./index-CJSUwDUV.js";import"./index-B9dWKkkc.js";import"./immer-BpTgB28d.js";import"./get-nRRBkHtC.js";import"./renderedTicksSlice-BJt7M2Lj.js";import"./axisSelectors-zbfaG1VW.js";import"./d3-scale-DFFI4GOw.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-BXDigy9W.js";import"./isWellBehavedNumber-B-r9_3tz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CmvmLWgk.js";import"./chartDataContext-BRXzicv6.js";import"./CategoricalChart-xGtZpTrE.js";import"./CartesianAxis-HJMOOyg_.js";import"./Layer-B0Ha3WJZ.js";import"./Text-Bq45-f5m.js";import"./DOMUtils-BnT4arHk.js";import"./Label-C4cvj6qY.js";import"./ZIndexLayer-jeREbB3U.js";import"./types-CPiShJxU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DL674ctd.js";import"./symbol-CHf6y9zR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BnhYpe-p.js";import"./uniqBy-CsWIvFuw.js";import"./iteratee-rf_HbDXJ.js";import"./Curve-BrvgjqsR.js";import"./step-D24hPJDM.js";import"./AnimatedItems-C411RvpV.js";import"./useAnimationId-B_RJXvak.js";import"./ActivePoints-B4uvin-c.js";import"./Dot-DdYUl2fA.js";import"./RegisterGraphicalItemId-BwO4qHQJ.js";import"./ErrorBarContext-DMac8CzA.js";import"./GraphicalItemClipPath-B7_MorTP.js";import"./SetGraphicalItem-DEAw5QhZ.js";import"./getRadiusAndStrokeWidthFromDot-DjjQR4pM.js";import"./ActiveShapeUtils-DV6TMhk4.js";import"./Cross-GDshVim9.js";import"./Rectangle-ktcnKzBw.js";import"./Sector-BnL8gU7h.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
