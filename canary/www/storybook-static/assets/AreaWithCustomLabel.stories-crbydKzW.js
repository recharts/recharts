import{e as t}from"./iframe-BC-5LcYb.js";import{R as c}from"./arrayEqualityCheck-ChXaihMZ.js";import{C as d}from"./ComposedChart-CeA0TXnQ.js";import{A as l}from"./Area-DWrdteA5.js";import{R as h}from"./RechartsHookInspector-B75ZFa4B.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZYO2Ka-.js";import"./immer-ZiBWKhHb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B8Da5X0m.js";import"./index-DddLbDqU.js";import"./hooks-rB50_RV3.js";import"./axisSelectors-CxQAx9lZ.js";import"./d3-scale-PqmOg0fe.js";import"./zIndexSlice-BntL5RH1.js";import"./renderedTicksSlice-D9tlxui6.js";import"./CartesianChart-B_l4BcVo.js";import"./chartDataContext-w--Sw2J9.js";import"./CategoricalChart-CIq8dObJ.js";import"./Curve-28zddxeA.js";import"./types-DPX13aC-.js";import"./step-CVSHTaSO.js";import"./Layer-DTseK4B8.js";import"./ReactUtils-DTBTVl0S.js";import"./Label-DpYIsLw2.js";import"./Text-BCKsJQhx.js";import"./DOMUtils-BFDtjzpb.js";import"./ZIndexLayer-Dl-ZMGAP.js";import"./ActivePoints-CiWs6vAv.js";import"./Dot-DN8gKT9r.js";import"./RegisterGraphicalItemId-Bcc7KsZV.js";import"./GraphicalItemClipPath-DkytICF2.js";import"./SetGraphicalItem--aBLcxY1.js";import"./useAnimationId-1buHKKGB.js";import"./getRadiusAndStrokeWidthFromDot-D-M3bT9T.js";import"./graphicalItemSelectors-Cp-rtP27.js";import"./index-D_pdBQCR.js";import"./ChartSizeDimensions-DlGGqx96.js";import"./OffsetShower-vrKiwX_5.js";import"./PlotAreaShower-D4359Ub-.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
