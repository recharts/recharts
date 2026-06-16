import{r as n,R as t}from"./iframe-D8_PwwQn.js";import{L as p}from"./LineChart-BrDOYw18.js";import{R as s}from"./zIndexSlice-D3hIREVO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cq-Nn9aG.js";import{X as d}from"./XAxis-BMXTihse.js";import{Y as y}from"./YAxis-B3qPS3l7.js";import{L as u}from"./Legend-5_4UUsnm.js";import{L as h}from"./Line-Dtm97aFG.js";import{T as g}from"./Tooltip-BWwWiBy3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DSRWnM09.js";import"./index-BYYXq0C_.js";import"./index-DGMH0rdv.js";import"./index-ComLpA2A.js";import"./index-Bf27XMU5.js";import"./immer-B4u9UiQz.js";import"./get-VOiq-nzz.js";import"./renderedTicksSlice-Dazc5DIT.js";import"./axisSelectors-GpzB0aa8.js";import"./d3-scale-B_gxMkbZ.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-CDlH06hb.js";import"./isWellBehavedNumber-I9OE6uzw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-VfOncxQc.js";import"./chartDataContext-CFZ_6_Pd.js";import"./CategoricalChart-DVNyDBwI.js";import"./CartesianAxis-AGoux6hi.js";import"./Layer-DIbVHc_A.js";import"./Text-Dcw4f9im.js";import"./DOMUtils-BuLBbKXn.js";import"./Label-DYAIx6Pc.js";import"./ZIndexLayer-Dhl_4keR.js";import"./types-C59kAQfA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-c0arjVJJ.js";import"./symbol-CSoPhs5Y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CXqerjyX.js";import"./uniqBy-DiyPPqVx.js";import"./iteratee-DoFufU5s.js";import"./Curve-BnWchyuA.js";import"./step-ebfpa1zR.js";import"./AnimatedItems-Bi3B25M2.js";import"./useAnimationId-BP5XfAv2.js";import"./ActivePoints-C2Pj95p4.js";import"./Dot-BJ21P9KG.js";import"./RegisterGraphicalItemId-I3cDOhkS.js";import"./ErrorBarContext-uaJHV0aS.js";import"./GraphicalItemClipPath-DA-AqBBR.js";import"./SetGraphicalItem-Clhc-wET.js";import"./getRadiusAndStrokeWidthFromDot-B9utXb_M.js";import"./ActiveShapeUtils-TdP-NoHF.js";import"./Cross-DzzeZn6L.js";import"./Rectangle-DIl7exJy.js";import"./Sector-CqYmo_YS.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
