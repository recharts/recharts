import{r as n,e as t}from"./iframe-tCRQIxYB.js";import{L as p}from"./LineChart-kFloqZfZ.js";import{R as s}from"./arrayEqualityCheck-DFgE1twh.js";import{C as c}from"./CartesianGrid-W-T5FlPk.js";import{X as l}from"./XAxis-o_gppMSb.js";import{Y as d}from"./YAxis-C5YEwPYl.js";import{L as y}from"./Legend-CKbr3K0E.js";import{L as h}from"./Line-BVHIm-vM.js";import{T as u}from"./Tooltip-CFzd-RiE.js";import{R as g}from"./RechartsHookInspector-bM2S9Z_N.js";import{p as K}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bp9yhMvy.js";import"./hooks-Simc1mEI.js";import"./axisSelectors-DzjYUh9I.js";import"./zIndexSlice-IJ_zl8YN.js";import"./resolveDefaultProps-D2e6YxB0.js";import"./PolarUtils-BLxmkcH1.js";import"./CartesianChart-Dy39hE-Z.js";import"./chartDataContext-NlnzkvR2.js";import"./CategoricalChart-BbdLegKy.js";import"./CartesianAxis-ipmvl_eK.js";import"./Layer-Okfcyfin.js";import"./Text-DOFY9JIO.js";import"./DOMUtils-fQQV3uNK.js";import"./Label-JD75mQPI.js";import"./ZIndexLayer-DZ5tWnEb.js";import"./types-CbdV4-dc.js";import"./Symbols-DwIizSNL.js";import"./Curve-NiEgXiq2.js";import"./useElementOffset-D0-uD3Uj.js";import"./iteratee-QAA3_HSJ.js";import"./ReactUtils-CF2khIYu.js";import"./ActivePoints-BVkf9rZJ.js";import"./Dot-DRKOPpIx.js";import"./RegisterGraphicalItemId-CFqAxJ1Q.js";import"./ErrorBarContext-B8Ubbuxs.js";import"./GraphicalItemClipPath-D1JoWQAT.js";import"./SetGraphicalItem-DozJQrmf.js";import"./useAnimationId-D2oVQKnr.js";import"./getRadiusAndStrokeWidthFromDot-BKo_PtlD.js";import"./ActiveShapeUtils-B61GuIrI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BUsvopn3.js";import"./Trapezoid-hUxVvC3O.js";import"./Sector-DQ482-FH.js";import"./Cross-B215_L-1.js";import"./index-CkWn_0P6.js";import"./ChartSizeDimensions-BUG6iQR7.js";import"./OffsetShower-B78P8GFz.js";import"./PlotAreaShower-R2kW5Azb.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};
