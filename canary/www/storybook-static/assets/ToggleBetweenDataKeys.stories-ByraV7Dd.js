import{r as n,e as t}from"./iframe-xRIz3qbF.js";import{L as p}from"./LineChart-XctFw3Wu.js";import{R as s}from"./arrayEqualityCheck-BdN7i4MO.js";import{C as c}from"./CartesianGrid-c2xUxGhI.js";import{X as l}from"./XAxis-k5taAUht.js";import{Y as d}from"./YAxis-cxDuI0HH.js";import{L as y}from"./Legend-BRXMMC1y.js";import{L as h}from"./Line-7Y3laxmY.js";import{T as u}from"./Tooltip-CWNo9MQC.js";import{R as g}from"./RechartsHookInspector-CC_tuF9F.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-y0J6uKM2.js";import"./hooks-0oNAH-Yd.js";import"./axisSelectors-CpIgH2EX.js";import"./zIndexSlice-BfBE69OZ.js";import"./renderedTicksSlice-BCeSf2F6.js";import"./resolveDefaultProps-CV23Ehqm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-taOmKSzk.js";import"./chartDataContext-BSH8i1Pa.js";import"./CategoricalChart-Dtl4cVT_.js";import"./CartesianAxis-7YSNf4Ta.js";import"./Layer-BmRFOYbB.js";import"./Text-mQwo9EXr.js";import"./DOMUtils-ByQBTR3z.js";import"./Label-w-b8AlxD.js";import"./ZIndexLayer-CoDEXRAT.js";import"./types-BXkuDJCo.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DxmxARm7.js";import"./Curve-DYmyqph4.js";import"./useElementOffset-DkvR4EFs.js";import"./iteratee-CaECTpuh.js";import"./ReactUtils-Cl__7Wwh.js";import"./ActivePoints-B2mIzCuP.js";import"./Dot-hvJwAgko.js";import"./RegisterGraphicalItemId-E0tByVzF.js";import"./ErrorBarContext-BFUqajde.js";import"./GraphicalItemClipPath-C4i3jj0c.js";import"./SetGraphicalItem-CTKmQnUP.js";import"./useAnimationId-Ca9wkO8e.js";import"./getRadiusAndStrokeWidthFromDot-D90JWDGP.js";import"./ActiveShapeUtils-DVUTgNxA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DArYXtns.js";import"./Trapezoid-D3wL9tbg.js";import"./Sector-BtgfQr6b.js";import"./Cross-DgBjufwG.js";import"./index-BTLusoTB.js";import"./ChartSizeDimensions-C5NwM1WB.js";import"./OffsetShower-DskOXH-F.js";import"./PlotAreaShower-CKLNnJBS.js";const Kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,ft as __namedExportsOrder,Kt as default};
