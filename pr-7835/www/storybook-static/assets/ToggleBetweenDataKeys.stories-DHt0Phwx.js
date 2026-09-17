import{r as p,R as t}from"./iframe-BZ8dVzH9.js";import{L as n}from"./LineChart-CBhIn0rM.js";import{R as s}from"./zIndexSlice-alAuneH8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DSYnDJJQ.js";import{X as d}from"./XAxis-CnHMXMmb.js";import{Y as y}from"./YAxis-sJ36Ww1v.js";import{L as u}from"./Legend-CyrLGj5T.js";import{L as h}from"./Line-BHPleON2.js";import{T as g}from"./Tooltip-BvahTYj9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BUL_ZWsP.js";import"./resolveDefaultProps-DGRkN7my.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bf9eJXot.js";import"./throttle-Gvesfo2A.js";import"./index-BG6e4aCS.js";import"./index-05PttkMT.js";import"./isWellBehavedNumber-DuT8v1eR.js";import"./d3-scale-BqJh_GJr.js";import"./index-Bh_WxC72.js";import"./index-TQNe-Pfx.js";import"./renderedTicksSlice-CdbAedzg.js";import"./index-1GZEZdCR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPDbtls9.js";import"./chartDataContext-Dooqfk1y.js";import"./CategoricalChart-wlCT99n2.js";import"./CartesianAxis-ZGFemc86.js";import"./Layer-DFGb6VX8.js";import"./Text-Sov8IyzM.js";import"./DOMUtils-B5j94FrC.js";import"./useId-Cmc9xIYY.js";import"./useBackwardsCompatibleTheme-mp8lDntE.js";import"./Label-D8Xv73in.js";import"./ZIndexLayer-By4t7zGO.js";import"./types-JZ66y424.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C0TFMyrU.js";import"./symbol-qUdoioFN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C2gbVgRM.js";import"./uniqBy-DrWsEjAm.js";import"./iteratee-CHJKpI4A.js";import"./Curve-GkKc5FU6.js";import"./step-BzQ2FL9y.js";import"./AnimatedItems-DFtjNgrp.js";import"./useAnimationId-CAROHwad.js";import"./ActivePoints-BRuknYci.js";import"./Dot-d3AKepe-.js";import"./RegisterGraphicalItemId-DjZaW0U6.js";import"./ErrorBarContext-Bbbe3Bh6.js";import"./GraphicalItemClipPath-Bqlh9UVi.js";import"./SetGraphicalItem-C_OKi3Rd.js";import"./getRadiusAndStrokeWidthFromDot-BRivEq7U.js";import"./ActiveShapeUtils-DjhXDsDC.js";import"./useGraphicalItemIdentity-DrldTHyX.js";import"./Cross-BYdL9wbW.js";import"./Rectangle-wZEMhZV0.js";import"./util-Dxo8gN5i.js";import"./Sector-BPtTipaO.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
