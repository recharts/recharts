import{r as l,e as t}from"./iframe-CCMJ-7V4.js";import{R as h}from"./arrayEqualityCheck-EU51TFpx.js";import{C as u}from"./ComposedChart-C6h9PwcP.js";import{B as g}from"./Bar-oeh8Rjjg.js";import{C as f}from"./tooltipContext-DYxg9AVX.js";import{R as C}from"./RechartsHookInspector-CT184sGb.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BNCKdsdg.js";import"./PolarUtils-JMmyzBBh.js";import"./RechartsWrapper-Dlfj2KI1.js";import"./hooks--Mj4Y-hQ.js";import"./axisSelectors-Bwyl_l9L.js";import"./zIndexSlice-D6TWR_2-.js";import"./CartesianChart-BWh3hsiv.js";import"./chartDataContext-BB33_ty3.js";import"./CategoricalChart-Cxiu0ZqS.js";import"./Layer-BEqohIF5.js";import"./ReactUtils-CeY657n5.js";import"./Label-DYpMY_OX.js";import"./Text-DT_EImOw.js";import"./DOMUtils-DS3HDMLJ.js";import"./ZIndexLayer-DTuo7Di4.js";import"./types-CfBor7-V.js";import"./ActiveShapeUtils-6YQyK9qF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DFaFQv7g.js";import"./useAnimationId-C67C_3Vf.js";import"./Trapezoid-iC4EoUjD.js";import"./Sector-CvpK-Ylm.js";import"./Symbols-BjLEgnQl.js";import"./Curve-CWiUvZCK.js";import"./RegisterGraphicalItemId-DVKqMQCD.js";import"./ErrorBarContext-sxni0djP.js";import"./GraphicalItemClipPath-CYG_pIwh.js";import"./SetGraphicalItem-DBanf2OA.js";import"./getZIndexFromUnknown-Bn0CRzd9.js";import"./graphicalItemSelectors-Bgnz89JK.js";import"./index-55iJ_lXJ.js";import"./ChartSizeDimensions-DrMr_UaN.js";import"./OffsetShower-0LfR1yxg.js";import"./PlotAreaShower-BAItckLJ.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
