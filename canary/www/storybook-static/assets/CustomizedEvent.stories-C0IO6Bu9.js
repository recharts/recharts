import{r as l,e as t}from"./iframe--x23rdHV.js";import{R as h}from"./arrayEqualityCheck-BD1qZPxT.js";import{C as u}from"./ComposedChart-Cx255MWZ.js";import{B as g}from"./Bar-DWfUa_z5.js";import{C as f}from"./tooltipContext-DeJUwuti.js";import{R as C}from"./RechartsHookInspector-CS_N4Y-F.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Q3fBKAvl.js";import"./PolarUtils-DJ6pmdE6.js";import"./RechartsWrapper-CaVQgtIT.js";import"./hooks-B9glux5h.js";import"./axisSelectors-DmpeXiUd.js";import"./zIndexSlice-BZ8J8CWC.js";import"./CartesianChart-7YsubAAE.js";import"./chartDataContext-CDQnRCpO.js";import"./CategoricalChart-NDapYkGp.js";import"./Layer-W9JL67lG.js";import"./ReactUtils-Bbi28O4z.js";import"./Label-CHtfbXlI.js";import"./Text-C7KTYcc4.js";import"./DOMUtils-a1QzPdPR.js";import"./ZIndexLayer-ezCnztm4.js";import"./types-DIiwzDHn.js";import"./ActiveShapeUtils-Xs79DTHH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ZSQAb92H.js";import"./useAnimationId-DUCYZNMW.js";import"./Trapezoid-B1cr3UmX.js";import"./Sector-En_dyy3k.js";import"./Symbols-DVanmgvf.js";import"./Curve-BsoHhr4Y.js";import"./RegisterGraphicalItemId-DjY_2vEh.js";import"./ErrorBarContext-z3_2koBv.js";import"./GraphicalItemClipPath-B3HNdztG.js";import"./SetGraphicalItem-Ccb8m39o.js";import"./getZIndexFromUnknown-ByZvTzdf.js";import"./graphicalItemSelectors-CO_EFJn4.js";import"./index-DL_1z0BC.js";import"./ChartSizeDimensions-wrT4dmYN.js";import"./OffsetShower-CJxOrGxz.js";import"./PlotAreaShower-AHA62Bp0.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
