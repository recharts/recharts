import{e as t}from"./iframe-CLmjlzb1.js";import{R as c}from"./arrayEqualityCheck-B4wm4mzq.js";import{C as d}from"./ComposedChart-NZAgTk7u.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BMqq9A5y.js";import{R as u}from"./RechartsHookInspector-BixZoynz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DfSSEgX9.js";import"./immer-BRhk69FB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cuidzjs6.js";import"./index-Du-W5DOH.js";import"./hooks-d-SQKimb.js";import"./axisSelectors-BSjiqA5G.js";import"./d3-scale-Cfbd6Yba.js";import"./zIndexSlice-ENrbLBpP.js";import"./renderedTicksSlice-7exySQiY.js";import"./CartesianChart-BmEkTPS6.js";import"./chartDataContext-8FmNdAi4.js";import"./CategoricalChart-Cd_MTwuC.js";import"./Curve-C2JnH5yk.js";import"./types-CPZMLz1x.js";import"./step-B08msyNS.js";import"./Layer-B8Y-IGwU.js";import"./ReactUtils-D_M8UzUW.js";import"./Label-5j72dgYu.js";import"./Text-yZ4aTas7.js";import"./DOMUtils-BTzSUo1_.js";import"./ZIndexLayer-B_c6eilm.js";import"./ActivePoints-CJhScI-d.js";import"./Dot-CmmvI3p6.js";import"./RegisterGraphicalItemId-C1ifoo0F.js";import"./GraphicalItemClipPath-DB5whV9z.js";import"./SetGraphicalItem-BreTABoz.js";import"./useAnimationId-DS-J4iW4.js";import"./getRadiusAndStrokeWidthFromDot-Dkw_fQYH.js";import"./graphicalItemSelectors-CysGfJKR.js";import"./index-D8lwKlWX.js";import"./ChartSizeDimensions-DPxIvg36.js";import"./OffsetShower-J2qKkSVX.js";import"./PlotAreaShower-BflxX8Fl.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
