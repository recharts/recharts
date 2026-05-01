import{r as n,e as t}from"./iframe-CG0qDtBl.js";import{L as p}from"./LineChart-C08lsZ5f.js";import{R as s}from"./arrayEqualityCheck-nJzMu5L8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D5faMACC.js";import{X as d}from"./XAxis-DN51EeVs.js";import{Y as y}from"./YAxis-BFtNCWGe.js";import{L as h}from"./Legend-BL2IEIGb.js";import{L as u}from"./Line-DFOB5IU8.js";import{T as g}from"./Tooltip-B6jdnQ2I.js";import{R as K}from"./RechartsHookInspector-BhrhKqGk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B645yxTo.js";import"./index-LX72MUsT.js";import"./immer-BaG7xZes.js";import"./hooks-DK5-oMyB.js";import"./axisSelectors-Cs152sBG.js";import"./d3-scale-BKHwRxJ5.js";import"./zIndexSlice-DlNAFrb6.js";import"./renderedTicksSlice-BjAt54f-.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BOM1G1ij.js";import"./chartDataContext-BK7b2xjO.js";import"./CategoricalChart-gdykgj2P.js";import"./resolveDefaultProps-68SeDKrz.js";import"./CartesianAxis-CFrXRlKT.js";import"./Layer-C6aCRlIK.js";import"./Text-D5ILnTXV.js";import"./DOMUtils-2oBG8NIz.js";import"./Label-xzQt__ei.js";import"./ZIndexLayer-_OpZUWnc.js";import"./types--uSAtEO5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BbHBglZG.js";import"./symbol-BC68W8wa.js";import"./step-CYBADRl-.js";import"./useElementOffset-DLWQ62qI.js";import"./uniqBy-BeGVfblk.js";import"./iteratee-MVxaMNGn.js";import"./ReactUtils-B6bmemMx.js";import"./ActivePoints-2-a50J1l.js";import"./Dot-rS4fPZDW.js";import"./RegisterGraphicalItemId-CznzVPtc.js";import"./ErrorBarContext-BZfLXdZw.js";import"./GraphicalItemClipPath-BUh3FPdj.js";import"./SetGraphicalItem-IaY6gKdE.js";import"./useAnimationId-CKL_PQXN.js";import"./getRadiusAndStrokeWidthFromDot-BIESFlMm.js";import"./ActiveShapeUtils-5FEmW25K.js";import"./isPlainObject-BUIBTXtZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-_mXRa_P4.js";import"./Trapezoid-DlYu-bjE.js";import"./Sector-D2vf8wF7.js";import"./Curve--tzE_BoT.js";import"./Cross-9nxareQx.js";import"./index-DjPC5fQL.js";import"./ChartSizeDimensions-BGpNAELR.js";import"./OffsetShower-D2nsT2yB.js";import"./PlotAreaShower-CPUgyAdx.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
