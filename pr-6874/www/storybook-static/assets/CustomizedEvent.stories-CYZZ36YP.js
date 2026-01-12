import{r as l,e as t}from"./iframe-CzId_vMR.js";import{R as h}from"./arrayEqualityCheck-DSdyV2X5.js";import{C as u}from"./ComposedChart-CMv1ks2h.js";import{B as g}from"./Bar-Bke9bIAm.js";import{C as f}from"./tooltipContext-CbvQKLwH.js";import{R as C}from"./RechartsHookInspector-Co5fk2RP.js";import{p as a}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CjfObxG9.js";import"./PolarUtils-pvs2WqdL.js";import"./RechartsWrapper-CN4xlQ0u.js";import"./hooks-C9JnWS43.js";import"./axisSelectors-OGsi9SPN.js";import"./zIndexSlice-BwlmGQPJ.js";import"./CartesianChart-Cp_RTL_u.js";import"./chartDataContext-bc8aYpmC.js";import"./CategoricalChart-Fsg15egP.js";import"./Layer-Cd1nD4kQ.js";import"./ReactUtils-B9bn4DTf.js";import"./Label-C0ElDb7Z.js";import"./Text-DyrIV_fF.js";import"./DOMUtils-DbOiFokS.js";import"./ZIndexLayer-C_SxWHYm.js";import"./types-DjXw3wTJ.js";import"./ActiveShapeUtils-CjNwvE6j.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B-Y8RlPT.js";import"./useAnimationId-DOB-FYIq.js";import"./Trapezoid-D5iOXGDe.js";import"./Sector-BzoC5hxT.js";import"./Symbols-BRKfSvcL.js";import"./Curve-D5USJD5l.js";import"./RegisterGraphicalItemId-CBAG7Y6C.js";import"./ErrorBarContext-DSOKUBI-.js";import"./GraphicalItemClipPath-BWo7OkkL.js";import"./SetGraphicalItem-w1vQ_GFV.js";import"./getZIndexFromUnknown-BNCaRR0D.js";import"./graphicalItemSelectors-Dp2Wlk9M.js";import"./index-CS_I0C1E.js";import"./ChartSizeDimensions-DGZWUdPh.js";import"./OffsetShower-b12JY01P.js";import"./PlotAreaShower-BQSWUX-t.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
