import{e as t}from"./iframe-rLfMAXZA.js";import{R as c}from"./arrayEqualityCheck-OjJIGGxq.js";import{C as d}from"./ComposedChart-BjVk6FMS.js";import{A as l}from"./Area-Di74ngzJ.js";import{R as h}from"./RechartsHookInspector-CGMMyBd8.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cy3Gz-UL.js";import"./immer-DvqdMPbs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C5rZD4qh.js";import"./index-1CgFOnhG.js";import"./hooks-DgA2khsF.js";import"./axisSelectors-Cq_h1C-j.js";import"./d3-scale-DULTCxaQ.js";import"./zIndexSlice-CNK81FG0.js";import"./renderedTicksSlice-BlSnCr41.js";import"./CartesianChart-C_VZaAy7.js";import"./chartDataContext-B3WND6K7.js";import"./CategoricalChart-CTzB8VLC.js";import"./Curve-DS3UGKj9.js";import"./types-BRd5e3b8.js";import"./step-DkSlwgc8.js";import"./Layer-B0Vv-b1h.js";import"./ReactUtils-BClzbOkG.js";import"./Label-BHs-e8Zr.js";import"./Text-BWQYbcH-.js";import"./DOMUtils-CYiDz4oM.js";import"./ZIndexLayer-CsEI63Vc.js";import"./ActivePoints-l6297kMX.js";import"./Dot-0q9wAizM.js";import"./RegisterGraphicalItemId-5AOI34gd.js";import"./GraphicalItemClipPath-f54LuI1V.js";import"./SetGraphicalItem-Coif6o--.js";import"./useAnimationId-Bi7bZ4Q9.js";import"./getRadiusAndStrokeWidthFromDot-CJ49ydrZ.js";import"./graphicalItemSelectors-BXXhlkhw.js";import"./index-Ck4Yf9Sw.js";import"./ChartSizeDimensions-83vg2xh3.js";import"./OffsetShower-E_iTtzu1.js";import"./PlotAreaShower-Df-GR4o6.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
