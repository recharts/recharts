import{r as n,e as t}from"./iframe-Y_Pa4XUD.js";import{L as p}from"./LineChart-pVi02pZg.js";import{R as s}from"./arrayEqualityCheck-ufqgmavw.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BhKPLH6E.js";import{X as d}from"./XAxis-Bv1vfoF0.js";import{Y as y}from"./YAxis-JfFUSobz.js";import{L as h}from"./Legend-zH3hxw5N.js";import{L as u}from"./Line-DsGJIENB.js";import{T as g}from"./Tooltip-Dfduu8ww.js";import{R as K}from"./RechartsHookInspector-CoUZ_IKN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C8CMlo1v.js";import"./index-BJNVUtSj.js";import"./immer-fIOXVJOd.js";import"./hooks-CIr5CD4S.js";import"./axisSelectors-BmerCj2n.js";import"./d3-scale-ByVEmPR9.js";import"./zIndexSlice-CTCYCdxd.js";import"./renderedTicksSlice-CQWIZJ1K.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ds9j1WCi.js";import"./chartDataContext-DAoPlUXM.js";import"./CategoricalChart-C8vuTQEv.js";import"./resolveDefaultProps-B_hVYzQT.js";import"./CartesianAxis-DaCLeBFj.js";import"./Layer-Cvh40WqM.js";import"./Text-mkkNE3Pk.js";import"./DOMUtils-DN2B9zoo.js";import"./Label-DoWUrSWO.js";import"./ZIndexLayer-DHPXYj4K.js";import"./types-CFzlQQ1s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CsuZ3_sL.js";import"./symbol-DrAbyEPw.js";import"./step-B3cL9I-q.js";import"./useElementOffset-qP4fWKjW.js";import"./uniqBy-C7FokKvI.js";import"./iteratee-kOo85QIZ.js";import"./ReactUtils-BE45q0BU.js";import"./ActivePoints-_m6yHkUn.js";import"./Dot-C6EdxuDn.js";import"./RegisterGraphicalItemId-BIRSR7Jx.js";import"./ErrorBarContext-Cb6v3AYw.js";import"./GraphicalItemClipPath-DMPCiQHF.js";import"./SetGraphicalItem-CCipA_FV.js";import"./useAnimationId-LxxsO2il.js";import"./getRadiusAndStrokeWidthFromDot-d_31bWzQ.js";import"./ActiveShapeUtils-DigOcqgk.js";import"./isPlainObject-CqaZa_wl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BWx4TmVI.js";import"./Trapezoid-DRFbXSGQ.js";import"./Sector-NCqbNZMf.js";import"./Curve-BrfIxnDD.js";import"./Cross-CoscppeN.js";import"./index-CPjVtjVX.js";import"./ChartSizeDimensions-Bp_T5Mu5.js";import"./OffsetShower-Bd96igZ1.js";import"./PlotAreaShower-DzHDy2_i.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
