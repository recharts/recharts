import{r as l,e as t}from"./iframe-Dh5fYf52.js";import{R as h}from"./arrayEqualityCheck-y3xWNCWZ.js";import{C as u}from"./ComposedChart-DvBGIcj2.js";import{B as g}from"./Bar-Blrs8c1W.js";import{C as f}from"./tooltipContext-3_OhKDI6.js";import{R as C}from"./RechartsHookInspector-ClQgWiSn.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BCuzZFIX.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-B9qWPH0f.js";import"./hooks-e_pos7oA.js";import"./axisSelectors-D3iLKS-b.js";import"./zIndexSlice-DOeznw_J.js";import"./CartesianChart-BLNnKMYl.js";import"./chartDataContext-BW7kgRyE.js";import"./CategoricalChart-D_2x8xbQ.js";import"./Layer-CyyRPVZz.js";import"./ReactUtils-DdUIndVV.js";import"./Label-BgIRNGCU.js";import"./Text-CCyTgoDW.js";import"./DOMUtils-CdAxT0DP.js";import"./ZIndexLayer-Chf-nD0r.js";import"./types-BQGztJ7o.js";import"./ActiveShapeUtils-vg5OHeFZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CNvS8JgY.js";import"./useAnimationId-hVsf5NM-.js";import"./Trapezoid-B-DbXUKn.js";import"./Sector-Boq0fYwI.js";import"./Symbols-CE_RrRcr.js";import"./Curve-BtY66874.js";import"./RegisterGraphicalItemId-dPya34ZY.js";import"./ErrorBarContext-CiVkLetL.js";import"./GraphicalItemClipPath-Cuekam0c.js";import"./SetGraphicalItem-DoysDgrz.js";import"./getZIndexFromUnknown-CYjPHDjm.js";import"./graphicalItemSelectors-B7G_vDQd.js";import"./index-AL6ZY6S6.js";import"./ChartSizeDimensions-CLcrLXEy.js";import"./OffsetShower-cs_5-XLY.js";import"./PlotAreaShower-CX2JG_yj.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
