import{r as l,e as t}from"./iframe-DmHHE4lP.js";import{R as h}from"./arrayEqualityCheck-t0Foyoao.js";import{C as u}from"./ComposedChart-6GwosE_U.js";import{B as g}from"./Bar-C6ldBGSs.js";import{C as f}from"./tooltipContext-xBV0Wx8f.js";import{R as C}from"./RechartsHookInspector-BtHYkDer.js";import{p as a}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BLzxoPkq.js";import"./PolarUtils-BW7uHe1I.js";import"./RechartsWrapper-C1weQJJR.js";import"./hooks-bj9uygVC.js";import"./axisSelectors-Cnyrx2M2.js";import"./zIndexSlice-hpqEhuIa.js";import"./CartesianChart-C2N9FbeV.js";import"./chartDataContext-DxXmJ6_0.js";import"./CategoricalChart-dxXdOniQ.js";import"./Layer-B8hcK7zD.js";import"./ReactUtils-ChDQdCA9.js";import"./Label-BJNNtMeT.js";import"./Text-CR1SXK76.js";import"./DOMUtils-v_MlezWk.js";import"./ZIndexLayer-Cu-NSXrz.js";import"./types-BHzH6qVj.js";import"./ActiveShapeUtils-DlVOZy2E.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DV7CNXNv.js";import"./useAnimationId-DURIfTWV.js";import"./Trapezoid-Bb17YseS.js";import"./Sector-DhfQ1iXA.js";import"./Symbols-CRlDXm6y.js";import"./Curve-Dz5aWL22.js";import"./RegisterGraphicalItemId-D2_orhVu.js";import"./ErrorBarContext-D_EijXm5.js";import"./GraphicalItemClipPath-CceA_Jya.js";import"./SetGraphicalItem-CnsK4wo_.js";import"./getZIndexFromUnknown-B1q3hXKr.js";import"./graphicalItemSelectors-BuXcKGQd.js";import"./index-B2ii1mag.js";import"./ChartSizeDimensions-DBLPZq_x.js";import"./OffsetShower-D9qv0nDO.js";import"./PlotAreaShower-rpYBhLSK.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
