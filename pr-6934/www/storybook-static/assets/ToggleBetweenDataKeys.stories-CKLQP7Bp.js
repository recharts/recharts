import{r as n,e as t}from"./iframe-CpBR2FD-.js";import{L as p}from"./LineChart-CXQFgYYL.js";import{R as s}from"./arrayEqualityCheck-DfVEXElD.js";import{C as c}from"./CartesianGrid-BAFAxm3s.js";import{X as l}from"./XAxis-Cmud21dv.js";import{Y as d}from"./YAxis-CYDXfh77.js";import{L as y}from"./Legend-CSv-GvHn.js";import{L as h}from"./Line-CNjCQiDV.js";import{T as u}from"./Tooltip-CPsaw20l.js";import{R as g}from"./RechartsHookInspector-C3421ru3.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CoeBe9ik.js";import"./hooks-DedpoqIJ.js";import"./axisSelectors-BrZ6G91_.js";import"./zIndexSlice-BCiKU99h.js";import"./resolveDefaultProps-DmMqjKPI.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-B1Icaiih.js";import"./chartDataContext-XtQC6I5E.js";import"./CategoricalChart-Bb8UD5I8.js";import"./CartesianAxis-DIWnau3l.js";import"./Layer-DEK88535.js";import"./Text-Dhmw9EGu.js";import"./DOMUtils-BBsKE3Cz.js";import"./Label-DWBk7fhM.js";import"./ZIndexLayer-fbfZmhXg.js";import"./types-D4KZK8k1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-9dW_oll9.js";import"./Curve-DWHqQWsG.js";import"./useElementOffset-BaVJj_15.js";import"./iteratee-CgCvXk_a.js";import"./ReactUtils-VfTt9PFz.js";import"./ActivePoints-B3LyVgYO.js";import"./Dot-DiU-b5Rw.js";import"./RegisterGraphicalItemId-C5HCX42f.js";import"./ErrorBarContext-D_KmDbtZ.js";import"./GraphicalItemClipPath-VjF6EdyN.js";import"./SetGraphicalItem-BgcHabrg.js";import"./useAnimationId-CFZ1kX6W.js";import"./getRadiusAndStrokeWidthFromDot-Br3Pzfii.js";import"./ActiveShapeUtils-oHT1Tkw8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BPCbtxXK.js";import"./Trapezoid-gv9uLae-.js";import"./Sector-UZPxualI.js";import"./Cross-B1ZwX2Rm.js";import"./index-Dknhq_uL.js";import"./ChartSizeDimensions-BjsHMoDH.js";import"./OffsetShower-D-sUEdFp.js";import"./PlotAreaShower-BP-Vy4Nm.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
