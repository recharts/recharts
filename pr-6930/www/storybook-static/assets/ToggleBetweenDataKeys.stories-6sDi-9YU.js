import{r as n,e as t}from"./iframe-BUAHB1JE.js";import{L as p}from"./LineChart-CjXMrxBR.js";import{R as s}from"./arrayEqualityCheck-D5cvBvD0.js";import{C as c}from"./CartesianGrid-kaY3iQec.js";import{X as l}from"./XAxis-DeVneqRd.js";import{Y as d}from"./YAxis-DerY_BUY.js";import{L as y}from"./Legend-BtH_8EdQ.js";import{L as h}from"./Line-BMwtlPHX.js";import{T as u}from"./Tooltip-BFW9R_rs.js";import{R as g}from"./RechartsHookInspector-DyBVLxQ5.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3Kz3rBL.js";import"./hooks-CLHcqW-j.js";import"./axisSelectors-nwFqxBSg.js";import"./zIndexSlice-DtimrYBU.js";import"./resolveDefaultProps-DB3crruI.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-CykHEv8Z.js";import"./chartDataContext-CsNatWbQ.js";import"./CategoricalChart-CgjnwgmC.js";import"./CartesianAxis-Ne59jWj5.js";import"./Layer-Cm056lbD.js";import"./Text-Cz010pA5.js";import"./DOMUtils-xg92JkXT.js";import"./Label-DycKUeOS.js";import"./ZIndexLayer-CvBAZeUB.js";import"./types-ztb1_leN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B668NUUf.js";import"./Curve-U_sOEQqK.js";import"./useElementOffset-DeXK_2aY.js";import"./iteratee-ca00GqX-.js";import"./ReactUtils-kUjnR9HA.js";import"./ActivePoints-pyP3ozvA.js";import"./Dot-BGsAxFXQ.js";import"./RegisterGraphicalItemId-Wzb-45_P.js";import"./ErrorBarContext-BPyiRwXa.js";import"./GraphicalItemClipPath-DAz0o25b.js";import"./SetGraphicalItem-jsgYVNOw.js";import"./useAnimationId-Dqqe1r9b.js";import"./getRadiusAndStrokeWidthFromDot-Dv5iWKAB.js";import"./ActiveShapeUtils-IOesA3uZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5TZFuIg.js";import"./Trapezoid-DhqC00At.js";import"./Sector-ZEGPqrgm.js";import"./Cross-Oq6lmmzT.js";import"./index-C8QR5MVL.js";import"./ChartSizeDimensions-DxM1dHTb.js";import"./OffsetShower-CLEQK-Rx.js";import"./PlotAreaShower-Xx92qV_c.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
