import{r as l,e as t}from"./iframe-BfI_ST9A.js";import{R as h}from"./arrayEqualityCheck-Dpn6Yh1q.js";import{C as u}from"./ComposedChart-C5RXmCa-.js";import{B as g}from"./Bar-ShCQHpkI.js";import{C as f}from"./tooltipContext-Cb6TcB2g.js";import{R as C}from"./RechartsHookInspector-CVEQV9do.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-AaslCT8i.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-B_X6-_SZ.js";import"./hooks-DvK6IaUs.js";import"./axisSelectors-DDmdM9p6.js";import"./zIndexSlice-DXwF7pA6.js";import"./CartesianChart-DXCnOxpF.js";import"./chartDataContext-CeBJp2Px.js";import"./CategoricalChart-DD3vhlwU.js";import"./Layer-Y7LjbTmX.js";import"./ReactUtils-DCNpXtNn.js";import"./Label-bNYHk-eM.js";import"./Text-rhuK2TCR.js";import"./DOMUtils-bXouPdN4.js";import"./ZIndexLayer-BqmPWyE4.js";import"./types-C63RoX8s.js";import"./ActiveShapeUtils-DHutry9j.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ClKhcP1j.js";import"./useAnimationId-COKmXqbi.js";import"./Trapezoid-BD9djYD6.js";import"./Sector-65rnMIz8.js";import"./Symbols-BZnP9syB.js";import"./Curve-CQI60C70.js";import"./RegisterGraphicalItemId-B5NRYeBm.js";import"./ErrorBarContext-Dkb4HGWS.js";import"./GraphicalItemClipPath-Dc-fHHFr.js";import"./SetGraphicalItem-CI8DucV2.js";import"./getZIndexFromUnknown-Clkxlh-M.js";import"./graphicalItemSelectors-Di-oLN0e.js";import"./index-ChuKY9XN.js";import"./ChartSizeDimensions-BiyrgYor.js";import"./OffsetShower-SG_pY0kd.js";import"./PlotAreaShower-DWEL4ESW.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
