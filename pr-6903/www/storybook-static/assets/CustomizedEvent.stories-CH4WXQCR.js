import{r as l,e as t}from"./iframe-Bn_7jga7.js";import{R as h}from"./arrayEqualityCheck-CSuBYCWj.js";import{C as u}from"./ComposedChart-3lWxqoA_.js";import{B as g}from"./Bar-BV3geYnv.js";import{C as f}from"./tooltipContext-BkkKQoXo.js";import{R as C}from"./RechartsHookInspector-B4H5Lyo-.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DCdxs1iD.js";import"./PolarUtils-CBWSHxoJ.js";import"./RechartsWrapper-DSmS8nVp.js";import"./hooks-BL6pVXml.js";import"./axisSelectors-B3n8BDRj.js";import"./zIndexSlice-usP7cHtF.js";import"./CartesianChart-CFgpMI4e.js";import"./chartDataContext-CGN_dwZ0.js";import"./CategoricalChart-C3CVYlbu.js";import"./Layer-COTxk2h3.js";import"./ReactUtils-GlbSvDIy.js";import"./Label-CS-Zhu5a.js";import"./Text-BQI8M-tq.js";import"./DOMUtils-CRyukOD8.js";import"./ZIndexLayer-BXCJNtZK.js";import"./types-SXh4X6nB.js";import"./ActiveShapeUtils-BF53wkQd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Wjj6MIuU.js";import"./useAnimationId-id_mTj1h.js";import"./Trapezoid-BCX-j7xi.js";import"./Sector-CuwRjw3S.js";import"./Symbols-DCEXw1ah.js";import"./Curve-qns-9S5i.js";import"./RegisterGraphicalItemId-BEPfbN5x.js";import"./ErrorBarContext-D9hbJwiU.js";import"./GraphicalItemClipPath-ECv6yN9n.js";import"./SetGraphicalItem-BWnuaPkJ.js";import"./getZIndexFromUnknown-D2dzffDO.js";import"./graphicalItemSelectors-feZHKy87.js";import"./index-wlSGh2Q3.js";import"./ChartSizeDimensions-C28_hYOe.js";import"./OffsetShower-BxoubtuL.js";import"./PlotAreaShower-Czw-Abfi.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
