import{r as l,e as t}from"./iframe-Cwpfa-aU.js";import{R as h}from"./arrayEqualityCheck-4s7O9CHw.js";import{C as u}from"./ComposedChart-Bjflq6a1.js";import{B as g}from"./Bar-RerBpz0k.js";import{C as f}from"./tooltipContext-Bd7ebjWJ.js";import{R as C}from"./RechartsHookInspector-RngvJaov.js";import{p as a}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bl1VkIJn.js";import"./PolarUtils-D6OsdRao.js";import"./RechartsWrapper-DV1HqoPP.js";import"./hooks-Bu64bUH6.js";import"./axisSelectors-CkO9segl.js";import"./zIndexSlice-IilHGL9E.js";import"./CartesianChart-B8cIlo8Y.js";import"./chartDataContext-BoIsIy8h.js";import"./CategoricalChart-yeCIXBUW.js";import"./Layer-C5Up6lye.js";import"./ReactUtils-DiD0pNfa.js";import"./Label-BkH8bmvn.js";import"./Text-DG71k7CA.js";import"./DOMUtils-DpdULDT0.js";import"./ZIndexLayer-MboeMBT5.js";import"./types-C0n05tvQ.js";import"./ActiveShapeUtils-CwrCrcpP.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DrpUAVjZ.js";import"./useAnimationId-BNxZGCVU.js";import"./Trapezoid-DIkxpdcS.js";import"./Sector-DE839nPA.js";import"./Symbols-4LuKRow4.js";import"./Curve-Bv3AqiO6.js";import"./RegisterGraphicalItemId-BzYcbqE1.js";import"./ErrorBarContext-BLvMse44.js";import"./GraphicalItemClipPath-BWumZjSv.js";import"./SetGraphicalItem-CnrbgEG2.js";import"./getZIndexFromUnknown-DDcD80js.js";import"./graphicalItemSelectors-C_fj_LyG.js";import"./index-KilI1ssy.js";import"./ChartSizeDimensions-BzGykHcH.js";import"./OffsetShower-uqw3cQhV.js";import"./PlotAreaShower-DvkDcG7R.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
