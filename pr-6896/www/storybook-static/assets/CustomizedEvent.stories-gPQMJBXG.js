import{r as l,e as t}from"./iframe-C7dv0yNH.js";import{R as h}from"./arrayEqualityCheck-DyqdVI3P.js";import{C as u}from"./ComposedChart-FscYfn8A.js";import{B as g}from"./Bar-DHcpj6Ah.js";import{C as f}from"./tooltipContext-CjDRDyLu.js";import{R as C}from"./RechartsHookInspector-lhW0mFdD.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C_lLZ5sY.js";import"./PolarUtils-Cz9TAlOj.js";import"./RechartsWrapper-C9EYdUpz.js";import"./hooks-sLNaPpHz.js";import"./axisSelectors-C_30vZFc.js";import"./zIndexSlice-BInAuLle.js";import"./CartesianChart-DFTdRJBL.js";import"./chartDataContext-BIHEfK7s.js";import"./CategoricalChart-CHqTaTxC.js";import"./Layer-BTAEH97T.js";import"./ReactUtils-Jbry0BUC.js";import"./Label-pLuTDL7t.js";import"./Text-c0T3JDCh.js";import"./DOMUtils-C38PLAG9.js";import"./ZIndexLayer-DHYRzIS_.js";import"./types-CjrwKJ5w.js";import"./ActiveShapeUtils-BhYBD1tZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BknPpfrj.js";import"./useAnimationId-y4GFPobY.js";import"./Trapezoid-B8NGdIRJ.js";import"./Sector-DHOItzHM.js";import"./Symbols-CWjjEhVI.js";import"./Curve-DWNdd9EU.js";import"./RegisterGraphicalItemId-DhjtTH4e.js";import"./ErrorBarContext-FWB8EeAg.js";import"./GraphicalItemClipPath-DkWi_iXg.js";import"./SetGraphicalItem-dcgdauaK.js";import"./getZIndexFromUnknown-BOkIYnVE.js";import"./graphicalItemSelectors-Dc9X151y.js";import"./index-CtbSRCbY.js";import"./ChartSizeDimensions-DjjqF_40.js";import"./OffsetShower-CNtlgBc5.js";import"./PlotAreaShower-DP2LRcem.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
