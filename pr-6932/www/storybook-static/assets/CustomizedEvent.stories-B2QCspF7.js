import{r as l,e as t}from"./iframe-CWA75x6f.js";import{R as h}from"./arrayEqualityCheck-BbPHrIiT.js";import{C as u}from"./ComposedChart-CikPPUoS.js";import{B as g}from"./Bar-CKWwcfPl.js";import{C as f}from"./tooltipContext-CcLmKiM8.js";import{R as C}from"./RechartsHookInspector-SnjudCfW.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BVW4aoQY.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-wD_Oxn-K.js";import"./hooks-Cs6aCTjY.js";import"./axisSelectors-BTTbx4UP.js";import"./zIndexSlice-BxnMOy2T.js";import"./CartesianChart-yuxJjJQJ.js";import"./chartDataContext-C93txyR3.js";import"./CategoricalChart-CD5Q6zer.js";import"./Layer-Dyb8NBHJ.js";import"./ReactUtils-BsQxKoDK.js";import"./Label-QjXIZu_1.js";import"./Text-BJCnsyFb.js";import"./DOMUtils-DvhTIFrn.js";import"./ZIndexLayer-C1tQmmyV.js";import"./types-ieTTG77J.js";import"./ActiveShapeUtils-DPDphSQY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDQ_yE-B.js";import"./useAnimationId-CiXad0CX.js";import"./Trapezoid-xMIIQ6Hu.js";import"./Sector-CjAZzh8K.js";import"./Symbols-BfpcWYyT.js";import"./Curve-DzqGeZIr.js";import"./RegisterGraphicalItemId-BrDDbYpn.js";import"./ErrorBarContext-Bb8vM_ir.js";import"./GraphicalItemClipPath-BK1Cw2_u.js";import"./SetGraphicalItem-ERR7406L.js";import"./getZIndexFromUnknown-fcJuNc3Y.js";import"./graphicalItemSelectors-DNZwly0D.js";import"./index-rMQlUXxN.js";import"./ChartSizeDimensions-I7n2Q31L.js";import"./OffsetShower-ra48L2at.js";import"./PlotAreaShower-DRjHdJ_p.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
