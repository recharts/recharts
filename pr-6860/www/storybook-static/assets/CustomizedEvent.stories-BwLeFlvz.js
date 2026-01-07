import{r as l,e as t}from"./iframe-VZdOSrkq.js";import{R as h}from"./arrayEqualityCheck-Ba8aNuDT.js";import{C as u}from"./ComposedChart-BhKILeAz.js";import{B as g}from"./Bar-DTA_2Xfm.js";import{C as f}from"./tooltipContext-BX2ila_0.js";import{R as C}from"./RechartsHookInspector-MoE0nLDg.js";import{p as a}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CnCOAE1M.js";import"./PolarUtils-CC6VYEjV.js";import"./RechartsWrapper-Dvu2t6Ac.js";import"./hooks-5m2MLZXp.js";import"./axisSelectors-BKO4jsPN.js";import"./zIndexSlice-C3gfI6wW.js";import"./CartesianChart-BoW6sGG3.js";import"./chartDataContext-B6oCj1lT.js";import"./CategoricalChart-Cp_1f-8v.js";import"./Layer-BsibGM2g.js";import"./ReactUtils-CxvXJs5p.js";import"./Label-wuhIVgaJ.js";import"./Text-C2K_oBbR.js";import"./DOMUtils-CnMWRd9H.js";import"./ZIndexLayer-G2n4L0mz.js";import"./types-pQqJf-MX.js";import"./ActiveShapeUtils-k9tVA3cu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CC7CQlR8.js";import"./useAnimationId-DK5gOqc4.js";import"./Trapezoid-DZdQIPsQ.js";import"./Sector-BFy_SoTX.js";import"./Symbols-C6oyye2I.js";import"./Curve-Drsk9B8o.js";import"./RegisterGraphicalItemId-CqL-lSFz.js";import"./ErrorBarContext-d23jDSCo.js";import"./GraphicalItemClipPath-BKYgv61x.js";import"./SetGraphicalItem-B3ZhK10N.js";import"./getZIndexFromUnknown-C_Bz-Qor.js";import"./graphicalItemSelectors-Bfxoe3GI.js";import"./index-BmO0aGXh.js";import"./ChartSizeDimensions-D3Cff-Ry.js";import"./OffsetShower-kLJdjlLh.js";import"./PlotAreaShower-zycKA3rU.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
