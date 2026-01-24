import{r as l,e as t}from"./iframe-BMCIaxKG.js";import{R as h}from"./arrayEqualityCheck--GVOH9-X.js";import{C as u}from"./ComposedChart-BiUrjWP0.js";import{B as g}from"./Bar-9gbSH6ko.js";import{C as f}from"./tooltipContext-DbQ4U6Ut.js";import{R as C}from"./RechartsHookInspector-BEE5VJHB.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DYzg8zSB.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-Bb1gDQXi.js";import"./hooks-DebnH94a.js";import"./axisSelectors-cgl3VJbu.js";import"./zIndexSlice-B9Z5B7ke.js";import"./CartesianChart-B-ZCTtvW.js";import"./chartDataContext-oBen9I8F.js";import"./CategoricalChart-epx7zaIT.js";import"./Layer-MWXbZbYh.js";import"./ReactUtils-5tDB8KCJ.js";import"./Label-DX5r6J7L.js";import"./Text-C3pNOBoN.js";import"./DOMUtils-Bqla5JdC.js";import"./ZIndexLayer-D3DglK0F.js";import"./types-CjLOz-vL.js";import"./ActiveShapeUtils-DtnCQ-cg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B1cropaK.js";import"./useAnimationId-BmU-cqjD.js";import"./Trapezoid-CAvOGSEj.js";import"./Sector-DluXzhdl.js";import"./Symbols-DwSHOnga.js";import"./Curve-B-WNVokC.js";import"./RegisterGraphicalItemId-oN7HBHom.js";import"./ErrorBarContext-KqD_eRKg.js";import"./GraphicalItemClipPath-B2ari5YW.js";import"./SetGraphicalItem-CcB6KXss.js";import"./getZIndexFromUnknown-hiISf2Pg.js";import"./graphicalItemSelectors-Doxgifoh.js";import"./index-a6yAW-au.js";import"./ChartSizeDimensions-B-pVWfha.js";import"./OffsetShower--s29U8Jg.js";import"./PlotAreaShower-CsN0ehbx.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
