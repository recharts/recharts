import{r as l,e as t}from"./iframe-B8wZLo82.js";import{R as h}from"./arrayEqualityCheck-mQHvFPpg.js";import{C as u}from"./ComposedChart-BcqGzy_j.js";import{B as g}from"./Bar-DZSjuuu2.js";import{C as f}from"./tooltipContext-CuTQZya9.js";import{R as C}from"./RechartsHookInspector-GmoDPQRs.js";import{p as a}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhFJ0Eqh.js";import"./PolarUtils-DHvcKc2n.js";import"./RechartsWrapper-CBigNIyW.js";import"./hooks-BiJhptmv.js";import"./axisSelectors-Bv-IDWqv.js";import"./zIndexSlice-vxKp5epo.js";import"./CartesianChart-o83YROHa.js";import"./chartDataContext-Cx3FiXmZ.js";import"./CategoricalChart-DfnOGKPM.js";import"./Layer-BJUTpLkJ.js";import"./ReactUtils-Dj7f4Iqr.js";import"./Label-DvY0zh6c.js";import"./Text-B5lfNvYb.js";import"./DOMUtils-Caps1FVU.js";import"./ZIndexLayer-DdiLICHA.js";import"./types-DiGBS5_O.js";import"./ActiveShapeUtils-CpZCSmIN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bg6726WX.js";import"./useAnimationId-Dy4qDS51.js";import"./Trapezoid-Zj_KtUDG.js";import"./Sector-B3KOtxMp.js";import"./Symbols-CZWpR43S.js";import"./Curve-CMsBNtPf.js";import"./RegisterGraphicalItemId-CCpmn4R2.js";import"./ErrorBarContext-D12Q2uZb.js";import"./GraphicalItemClipPath-BYlHtFhX.js";import"./SetGraphicalItem-CNzy8eWj.js";import"./getZIndexFromUnknown-CRBaJxD-.js";import"./graphicalItemSelectors-DZbwE9ZQ.js";import"./index-DUOpxgLn.js";import"./ChartSizeDimensions-QOi8XTXN.js";import"./OffsetShower-DE0ZkW5V.js";import"./PlotAreaShower-ZBvPTwOe.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
