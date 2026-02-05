import{r as n,e as t}from"./iframe-CWWhV85a.js";import{L as p}from"./LineChart-Cv3wl7Sx.js";import{R as s}from"./arrayEqualityCheck-BrvYjDvj.js";import{C as c}from"./CartesianGrid-C3-6Xyui.js";import{X as l}from"./XAxis-Csdvagzn.js";import{Y as d}from"./YAxis-DfgzXKJt.js";import{L as y}from"./Legend-CAfyJPWT.js";import{L as h}from"./Line-pUdx1ebJ.js";import{T as u}from"./Tooltip-BIDBFQ2N.js";import{R as g}from"./RechartsHookInspector-C1-BzxNv.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B76lvk5b.js";import"./hooks-hmYRkmbQ.js";import"./axisSelectors-DefXTn4I.js";import"./zIndexSlice-DakyRb4z.js";import"./resolveDefaultProps-C1e51uNd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-9TMDzitE.js";import"./chartDataContext-B_cxSlaG.js";import"./CategoricalChart-B6q7J0Mb.js";import"./CartesianAxis-BLwbg9OG.js";import"./Layer-CEGJXWpg.js";import"./Text-BGl_BLD8.js";import"./DOMUtils-DdesQF23.js";import"./Label-sj2OS_tg.js";import"./ZIndexLayer-CsGSNJ1a.js";import"./types-HO0i5iTi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D5GFnflg.js";import"./Curve-CEhuq5Wz.js";import"./useElementOffset-CDAAba6N.js";import"./iteratee-5pGWl1WW.js";import"./ReactUtils-erR6fuGc.js";import"./ActivePoints-DYENIXWD.js";import"./Dot-COoG0jLM.js";import"./RegisterGraphicalItemId-C6xkCy3A.js";import"./ErrorBarContext-BiKvJSsP.js";import"./GraphicalItemClipPath-60MS9PCs.js";import"./SetGraphicalItem-CgqlK889.js";import"./useAnimationId--U2HKBmo.js";import"./getRadiusAndStrokeWidthFromDot-DAki4Jbv.js";import"./ActiveShapeUtils-D-wBc36w.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DgoKSUUy.js";import"./Trapezoid-CadbmzeJ.js";import"./Sector-CjkT0xYm.js";import"./Cross-Cr6e7nmy.js";import"./index-1_XwddF_.js";import"./ChartSizeDimensions-BYyG2w9L.js";import"./OffsetShower-BriTQDS6.js";import"./PlotAreaShower-CFNBsBQe.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
