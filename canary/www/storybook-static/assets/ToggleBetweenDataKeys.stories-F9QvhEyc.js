import{r as n,e as t}from"./iframe-DyjRblV4.js";import{L as p}from"./LineChart-CEYo_BwH.js";import{R as s}from"./arrayEqualityCheck-BCBk4eJo.js";import{C as c}from"./CartesianGrid-RGlkHQlO.js";import{X as l}from"./XAxis-3tj5XX5g.js";import{Y as d}from"./YAxis-CV1izHWi.js";import{L as y}from"./Legend-CSK-HtRb.js";import{L as h}from"./Line-mAT0SQrf.js";import{T as u}from"./Tooltip-B3pmXPWJ.js";import{R as g}from"./RechartsHookInspector-CLSiVssf.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CFEsmCfM.js";import"./index-OiAZIktC.js";import"./immer-DeoYJGCn.js";import"./hooks-CiwwtQbj.js";import"./axisSelectors-C6wd-jHd.js";import"./d3-scale-BncasbBD.js";import"./zIndexSlice-D853Na5_.js";import"./renderedTicksSlice-bDrbmMTk.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DR7Wyq8A.js";import"./chartDataContext-CG_sj1-6.js";import"./CategoricalChart-DetmSIYy.js";import"./resolveDefaultProps-4AlTuZQw.js";import"./CartesianAxis-D4rKauGt.js";import"./Layer-D5cQtuvM.js";import"./Text-BbnvQ86I.js";import"./DOMUtils-Byght_Oi.js";import"./Label-DnTlQwVU.js";import"./ZIndexLayer-B-XtZ0gD.js";import"./types-ffHtiOpO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BQK3uzvy.js";import"./symbol-5KBLnT74.js";import"./step-B9ndRdpI.js";import"./useElementOffset-BrnMwT_8.js";import"./uniqBy-CRPdqXmG.js";import"./iteratee-DQuCOy5T.js";import"./ReactUtils-Q3LPRUl3.js";import"./ActivePoints-GgK6dtPd.js";import"./Dot-DOEX6Lb3.js";import"./RegisterGraphicalItemId-DvhT43Lq.js";import"./ErrorBarContext-DYFWZfKJ.js";import"./GraphicalItemClipPath-DHsoSQ6I.js";import"./SetGraphicalItem-DjBG-u5C.js";import"./useAnimationId-DZzgYgKg.js";import"./getRadiusAndStrokeWidthFromDot-B3zNGCYt.js";import"./ActiveShapeUtils-DLWy5yPh.js";import"./isPlainObject-B8lTeUZ1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-4UGNDp.js";import"./Trapezoid-BpRYxRsm.js";import"./Sector-CxnAykfe.js";import"./Curve-Cf07iBBR.js";import"./Cross-CEcmPXJ_.js";import"./index-B9JdmiBC.js";import"./ChartSizeDimensions-BWUwefGk.js";import"./OffsetShower-DxfCy4YL.js";import"./PlotAreaShower-DD9Xt5FU.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
