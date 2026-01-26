import{r as l,e as t}from"./iframe-BGOJmNjB.js";import{R as h}from"./arrayEqualityCheck-BjRvnt0s.js";import{C as u}from"./ComposedChart-DGq6XYiu.js";import{B as g}from"./Bar-B40LocQN.js";import{C as f}from"./tooltipContext-cVTwqAl2.js";import{R as C}from"./RechartsHookInspector-Cgn96sot.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BSJBVX4C.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-h16g3EQQ.js";import"./hooks-Nz6DJ1YN.js";import"./axisSelectors-Lz_2OI8_.js";import"./zIndexSlice-DAfFf7yA.js";import"./CartesianChart-OgoW6u2Y.js";import"./chartDataContext-aYFPQGqf.js";import"./CategoricalChart-DgJaNq2v.js";import"./Layer-LxxzUP-k.js";import"./ReactUtils-BB1AONhv.js";import"./Label-Bv9s524x.js";import"./Text-BhvB3_o-.js";import"./DOMUtils-CB_Ew6lr.js";import"./ZIndexLayer-4QAOL5IQ.js";import"./types-DLAnyyDj.js";import"./ActiveShapeUtils-DNGFFUmc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChTFz8xc.js";import"./useAnimationId-G8K3lY41.js";import"./Trapezoid-DXqtA9Y7.js";import"./Sector-Bdq99Tgd.js";import"./Symbols-NLXHxAGu.js";import"./Curve-Bf5GHIVx.js";import"./RegisterGraphicalItemId-BpPOmR2M.js";import"./ErrorBarContext-5jw4fggF.js";import"./GraphicalItemClipPath-CldBUZWH.js";import"./SetGraphicalItem-CMM_HPdn.js";import"./getZIndexFromUnknown-DTiDJHkG.js";import"./graphicalItemSelectors-CsdTwm_s.js";import"./index-CbiKP7W2.js";import"./ChartSizeDimensions-DlrFd0zO.js";import"./OffsetShower-CQ-BgPhh.js";import"./PlotAreaShower-C5FoW2lp.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
