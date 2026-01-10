import{r as l,e as t}from"./iframe-tCRQIxYB.js";import{R as h}from"./arrayEqualityCheck-DFgE1twh.js";import{C as u}from"./ComposedChart-B_kjiHsD.js";import{B as g}from"./Bar-0p1DbV1h.js";import{C as f}from"./tooltipContext-C5mjD3mc.js";import{R as C}from"./RechartsHookInspector-bM2S9Z_N.js";import{p as a}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D2e6YxB0.js";import"./PolarUtils-BLxmkcH1.js";import"./RechartsWrapper-Bp9yhMvy.js";import"./hooks-Simc1mEI.js";import"./axisSelectors-DzjYUh9I.js";import"./zIndexSlice-IJ_zl8YN.js";import"./CartesianChart-Dy39hE-Z.js";import"./chartDataContext-NlnzkvR2.js";import"./CategoricalChart-BbdLegKy.js";import"./Layer-Okfcyfin.js";import"./ReactUtils-CF2khIYu.js";import"./Label-JD75mQPI.js";import"./Text-DOFY9JIO.js";import"./DOMUtils-fQQV3uNK.js";import"./ZIndexLayer-DZ5tWnEb.js";import"./types-CbdV4-dc.js";import"./ActiveShapeUtils-B61GuIrI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BUsvopn3.js";import"./useAnimationId-D2oVQKnr.js";import"./Trapezoid-hUxVvC3O.js";import"./Sector-DQ482-FH.js";import"./Symbols-DwIizSNL.js";import"./Curve-NiEgXiq2.js";import"./RegisterGraphicalItemId-CFqAxJ1Q.js";import"./ErrorBarContext-B8Ubbuxs.js";import"./GraphicalItemClipPath-D1JoWQAT.js";import"./SetGraphicalItem-DozJQrmf.js";import"./getZIndexFromUnknown-BYF37b1M.js";import"./graphicalItemSelectors-kD6BeSeA.js";import"./index-CkWn_0P6.js";import"./ChartSizeDimensions-BUG6iQR7.js";import"./OffsetShower-B78P8GFz.js";import"./PlotAreaShower-R2kW5Azb.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <>
        <h2>Clicking a Bar triggers the event</h2>
        <ResponsiveContainer width="100%" height={surfaceHeight}>
          <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }} data={pageData}>
            <Bar onClick={(_data, index) => setActiveIndex(index)} dataKey="uv" isAnimationActive={false}>
              {pageData.map(({
              name
            }, index: number) => <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={\`cell-\${name}\`} />)}
            </Bar>
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(s=(p=e.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const pt=["CustomizedEvent"];export{e as CustomizedEvent,pt as __namedExportsOrder,mt as default};
