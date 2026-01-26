import{r as l,e as t}from"./iframe-BUAHB1JE.js";import{R as h}from"./arrayEqualityCheck-D5cvBvD0.js";import{C as u}from"./ComposedChart-nJQCUmgK.js";import{B as g}from"./Bar-DiJS0tqu.js";import{C as f}from"./tooltipContext-CiBBulxM.js";import{R as C}from"./RechartsHookInspector-DyBVLxQ5.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DB3crruI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-D3Kz3rBL.js";import"./hooks-CLHcqW-j.js";import"./axisSelectors-nwFqxBSg.js";import"./zIndexSlice-DtimrYBU.js";import"./CartesianChart-CykHEv8Z.js";import"./chartDataContext-CsNatWbQ.js";import"./CategoricalChart-CgjnwgmC.js";import"./Layer-Cm056lbD.js";import"./ReactUtils-kUjnR9HA.js";import"./Label-DycKUeOS.js";import"./Text-Cz010pA5.js";import"./DOMUtils-xg92JkXT.js";import"./ZIndexLayer-CvBAZeUB.js";import"./types-ztb1_leN.js";import"./ActiveShapeUtils-IOesA3uZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5TZFuIg.js";import"./useAnimationId-Dqqe1r9b.js";import"./Trapezoid-DhqC00At.js";import"./Sector-ZEGPqrgm.js";import"./Symbols-B668NUUf.js";import"./Curve-U_sOEQqK.js";import"./RegisterGraphicalItemId-Wzb-45_P.js";import"./ErrorBarContext-BPyiRwXa.js";import"./GraphicalItemClipPath-DAz0o25b.js";import"./SetGraphicalItem-jsgYVNOw.js";import"./getZIndexFromUnknown-CzzNQFI-.js";import"./graphicalItemSelectors-DXLlpUEw.js";import"./index-C8QR5MVL.js";import"./ChartSizeDimensions-DxM1dHTb.js";import"./OffsetShower-CLEQK-Rx.js";import"./PlotAreaShower-Xx92qV_c.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
