import{r as l,e as t}from"./iframe-B6ZCI1X-.js";import{R as h}from"./arrayEqualityCheck-Vy2dcV_o.js";import{C as u}from"./ComposedChart-BW4GWPKl.js";import{B as g}from"./Bar-BlAac2xy.js";import{C as f}from"./tooltipContext-iR4QyRDe.js";import{R as C}from"./RechartsHookInspector-B_-BIKM5.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BfRNrOjX.js";import"./PolarUtils-DT5LUPN4.js";import"./RechartsWrapper-Cm4MNb60.js";import"./hooks-B7AKPgu3.js";import"./axisSelectors-B7jgX05e.js";import"./zIndexSlice-CZ608RYy.js";import"./CartesianChart-3kl8J4OM.js";import"./chartDataContext-K1HgDw51.js";import"./CategoricalChart-DmGE5R29.js";import"./Layer-fYHElE4I.js";import"./ReactUtils-DztpHcKA.js";import"./Label-D44TMXj3.js";import"./Text-1BcInixy.js";import"./DOMUtils-DnJTSxHK.js";import"./ZIndexLayer-NdV45W3l.js";import"./types-lQyAqjcM.js";import"./ActiveShapeUtils-CayjX_j1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dvu--PZM.js";import"./useAnimationId-Czd9yhg2.js";import"./Trapezoid-CWebkWYz.js";import"./Sector-oW786f9C.js";import"./Symbols-BpZDCS87.js";import"./Curve-xA1LMbbI.js";import"./RegisterGraphicalItemId-CkZvvq8r.js";import"./ErrorBarContext-CRJ4zZZo.js";import"./GraphicalItemClipPath-BH-LuHt6.js";import"./SetGraphicalItem-BsBYfoCl.js";import"./getZIndexFromUnknown-ae47ogNu.js";import"./graphicalItemSelectors-BhWz4r4-.js";import"./index-DYaSePyf.js";import"./ChartSizeDimensions-B6sRHlXe.js";import"./OffsetShower-BW9M7Gqo.js";import"./PlotAreaShower-BOQNx6Qk.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
