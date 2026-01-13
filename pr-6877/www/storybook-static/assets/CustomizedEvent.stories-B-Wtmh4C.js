import{r as l,e as t}from"./iframe-BIMs3Nj-.js";import{R as h}from"./arrayEqualityCheck-pDlZyWSR.js";import{C as u}from"./ComposedChart-DZntHa2l.js";import{B as g}from"./Bar-DEqPdCGX.js";import{C as f}from"./tooltipContext-DYJYscQi.js";import{R as C}from"./RechartsHookInspector-DBOIj4qW.js";import{p as a}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C_VwJ3u_.js";import"./PolarUtils-BWV_hv32.js";import"./RechartsWrapper-Bo8-B70G.js";import"./hooks-Bc7hX-2Z.js";import"./axisSelectors-NKchjqRS.js";import"./zIndexSlice-Cnolt5PP.js";import"./CartesianChart-BUJVTvnU.js";import"./chartDataContext-Dko-7FeN.js";import"./CategoricalChart-DCejedhJ.js";import"./Layer-DBgzSzH_.js";import"./ReactUtils-3uFwj_TO.js";import"./Label-CIRwRBMZ.js";import"./Text-CgjsJcds.js";import"./DOMUtils-voeX-mFj.js";import"./ZIndexLayer-DJ3JTFRU.js";import"./types-CnKH5I-b.js";import"./ActiveShapeUtils-CV_fg9r-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dx9fcimO.js";import"./useAnimationId-DJ77ibSq.js";import"./Trapezoid-B19U1HS5.js";import"./Sector-B3pSkdDH.js";import"./Symbols-BUMcrI7R.js";import"./Curve-DwuONHqE.js";import"./RegisterGraphicalItemId-DeUg8eaE.js";import"./ErrorBarContext-87-HwFAI.js";import"./GraphicalItemClipPath-Bw0KLcwW.js";import"./SetGraphicalItem-D5C3EpbS.js";import"./getZIndexFromUnknown-Co5pP1Xp.js";import"./graphicalItemSelectors-BzaNkFBM.js";import"./index-CngAoIpS.js";import"./ChartSizeDimensions-C2UWIaZL.js";import"./OffsetShower-DVFE9F3Y.js";import"./PlotAreaShower-DBdBZo3w.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
