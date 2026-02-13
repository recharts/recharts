import{r as n,e as t}from"./iframe-Cy8G_j66.js";import{L as p}from"./LineChart-B7cX0L9U.js";import{R as s}from"./arrayEqualityCheck-dp8dfL7u.js";import{C as c}from"./CartesianGrid-DLAikBSQ.js";import{X as l}from"./XAxis-sHLPbu1e.js";import{Y as d}from"./YAxis-DfWkuEr-.js";import{L as y}from"./Legend-DRCozq1Q.js";import{L as h}from"./Line-qEl9DN3q.js";import{T as u}from"./Tooltip-DzoeT4p7.js";import{R as g}from"./RechartsHookInspector-lSqxoQlZ.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BtX23pZ_.js";import"./hooks-Dh2IuVAR.js";import"./axisSelectors-Dnswsufb.js";import"./zIndexSlice-BDvzw6V8.js";import"./resolveDefaultProps-DHnXBr-T.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BzoasTlc.js";import"./chartDataContext-Dyi2rgks.js";import"./CategoricalChart-0rxnxhIB.js";import"./CartesianAxis-mJhpe0_9.js";import"./Layer-D4d1YeMH.js";import"./Text-C8Cfe64C.js";import"./DOMUtils-CSAZ0z5r.js";import"./Label-r4OEA6Zh.js";import"./ZIndexLayer-DYA27QSR.js";import"./types-BSABi_Hc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Dz-91Pdw.js";import"./Curve-B4b9EAiq.js";import"./useElementOffset-BSLWjzfu.js";import"./iteratee-DDkVWpiV.js";import"./ReactUtils-CPeEyyol.js";import"./ActivePoints-Bd_88S8O.js";import"./Dot-D2TzI8Gx.js";import"./RegisterGraphicalItemId-Do-QRU28.js";import"./ErrorBarContext-D6VQHKa5.js";import"./GraphicalItemClipPath-B6TO2Oyf.js";import"./SetGraphicalItem-sOhar6CJ.js";import"./useAnimationId-YkjhaILr.js";import"./getRadiusAndStrokeWidthFromDot-DZH1LMkE.js";import"./ActiveShapeUtils-BtpIhy8s.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DF923tDp.js";import"./Trapezoid-CLz1a_Xw.js";import"./Sector-Dv6krD40.js";import"./Cross-eMFSUkxv.js";import"./index-Blxurm1a.js";import"./ChartSizeDimensions-CzRSNWvg.js";import"./OffsetShower-C1xZ_Sdf.js";import"./PlotAreaShower-DQwE5Dcy.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
