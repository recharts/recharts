import{r as l,e as t}from"./iframe-Dt2-Rn2T.js";import{R as h}from"./arrayEqualityCheck-e3rdG8sZ.js";import{C as u}from"./ComposedChart-CpKIk9zm.js";import{B as g}from"./Bar-DKKXbD6J.js";import{C as f}from"./tooltipContext-BR1HLUbB.js";import{R as C}from"./RechartsHookInspector-5aSdxu_t.js";import{p as a}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BoKEDzkZ.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CBGhND_r.js";import"./hooks-DJKBhfj1.js";import"./axisSelectors-B_oLlWSB.js";import"./zIndexSlice-C1nzEFYS.js";import"./CartesianChart-B7uV6D3o.js";import"./chartDataContext-DW1Hpk6b.js";import"./CategoricalChart-Dpdb76Jr.js";import"./Layer-Cy-kS3Tn.js";import"./ReactUtils-OtSSiA15.js";import"./Label-C32CYHoq.js";import"./Text-Bi0muiqL.js";import"./DOMUtils-ngjC_q0v.js";import"./ZIndexLayer-RqzvM65R.js";import"./types-BU6HIYaW.js";import"./ActiveShapeUtils-d0cRIwlh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CbTbEpru.js";import"./useAnimationId-C5m05tY7.js";import"./Trapezoid-BtcZZN-I.js";import"./Sector-D7OsKu7Y.js";import"./Symbols-Cq9VSHhf.js";import"./Curve-Ff2ksW4t.js";import"./RegisterGraphicalItemId-BHPtgntX.js";import"./ErrorBarContext-Ds0jOqwg.js";import"./GraphicalItemClipPath-DzB0Slfu.js";import"./SetGraphicalItem-C72JWaDt.js";import"./getZIndexFromUnknown-CodYqlwr.js";import"./graphicalItemSelectors-CxiBt8fS.js";import"./index-DBIfqZnx.js";import"./ChartSizeDimensions-CGKu1G21.js";import"./OffsetShower-Cg1AihHI.js";import"./PlotAreaShower-Byk-bE4C.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
