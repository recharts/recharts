import{r as n,e as t}from"./iframe-DZUAPGWU.js";import{L as p}from"./LineChart-BnAuqBrH.js";import{R as s}from"./arrayEqualityCheck-B_Kj_5n3.js";import{C as c}from"./CartesianGrid--ez9WkGE.js";import{X as l}from"./XAxis-B_pa2cFU.js";import{Y as d}from"./YAxis-DpSUJ6BG.js";import{L as y}from"./Legend-Bo6_JZD5.js";import{L as h}from"./Line-LYCvK7Jw.js";import{T as u}from"./Tooltip-CAAh9KsA.js";import{R as g}from"./RechartsHookInspector-CTfD316c.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CZEU1xAf.js";import"./hooks-CmVGlUZA.js";import"./axisSelectors-DL2NuUaJ.js";import"./zIndexSlice-Wj6Lqt0c.js";import"./resolveDefaultProps-CTBUcsM2.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-DFIFFZ02.js";import"./chartDataContext-uOI58bDP.js";import"./CategoricalChart-DjpQG7hJ.js";import"./CartesianAxis-Cxo8uXUJ.js";import"./Layer-CUM7VYJb.js";import"./Text-m0PU0Hkx.js";import"./DOMUtils-B-ueGznT.js";import"./Label-BpGSAoxQ.js";import"./ZIndexLayer-48hS6z3u.js";import"./types-gnnl7DTW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CJWWl_NZ.js";import"./Curve-OnMyuRM1.js";import"./useElementOffset-BC7wqAzr.js";import"./iteratee-Ct_qYfh9.js";import"./ReactUtils-BwhtQEJo.js";import"./ActivePoints-DBfahspR.js";import"./Dot-Cev7F8Ms.js";import"./RegisterGraphicalItemId-D7Nyvpen.js";import"./ErrorBarContext-qHTOOodp.js";import"./GraphicalItemClipPath-BFVsLge8.js";import"./SetGraphicalItem-BexwVPUx.js";import"./useAnimationId-eGODZItY.js";import"./getRadiusAndStrokeWidthFromDot-CUXV8xqK.js";import"./ActiveShapeUtils-DDG505Mz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dm59FMII.js";import"./Trapezoid-B65I0G_8.js";import"./Sector-Bi4APoRd.js";import"./Cross-WyJkKwCu.js";import"./index-R3RI3I7Q.js";import"./ChartSizeDimensions-CMzQU2ij.js";import"./OffsetShower-B5l6vGiv.js";import"./PlotAreaShower-e0vK3Qeg.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
