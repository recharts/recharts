import{r as l,e as t}from"./iframe-AMdIPtJ_.js";import{R as h}from"./arrayEqualityCheck-3UyTPjiS.js";import{C as u}from"./ComposedChart-CdZS-7p_.js";import{B as g}from"./Bar-D9MB7HPN.js";import{C as f}from"./tooltipContext-BYjTIbof.js";import{R as C}from"./RechartsHookInspector-Bq93gymj.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-eDHOoSb6.js";import"./PolarUtils-KOfaMXsG.js";import"./RechartsWrapper-QBdH5qJC.js";import"./hooks-BddCSC5x.js";import"./axisSelectors-CYvP6yih.js";import"./zIndexSlice-CLEOTtEz.js";import"./CartesianChart-C7nb5Il8.js";import"./chartDataContext-BsDdYGEp.js";import"./CategoricalChart-C39w_Gis.js";import"./Layer-s4o8RnMf.js";import"./ReactUtils-BJF5ZjW2.js";import"./Label-BXNXe9p5.js";import"./Text-Bmd0wKqf.js";import"./DOMUtils-Bw_kQjwH.js";import"./ZIndexLayer-DJXgyukI.js";import"./types-CQP6j9X1.js";import"./ActiveShapeUtils-CYbAsT4q.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BXzCN27L.js";import"./useAnimationId-DD0SbbDQ.js";import"./Trapezoid-vgj8eyPg.js";import"./Sector-DeLHi04Y.js";import"./Symbols-B091hayX.js";import"./Curve-CXXZiBGe.js";import"./RegisterGraphicalItemId-BIrQ-TMI.js";import"./ErrorBarContext-DTL9as4J.js";import"./GraphicalItemClipPath-CU1RZZTa.js";import"./SetGraphicalItem-BrubgrnS.js";import"./getZIndexFromUnknown-C8aexY0e.js";import"./graphicalItemSelectors-Bdgj_snZ.js";import"./index-C1Q9sGQl.js";import"./ChartSizeDimensions-C4K5r_rw.js";import"./OffsetShower-DJsmVlcW.js";import"./PlotAreaShower-poQ332x-.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
