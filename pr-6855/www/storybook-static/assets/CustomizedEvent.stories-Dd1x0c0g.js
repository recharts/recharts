import{r as l,e as t}from"./iframe-DLhPWxyK.js";import{R as h}from"./arrayEqualityCheck-m1RhjOmx.js";import{C as u}from"./ComposedChart-DNdReU5t.js";import{B as g}from"./Bar-DdI9BB9r.js";import{C as f}from"./tooltipContext-YFR452HV.js";import{R as C}from"./RechartsHookInspector-HNjcmSsy.js";import{p as a}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-E8e_3mlR.js";import"./PolarUtils-C6JBvuC0.js";import"./RechartsWrapper-DgQpMTik.js";import"./hooks-CPfFhdP1.js";import"./axisSelectors-H2aLd2HR.js";import"./zIndexSlice-CkjTQxGc.js";import"./CartesianChart-C_LwKB0K.js";import"./chartDataContext-DLN8QOpK.js";import"./CategoricalChart-B42UgGES.js";import"./Layer-T-_zDyRj.js";import"./ReactUtils-CkbQi9iw.js";import"./Label-Cfm9uiYS.js";import"./Text-1NI18g4k.js";import"./DOMUtils-DXMqjRDX.js";import"./ZIndexLayer-CE4rF1P8.js";import"./types-DGdi1KYp.js";import"./ActiveShapeUtils-BWgEW_58.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DFsdprJS.js";import"./useAnimationId-CcCb5ZgY.js";import"./Trapezoid-C-EY4dJQ.js";import"./Sector-tN30gQok.js";import"./Symbols-CNkEhL1u.js";import"./Curve-DeIwtCC2.js";import"./RegisterGraphicalItemId-BfrmZf1G.js";import"./ErrorBarContext-DgDHXHvv.js";import"./GraphicalItemClipPath-B90mhSGP.js";import"./SetGraphicalItem-FkCdxtAh.js";import"./getZIndexFromUnknown-D663qf7E.js";import"./graphicalItemSelectors-C6bwYjmT.js";import"./index-DdNKA2qu.js";import"./ChartSizeDimensions-2_L3pVFL.js";import"./OffsetShower-Bubd5l8I.js";import"./PlotAreaShower-DZzXcMEl.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
