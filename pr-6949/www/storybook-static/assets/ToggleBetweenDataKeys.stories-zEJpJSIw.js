import{r as n,e as t}from"./iframe-CehQ8xFj.js";import{L as p}from"./LineChart-DmboQs5S.js";import{R as s}from"./arrayEqualityCheck-CJf3kznu.js";import{C as c}from"./CartesianGrid-BqtWDT0T.js";import{X as l}from"./XAxis-Dibf-8ej.js";import{Y as d}from"./YAxis-D-v27uKG.js";import{L as y}from"./Legend-Bj4cUftl.js";import{L as h}from"./Line-7p-G_wDt.js";import{T as u}from"./Tooltip-y2TRM86e.js";import{R as g}from"./RechartsHookInspector-C9Dv8rR_.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DUmIU6Xd.js";import"./hooks-CfryKUEV.js";import"./axisSelectors-BMvdINl-.js";import"./zIndexSlice-39s27tLx.js";import"./resolveDefaultProps-C1y00WFc.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-B0Z5fEtd.js";import"./chartDataContext-BU4Ti452.js";import"./CategoricalChart-BJ_PCHx8.js";import"./CartesianAxis-CZCa0md7.js";import"./Layer-6nj2T2Rl.js";import"./Text-BXNpWGIz.js";import"./DOMUtils-B5Ex3wvu.js";import"./Label-Dw6m4C0Z.js";import"./ZIndexLayer-DeWQbK55.js";import"./types-CYKcJHFL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D-9teC2q.js";import"./Curve-D1ENGCAK.js";import"./useElementOffset-tZncUcCf.js";import"./iteratee-5PeM9vti.js";import"./ReactUtils-tMfbrahw.js";import"./ActivePoints-BwDt8lt_.js";import"./Dot-BD7d-X5L.js";import"./RegisterGraphicalItemId-BnjCFZmO.js";import"./ErrorBarContext-CUQfGU6Y.js";import"./GraphicalItemClipPath-DrVbej_0.js";import"./SetGraphicalItem-BcLmHvcl.js";import"./useAnimationId-D1z7wJlQ.js";import"./getRadiusAndStrokeWidthFromDot-BvetFLdH.js";import"./ActiveShapeUtils-DjjpZslN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5fxMoAB.js";import"./Trapezoid-Cym11nDl.js";import"./Sector-mF7w8-S5.js";import"./Cross-Cnvcd78W.js";import"./index-jUFHLVIb.js";import"./ChartSizeDimensions-CfEeTzES.js";import"./OffsetShower-BbVpqDQS.js";import"./PlotAreaShower-BZ3neXdt.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
