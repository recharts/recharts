import{r as n,e as t}from"./iframe-C9kyXynm.js";import{L as p}from"./LineChart-CkCz9mIz.js";import{R as s}from"./arrayEqualityCheck-BdbBdFIu.js";import{C as c}from"./CartesianGrid-C8kB-52l.js";import{X as l}from"./XAxis-DlZ1onwt.js";import{Y as d}from"./YAxis-V3Y4BL5v.js";import{L as y}from"./Legend-DgLj4nAF.js";import{L as h}from"./Line-wjUPJFe4.js";import{T as u}from"./Tooltip-DWE8kPry.js";import{R as g}from"./RechartsHookInspector-CKajdCMN.js";import{p as K}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ultCJT0w.js";import"./hooks-BzniDeZ2.js";import"./axisSelectors-50fqgJ0X.js";import"./zIndexSlice-cJxKJ8ug.js";import"./resolveDefaultProps-BCZIpR14.js";import"./PolarUtils-B_1hBJ6O.js";import"./CartesianChart-EinDqxZ_.js";import"./chartDataContext-CZ4PAiww.js";import"./CategoricalChart-5uqkh1gH.js";import"./CartesianAxis-DH1-Rlhr.js";import"./Layer-LG3hnzpE.js";import"./Text-BcrXlrdS.js";import"./DOMUtils-CQZn70zK.js";import"./Label-C-oa8ua5.js";import"./ZIndexLayer-7ELyukPI.js";import"./types-BfqR7E8K.js";import"./Symbols-DR9F1KQK.js";import"./Curve-WEIhibNB.js";import"./useElementOffset-CMzOGP_X.js";import"./iteratee-DoJqJKsx.js";import"./ReactUtils-D_EEBxyT.js";import"./ActivePoints-B59gHKqE.js";import"./Dot-BiJvCsb9.js";import"./RegisterGraphicalItemId-oP_vlkHV.js";import"./ErrorBarContext-CHSQnyV_.js";import"./GraphicalItemClipPath-DJAtFFUQ.js";import"./SetGraphicalItem-DyyRaUbx.js";import"./useAnimationId-XLZTjrUv.js";import"./getRadiusAndStrokeWidthFromDot-Bxt3ny70.js";import"./ActiveShapeUtils-CGirhXo2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSM7deum.js";import"./Trapezoid-91tzOikz.js";import"./Sector-D1DtIzuz.js";import"./Cross-GDyFEfaG.js";import"./index-DVm8rubF.js";import"./ChartSizeDimensions-COOovYk2.js";import"./OffsetShower-D9P9ThB2.js";import"./PlotAreaShower-B7fr2_CT.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
