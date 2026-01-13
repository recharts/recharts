import{r as l,e as t}from"./iframe-BqhCRw8_.js";import{R as h}from"./arrayEqualityCheck-C0e5XGku.js";import{C as u}from"./ComposedChart-XGDLsI_Y.js";import{B as g}from"./Bar-vn3QEjbe.js";import{C as f}from"./tooltipContext-CfZt-ZyU.js";import{R as C}from"./RechartsHookInspector-D3QTgPO3.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Ayaicgzr.js";import"./PolarUtils-DQrS6uhh.js";import"./RechartsWrapper-CKbioI8N.js";import"./hooks-9X7mYxl9.js";import"./axisSelectors-HrCd8mj3.js";import"./zIndexSlice-DIIl2FeU.js";import"./CartesianChart-FjeQ0j5o.js";import"./chartDataContext-CS827bLR.js";import"./CategoricalChart-DGivdYUS.js";import"./Layer-STOxxKM-.js";import"./ReactUtils-CMMuRoIm.js";import"./Label-DtQEJ7YC.js";import"./Text-BS3Ermk4.js";import"./DOMUtils-Dw5i-fzQ.js";import"./ZIndexLayer-ZQy-DVxw.js";import"./types-DSzwAYYq.js";import"./ActiveShapeUtils-BwvIzm_Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bg3AWp4l.js";import"./useAnimationId-DEFSqTDH.js";import"./Trapezoid-D6Ifyq-x.js";import"./Sector-Cc8cLGGz.js";import"./Symbols-BJgGnflL.js";import"./Curve-ttUwhXb9.js";import"./RegisterGraphicalItemId-OICgoI54.js";import"./ErrorBarContext-B1PjpMzV.js";import"./GraphicalItemClipPath-De0vPM73.js";import"./SetGraphicalItem-5CyATFN5.js";import"./getZIndexFromUnknown-Dnp5hs8k.js";import"./graphicalItemSelectors-BEuupId7.js";import"./index-BUjJ7HF5.js";import"./ChartSizeDimensions-DGTJjry1.js";import"./OffsetShower-HUtE30KP.js";import"./PlotAreaShower-C7l9vpaF.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
