import{r as n,e as t}from"./iframe-ByhUx3i5.js";import{L as p}from"./LineChart-BB3BmZfG.js";import{R as s}from"./arrayEqualityCheck-Dc2-6IGJ.js";import{C as c}from"./CartesianGrid-cSH_-Fn1.js";import{X as l}from"./XAxis-BI5mxokc.js";import{Y as d}from"./YAxis-D42CMzIK.js";import{L as y}from"./Legend-BBRdLGFw.js";import{L as h}from"./Line-DQI5jB5X.js";import{T as u}from"./Tooltip-DmR6kuQ8.js";import{R as g}from"./RechartsHookInspector-7ObrtXBg.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CIwNTWTh.js";import"./hooks-3yl5iFEg.js";import"./axisSelectors-NQs8EjRk.js";import"./zIndexSlice-D3kDw7sn.js";import"./resolveDefaultProps-BXU9cl7Q.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-R5e0LOwa.js";import"./chartDataContext-BYf5RbAV.js";import"./CategoricalChart-5ePC_oFI.js";import"./CartesianAxis-Dz61qQ6A.js";import"./Layer-C6tXeN-I.js";import"./Text-D9qGFk_y.js";import"./DOMUtils-CN3Smf_c.js";import"./Label-CEJ3y0id.js";import"./ZIndexLayer-ktHWf7_5.js";import"./types-CJt6eGgj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-C3LGHQVt.js";import"./Curve-CS0P1hcX.js";import"./useElementOffset-CNw39Ncf.js";import"./iteratee-k1Sg484z.js";import"./ReactUtils-BmZRR5An.js";import"./ActivePoints-D515SR-u.js";import"./Dot-COBzijtS.js";import"./RegisterGraphicalItemId-CUDjPLNo.js";import"./ErrorBarContext-Coaa-8b_.js";import"./GraphicalItemClipPath-CCO6Hfg0.js";import"./SetGraphicalItem-d5ssc5Bz.js";import"./useAnimationId-aMq0pZgy.js";import"./getRadiusAndStrokeWidthFromDot-ph1c7d2p.js";import"./ActiveShapeUtils-CvF1aWoR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxW-1m5M.js";import"./Trapezoid-BUngsVtC.js";import"./Sector-BymBl_Im.js";import"./Cross-Bba_iUMz.js";import"./index-Bitkd77q.js";import"./ChartSizeDimensions-DxQjWf1j.js";import"./OffsetShower-DxCTP-c8.js";import"./PlotAreaShower-DB1zgg4x.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
