import{r as l,e as t}from"./iframe-C1zBrMCd.js";import{R as h}from"./arrayEqualityCheck-Df8r3poz.js";import{C as u}from"./ComposedChart-BvN08KBc.js";import{B as g}from"./Bar-B9I75Qeg.js";import{C as f}from"./tooltipContext-Bo3nAzCj.js";import{R as C}from"./RechartsHookInspector-BISA2G0k.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BsIlMHa7.js";import"./PolarUtils-_NKSevVn.js";import"./RechartsWrapper-Cv1tlCaV.js";import"./hooks-WF-Co-wK.js";import"./axisSelectors-DB8TkCkM.js";import"./zIndexSlice-hFBZ82Qc.js";import"./CartesianChart-B5UDYtnc.js";import"./chartDataContext-DI2kF2Ct.js";import"./CategoricalChart-2Vole5cF.js";import"./Layer-D3PE35Mq.js";import"./ReactUtils-D752dz6O.js";import"./Label-6nnLE5h5.js";import"./Text-dJAbnPql.js";import"./DOMUtils-DOdR4DF9.js";import"./ZIndexLayer-BetO650l.js";import"./types-HpBDQdg7.js";import"./ActiveShapeUtils-CdNQy3O6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BhdzWbEl.js";import"./useAnimationId-D3t9NmUg.js";import"./Trapezoid-D2TjGKOo.js";import"./Sector-w-WfrIQ8.js";import"./Symbols-PCV2wn4X.js";import"./Curve-BNkJ4mrR.js";import"./RegisterGraphicalItemId-Bok-rErT.js";import"./ErrorBarContext-KwhhmAaQ.js";import"./GraphicalItemClipPath-M-I7Ebzy.js";import"./SetGraphicalItem-ZpSJ1YOV.js";import"./getZIndexFromUnknown-B9c_3t2z.js";import"./graphicalItemSelectors-BJxE6ryu.js";import"./index-D7UfPOGu.js";import"./ChartSizeDimensions-Dtypf1Rq.js";import"./OffsetShower-DOhEeiaZ.js";import"./PlotAreaShower-B0-XWkzL.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
