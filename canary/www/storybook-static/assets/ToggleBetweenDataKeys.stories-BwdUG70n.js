import{r as n,e as t}from"./iframe-C5l4DaJO.js";import{L as p}from"./LineChart-WdVwYUFB.js";import{R as s}from"./arrayEqualityCheck-fM0600Tt.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B7NRw-Pr.js";import{X as d}from"./XAxis-ByPIKQU1.js";import{Y as y}from"./YAxis-Bv8R6otu.js";import{L as h}from"./Legend-BkA5LrBA.js";import{L as u}from"./Line-DrCzNtMt.js";import{T as g}from"./Tooltip-Chh_8w-O.js";import{R as K}from"./RechartsHookInspector-eKcCgGD5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DiBHoctn.js";import"./index-D7g3MY6b.js";import"./immer-BjHWRAG8.js";import"./hooks-CSO2fo2K.js";import"./axisSelectors-2uaPjYwk.js";import"./d3-scale-BfKzTeEs.js";import"./zIndexSlice-BEG784rk.js";import"./renderedTicksSlice-DaHjC-C2.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DaKOKwGw.js";import"./chartDataContext-m4J49DgA.js";import"./CategoricalChart-z5J8qEz7.js";import"./resolveDefaultProps-DwIPpqCH.js";import"./CartesianAxis-DstjLvt8.js";import"./Layer-BQ7ZElOW.js";import"./Text-BNyB8yLu.js";import"./DOMUtils-rl_vKHVV.js";import"./Label-CxCh3fMv.js";import"./ZIndexLayer-DhZlyZCE.js";import"./types-CjQ8Fnwy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CUAzhRbj.js";import"./symbol-Cm5jk-xC.js";import"./step-5ABOenpE.js";import"./useElementOffset-CyBq5cT_.js";import"./uniqBy-BufKpw2a.js";import"./iteratee-CTT2mLKG.js";import"./ReactUtils-C_GhcNSF.js";import"./ActivePoints-DwJBd7DK.js";import"./Dot-DaM5pVyw.js";import"./RegisterGraphicalItemId-DYWgcQMi.js";import"./ErrorBarContext-Cu_fSz69.js";import"./GraphicalItemClipPath-H584rNDL.js";import"./SetGraphicalItem-DKJsTKLV.js";import"./useAnimationId-Ivno0Gk6.js";import"./getRadiusAndStrokeWidthFromDot-Cq3JaBlL.js";import"./ActiveShapeUtils-BesHP-Xv.js";import"./isPlainObject-Bb91VWq3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BvzLcgoo.js";import"./Trapezoid-Mm7QWflE.js";import"./Sector-BXKHAeCR.js";import"./Curve-C8kgiu5F.js";import"./Cross-CpN4Zqgv.js";import"./index-D-KNk5kJ.js";import"./ChartSizeDimensions-MhlbxMFi.js";import"./OffsetShower-BJNZ64do.js";import"./PlotAreaShower-mtOsWYxm.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
