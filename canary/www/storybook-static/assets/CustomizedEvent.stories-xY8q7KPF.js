import{r as l,e as t}from"./iframe-DGrXlEkx.js";import{R as h}from"./arrayEqualityCheck-DicChNuU.js";import{C as u}from"./ComposedChart-B5e_pVnj.js";import{B as g}from"./Bar-BYyXHyBl.js";import{C as f}from"./tooltipContext-CMxTeChW.js";import{R as C}from"./RechartsHookInspector-Br39JKkJ.js";import{p as a}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CbjUZWO4.js";import"./PolarUtils-DHWqJfSQ.js";import"./RechartsWrapper-BsZxNtsW.js";import"./hooks-BJzdHLQJ.js";import"./axisSelectors-B99hHUji.js";import"./zIndexSlice-BOlzJk7E.js";import"./CartesianChart-DhyYzKH1.js";import"./chartDataContext-xgZ2IC4i.js";import"./CategoricalChart-CoFZdKLi.js";import"./Layer-D3LXHH9n.js";import"./ReactUtils-B0RMD20A.js";import"./Label-BU6Zd3bq.js";import"./Text-DHLuacJp.js";import"./DOMUtils-BNpuiDkW.js";import"./ZIndexLayer-B0lWMP9E.js";import"./types-Byz7h8Fw.js";import"./ActiveShapeUtils-Dmo5KH5o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_ChE2a8.js";import"./useAnimationId-BLzFnaDj.js";import"./Trapezoid-D3rkb8mR.js";import"./Sector-BiHhGzVm.js";import"./Symbols-lPueLsWK.js";import"./Curve-B7GNUcvb.js";import"./RegisterGraphicalItemId-kRuXUne3.js";import"./ErrorBarContext-B6C65bkw.js";import"./GraphicalItemClipPath-BaBV_qBF.js";import"./SetGraphicalItem-DtkD_AUo.js";import"./getZIndexFromUnknown-4XxdtdY6.js";import"./graphicalItemSelectors-BPbz2guO.js";import"./index-DUFFx6eI.js";import"./ChartSizeDimensions-DMMvC6d0.js";import"./OffsetShower-T7KMfcKq.js";import"./PlotAreaShower-B7mPYwn0.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
