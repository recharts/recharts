import{r as l,e as t}from"./iframe-Dnh1Ryvb.js";import{R as h}from"./arrayEqualityCheck-DCevfetv.js";import{C as u}from"./ComposedChart-BSdoMSkl.js";import{B as g}from"./Bar-CDqjeIGm.js";import{C as f}from"./tooltipContext-B6FP9cdT.js";import{R as C}from"./RechartsHookInspector-DMji7YUm.js";import{p as a}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Coi4LBhI.js";import"./PolarUtils-Cgm959MD.js";import"./RechartsWrapper-Ch8zJvUN.js";import"./hooks-TRp6kMUA.js";import"./axisSelectors-CwAmoCkz.js";import"./zIndexSlice-BXugI2eB.js";import"./CartesianChart-B2M6TWiT.js";import"./chartDataContext-CqWHnJZ5.js";import"./CategoricalChart-BipcxAVd.js";import"./Layer-CG0lsnsl.js";import"./ReactUtils-09bip2qn.js";import"./Label-B-RHJFae.js";import"./Text-DuqEZ_1u.js";import"./DOMUtils-Bor3dP_R.js";import"./ZIndexLayer-Bcm3_13n.js";import"./types-NxPc932w.js";import"./ActiveShapeUtils-oJd1nGJX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-lOgApOPv.js";import"./useAnimationId-DymxHjdh.js";import"./Trapezoid-DqrFuhKX.js";import"./Sector-CK7LUajO.js";import"./Symbols-Bi-3r2yZ.js";import"./Curve-CGOZKazJ.js";import"./RegisterGraphicalItemId-vvLaBIlf.js";import"./ErrorBarContext-ELPHN1NQ.js";import"./GraphicalItemClipPath-DCk99Thz.js";import"./SetGraphicalItem-Dm7xV0AH.js";import"./getZIndexFromUnknown-Djg4Ub9e.js";import"./graphicalItemSelectors-BEcbuxX0.js";import"./index-BBrJvbdK.js";import"./ChartSizeDimensions-DbCZNQtH.js";import"./OffsetShower-DAcHGjow.js";import"./PlotAreaShower-5JxeAXKY.js";const mt={title:"Examples/cartesian/Bar/Customised Event"},e={render:()=>{const[n,c]=l.useState(1),[d,i]=[600,300];return t.createElement(t.Fragment,null,t.createElement("h2",null,"Clicking a Bar triggers the event"),t.createElement(h,{width:"100%",height:i},t.createElement(u,{width:d,height:i,margin:{top:20,right:20,bottom:20,left:20},data:a},t.createElement(g,{onClick:(o,r)=>c(r),dataKey:"uv",isAnimationActive:!1},a.map(({name:o},r)=>t.createElement(f,{cursor:"pointer",fill:r===n?"#82ca9d":"#8884d8",key:`cell-${o}`}))),t.createElement(C,null))))}};var m,p,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
