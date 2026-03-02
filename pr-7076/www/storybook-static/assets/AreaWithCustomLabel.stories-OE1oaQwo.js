import{e as t}from"./iframe-DJ6q0UO-.js";import{R as c}from"./arrayEqualityCheck-BTG2-4hW.js";import{C as d}from"./ComposedChart-C7rLgjOW.js";import{A as l}from"./Area-Br2EFqkL.js";import{R as h}from"./RechartsHookInspector-CMjN7xhZ.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ClNXOKlU.js";import"./immer-DZ05EljQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CC4bWY2k.js";import"./index-h_islmiW.js";import"./hooks-BoprsZkg.js";import"./axisSelectors-tM2Ez228.js";import"./d3-scale-_iIYR1pZ.js";import"./zIndexSlice-BmNGt8JH.js";import"./renderedTicksSlice-D51KP5us.js";import"./CartesianChart-CehgIYHu.js";import"./chartDataContext-CvUYCtAC.js";import"./CategoricalChart-CFoaXUlO.js";import"./Curve-CUiTauC8.js";import"./types-Ds0jwWEi.js";import"./step-B8mY4Wsq.js";import"./Layer-DYjtWcck.js";import"./ReactUtils-eTAsrJ6L.js";import"./Label-Cfw2XXr5.js";import"./Text-DLyfATo-.js";import"./DOMUtils-DG6JE6vP.js";import"./ZIndexLayer-nrCDqpeq.js";import"./ActivePoints-BPWixHwU.js";import"./Dot-p8yv5QeN.js";import"./RegisterGraphicalItemId-CMX_3-4x.js";import"./GraphicalItemClipPath-DQW1wzar.js";import"./SetGraphicalItem-DKRiAGC0.js";import"./useAnimationId-DdUAPJ1J.js";import"./getRadiusAndStrokeWidthFromDot-BC9cTS7x.js";import"./graphicalItemSelectors-DXspcLFK.js";import"./index-Drj3rz67.js";import"./ChartSizeDimensions-Az2tJg6r.js";import"./OffsetShower-FoNPoJYn.js";import"./PlotAreaShower-DMVJxorS.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
