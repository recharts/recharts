import{r as l,e as t}from"./iframe-DkFnKmz6.js";import{R as h}from"./arrayEqualityCheck-B_Ane2tr.js";import{C as u}from"./ComposedChart-DUjCvTFh.js";import{B as g}from"./Bar-C5Ll2VlH.js";import{C as f}from"./tooltipContext-BmNlyCXP.js";import{R as C}from"./RechartsHookInspector-B3tFzt2u.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BEmCTT1M.js";import"./PolarUtils-C_yoPd2g.js";import"./RechartsWrapper-Bs4V9sqh.js";import"./hooks-W6coKbOT.js";import"./axisSelectors-DvTbuhYF.js";import"./zIndexSlice-DVsC50MZ.js";import"./CartesianChart-CvoDLFkd.js";import"./chartDataContext-BD-hpc_7.js";import"./CategoricalChart-CWiOLY2_.js";import"./Layer-BKurILEC.js";import"./ReactUtils-zV5IbihU.js";import"./Label-mt1d5eVZ.js";import"./Text-mK8iFpSb.js";import"./DOMUtils-8Q3WDKQX.js";import"./ZIndexLayer-CZJ8gmuc.js";import"./types-DoGupJwC.js";import"./ActiveShapeUtils-vu-MuxxL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bgeub8cz.js";import"./useAnimationId-ClFGkqN9.js";import"./Trapezoid-1bT7tRHO.js";import"./Sector-iBjQq3Q9.js";import"./Symbols-BHmBNcPX.js";import"./Curve-CQB8Wbk0.js";import"./RegisterGraphicalItemId-2BrkyC_A.js";import"./ErrorBarContext-BbmTUWcN.js";import"./GraphicalItemClipPath-DEpjOnpI.js";import"./SetGraphicalItem-C0TqoRHl.js";import"./getZIndexFromUnknown-DNROikfi.js";import"./graphicalItemSelectors-Bg_bTf37.js";import"./index-DeWANcHY.js";import"./ChartSizeDimensions-DX00xq4b.js";import"./OffsetShower-B1JfcMLk.js";import"./PlotAreaShower-B1NfTpo7.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
