import{r as l,e as t}from"./iframe-BMyqBDY5.js";import{R as h}from"./arrayEqualityCheck-DuyxfREv.js";import{C as u}from"./ComposedChart-3iTOeyaD.js";import{B as g}from"./Bar-4n-kNPS6.js";import{C as f}from"./tooltipContext-CyNQvS7H.js";import{R as C}from"./RechartsHookInspector-B_A0Uap_.js";import{p as a}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BGKl1tyb.js";import"./PolarUtils-P_ZfIDsv.js";import"./RechartsWrapper-hMDICSaE.js";import"./hooks-CtyWZT2U.js";import"./axisSelectors-RxIOnnLe.js";import"./zIndexSlice-Dmm35KLy.js";import"./CartesianChart-Bf-CfsMF.js";import"./chartDataContext-DO_q_27U.js";import"./CategoricalChart-Bg_NZvOR.js";import"./Layer-DWAVkTpZ.js";import"./ReactUtils-DZSdNGLK.js";import"./Label-Cc8j6S_C.js";import"./Text-C5dsmcfL.js";import"./DOMUtils-BxDLRwCB.js";import"./ZIndexLayer-BHQIN7jK.js";import"./types-C28cLjqk.js";import"./ActiveShapeUtils-HKM8HgOk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MMr5z6jI.js";import"./useAnimationId-MgACKJ1I.js";import"./Trapezoid-DUIbc0mY.js";import"./Sector-Dnl75ukO.js";import"./Symbols-DAD_VKXg.js";import"./Curve-CP_WuQoJ.js";import"./RegisterGraphicalItemId-BGAui-Ym.js";import"./ErrorBarContext-MN1I2Bli.js";import"./GraphicalItemClipPath-CBIipGUv.js";import"./SetGraphicalItem-DXrsAiCv.js";import"./getZIndexFromUnknown-DKVUESA7.js";import"./graphicalItemSelectors-DzsJ6D8k.js";import"./index-DIS5R2kz.js";import"./ChartSizeDimensions-BB84pelj.js";import"./OffsetShower-CeLLqloX.js";import"./PlotAreaShower-zjCOtUVv.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
