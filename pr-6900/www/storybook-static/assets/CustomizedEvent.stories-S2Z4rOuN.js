import{r as l,e as t}from"./iframe-CLIMsGOZ.js";import{R as h}from"./arrayEqualityCheck-CbYFkYA0.js";import{C as u}from"./ComposedChart-CdyWcK0I.js";import{B as g}from"./Bar-BtNuA1eL.js";import{C as f}from"./tooltipContext-BI8Gpz0W.js";import{R as C}from"./RechartsHookInspector-B158dvGO.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-E8mWkwf6.js";import"./PolarUtils-BIAYT_Jm.js";import"./RechartsWrapper-lPK7Cxev.js";import"./hooks-DenE5nGN.js";import"./axisSelectors-GOM-QLi6.js";import"./zIndexSlice-DazYr2Iy.js";import"./CartesianChart-q3xsLMrE.js";import"./chartDataContext-B4asjYes.js";import"./CategoricalChart-DAMhxPe3.js";import"./Layer-l9L2Sb8o.js";import"./ReactUtils-Bk0OFjED.js";import"./Label-QzDxpC8q.js";import"./Text-BeJ5iM47.js";import"./DOMUtils-BnxK2rS8.js";import"./ZIndexLayer-5xiPbIim.js";import"./types-HWBumAOZ.js";import"./ActiveShapeUtils-YEQ3f73b.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-JG6TvpVB.js";import"./useAnimationId-wMl1lWMr.js";import"./Trapezoid-D79jjH6v.js";import"./Sector-C08coEZ4.js";import"./Symbols-DbV1O1CF.js";import"./Curve-DXQteT8k.js";import"./RegisterGraphicalItemId-46GsKK8-.js";import"./ErrorBarContext-D97KkegB.js";import"./GraphicalItemClipPath-D_8sBR8P.js";import"./SetGraphicalItem-C8e1XdZ2.js";import"./getZIndexFromUnknown-BIHzH5Tz.js";import"./graphicalItemSelectors-C2k1hf8k.js";import"./index-8YxDhDRV.js";import"./ChartSizeDimensions-4XerZwXh.js";import"./OffsetShower-CTodD9i0.js";import"./PlotAreaShower-BoV_Aqat.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
