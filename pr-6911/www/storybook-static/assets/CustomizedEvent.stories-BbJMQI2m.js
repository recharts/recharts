import{r as l,e as t}from"./iframe-B6AlQnM2.js";import{R as h}from"./arrayEqualityCheck-DOlZ0mCX.js";import{C as u}from"./ComposedChart-CFb7f_na.js";import{B as g}from"./Bar-BS-IvWS7.js";import{C as f}from"./tooltipContext-D0kn5MH1.js";import{R as C}from"./RechartsHookInspector-C4bhcvg_.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-osVefOLp.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CexAAOIz.js";import"./hooks-CQRKljNW.js";import"./axisSelectors-CbxR9aKJ.js";import"./zIndexSlice-lMltdZop.js";import"./CartesianChart-lYw6K-4N.js";import"./chartDataContext-JLBHd2Mr.js";import"./CategoricalChart-Bzfkval9.js";import"./Layer-Cdn-3vsr.js";import"./ReactUtils-ODr0KtTw.js";import"./Label-CIaajA0c.js";import"./Text-BQHJk7TW.js";import"./DOMUtils-ookTrfW2.js";import"./ZIndexLayer-KOQQKvvO.js";import"./types-C25Y7m2H.js";import"./ActiveShapeUtils-Ly0l_9qH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQhXboIW.js";import"./useAnimationId-CsS9GYvF.js";import"./Trapezoid-DdjR8tMX.js";import"./Sector-D5Wtmz4T.js";import"./Symbols-Cm6_UFeB.js";import"./Curve-DTUwCS4t.js";import"./RegisterGraphicalItemId-BrQ42RrU.js";import"./ErrorBarContext-DYHYd6lU.js";import"./GraphicalItemClipPath-CFBlDtHu.js";import"./SetGraphicalItem-BFhZLv7r.js";import"./getZIndexFromUnknown-BJAG1N7X.js";import"./graphicalItemSelectors-CtnSfe6Q.js";import"./index-CYGFbMYu.js";import"./ChartSizeDimensions-BY4lvFSe.js";import"./OffsetShower-IG_VUviu.js";import"./PlotAreaShower-DnDaw1Ql.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
