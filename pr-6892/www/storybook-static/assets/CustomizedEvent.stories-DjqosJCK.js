import{r as l,e as t}from"./iframe-BfbK0YnM.js";import{R as h}from"./arrayEqualityCheck-DNFpTLKx.js";import{C as u}from"./ComposedChart-CxQMJJ37.js";import{B as g}from"./Bar-BBN1YXr8.js";import{C as f}from"./tooltipContext-0V0eoMU8.js";import{R as C}from"./RechartsHookInspector-hJ2wORVM.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-1x2577Vl.js";import"./PolarUtils-D7VIOQ5-.js";import"./RechartsWrapper-CneYaVm0.js";import"./hooks-C3PasfZ_.js";import"./axisSelectors-B0fcML92.js";import"./zIndexSlice-C2nD2lty.js";import"./CartesianChart-DvEdRfkB.js";import"./chartDataContext-BgZQ9X9l.js";import"./CategoricalChart-bjsre3s0.js";import"./Layer-CgE-ub3Y.js";import"./ReactUtils-CcajNckk.js";import"./Label-DahQkxIF.js";import"./Text-CnAgZ5uJ.js";import"./DOMUtils-ed8aeX9h.js";import"./ZIndexLayer-aH4ZpYgD.js";import"./types-Bmf6Pun4.js";import"./ActiveShapeUtils-C7AgwxsO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BHHp3Xwt.js";import"./useAnimationId-D-pFcM5J.js";import"./Trapezoid-CzxVEg4f.js";import"./Sector-BlKZ7V0w.js";import"./Symbols-sbw_CJaX.js";import"./Curve-DDb4cbsk.js";import"./RegisterGraphicalItemId-CqePIzFp.js";import"./ErrorBarContext-CY5jd0h0.js";import"./GraphicalItemClipPath-MsgVJj5Y.js";import"./SetGraphicalItem-C-oQkIvQ.js";import"./getZIndexFromUnknown-A-b6oxkT.js";import"./graphicalItemSelectors-XplRRcHl.js";import"./index-DXUjyqxC.js";import"./ChartSizeDimensions-Cp6ZFz8t.js";import"./OffsetShower-C9W4p0Nm.js";import"./PlotAreaShower-Bs9OF-cp.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
