import{r as l,e as t}from"./iframe-DCqI0XZE.js";import{R as h}from"./arrayEqualityCheck-HYppUqbL.js";import{C as u}from"./ComposedChart-BQWkPeDZ.js";import{B as g}from"./Bar-CBMJ9Mmo.js";import{C as f}from"./tooltipContext-6_S7t5GF.js";import{R as C}from"./RechartsHookInspector-fFyRgJJZ.js";import{p as a}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DeYA34uT.js";import"./PolarUtils-CVPwvSfi.js";import"./RechartsWrapper-CqZMRsqw.js";import"./hooks-D1LIxGLf.js";import"./axisSelectors-fdj65aw8.js";import"./zIndexSlice-DaD55gZL.js";import"./CartesianChart-DjU-EYVa.js";import"./chartDataContext-T8I8ugzh.js";import"./CategoricalChart-3Iob9H8U.js";import"./Layer-BuGX0g6x.js";import"./ReactUtils-B_rBW96b.js";import"./Label-4-POpI1D.js";import"./Text-CDyXfqgn.js";import"./DOMUtils-B_HAxUS-.js";import"./ZIndexLayer-C1uRVibY.js";import"./types-DHuf88Dj.js";import"./ActiveShapeUtils-BTx5WARf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CpPAOcrn.js";import"./useAnimationId-PgeDRpeU.js";import"./Trapezoid-BbcOya6W.js";import"./Sector-Cy_aXDIz.js";import"./Symbols-Cxsfovx2.js";import"./Curve-Y6fdEOBg.js";import"./RegisterGraphicalItemId-D-lwaZ_v.js";import"./ErrorBarContext-Rv6Vd2e5.js";import"./GraphicalItemClipPath-BG8ZwsZs.js";import"./SetGraphicalItem-CD6yUE_R.js";import"./getZIndexFromUnknown-DlqkvRny.js";import"./graphicalItemSelectors-CtIxQRw4.js";import"./index-BSYEM6yU.js";import"./ChartSizeDimensions-lrWbrtxv.js";import"./OffsetShower-bO0_8mku.js";import"./PlotAreaShower-CRs_o2Tz.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
