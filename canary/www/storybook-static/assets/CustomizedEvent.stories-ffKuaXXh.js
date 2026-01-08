import{r as l,e as t}from"./iframe-D9q7UUmi.js";import{R as h}from"./arrayEqualityCheck-CJJXJ9Rv.js";import{C as u}from"./ComposedChart-BrSXjugh.js";import{B as g}from"./Bar-D2YzUuu3.js";import{C as f}from"./tooltipContext-DC7nW4sy.js";import{R as C}from"./RechartsHookInspector-Btgon49z.js";import{p as a}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D-3coS0e.js";import"./PolarUtils-cf4CEJPT.js";import"./RechartsWrapper-8_jXv7hz.js";import"./hooks-b1KD0qBL.js";import"./axisSelectors-DCJHWbvW.js";import"./zIndexSlice-CxekzBSL.js";import"./CartesianChart-B58H7xZp.js";import"./chartDataContext-C5vcePQl.js";import"./CategoricalChart-ak-_6B9f.js";import"./Layer-CUKLQgPC.js";import"./ReactUtils-CfRgqXT5.js";import"./Label-CDSn628C.js";import"./Text-CLmUy_On.js";import"./DOMUtils-BXuH-NK6.js";import"./ZIndexLayer-CtgCGO4x.js";import"./types-FPdAMXDy.js";import"./ActiveShapeUtils-Cf3wP9DQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-aQPjrzEG.js";import"./useAnimationId-DeN0uxUI.js";import"./Trapezoid-CrYCphId.js";import"./Sector-BIUbLnT5.js";import"./Symbols-B3oT9PiF.js";import"./Curve-DEESCjbc.js";import"./RegisterGraphicalItemId-B8upk-8m.js";import"./ErrorBarContext-D_fOmF9j.js";import"./GraphicalItemClipPath-CYdNpZeU.js";import"./SetGraphicalItem-DllIbSlC.js";import"./getZIndexFromUnknown-BjPB6BUC.js";import"./graphicalItemSelectors-BoZBMBth.js";import"./index-YTWFD20P.js";import"./ChartSizeDimensions-CGOPgU1Q.js";import"./OffsetShower-D7RAK20_.js";import"./PlotAreaShower-DDsxyFt0.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
