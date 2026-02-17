import{e as t}from"./iframe-DtzQZ5We.js";import{R as c}from"./arrayEqualityCheck-3Q4fEezD.js";import{C as d}from"./ComposedChart-DKZIKN5k.js";import{A as l}from"./Area-Bn16hYcS.js";import{R as h}from"./RechartsHookInspector-podkStYr.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BRs_UQ99.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGOHUa9W.js";import"./hooks-B-LrQ_eV.js";import"./axisSelectors-BkRgZDRN.js";import"./zIndexSlice-DS1PNPXk.js";import"./renderedTicksSlice-CW-ChE7J.js";import"./CartesianChart-DjEZ7rdy.js";import"./chartDataContext-DsBjDkWS.js";import"./CategoricalChart-p0GBJql4.js";import"./Curve-C7rWq_eQ.js";import"./types-DcSMO55m.js";import"./Layer-P1mRwVv-.js";import"./ReactUtils-Bg8ILpJF.js";import"./Label-D5-8z0UP.js";import"./Text-plRA5L0Q.js";import"./DOMUtils-KcfZip85.js";import"./ZIndexLayer-DGEtHlps.js";import"./ActivePoints-CLc9h_MH.js";import"./Dot-D4WZdJ7E.js";import"./RegisterGraphicalItemId-BLNhdTAM.js";import"./GraphicalItemClipPath-pRNKwbfQ.js";import"./SetGraphicalItem-B7Fz13cw.js";import"./useAnimationId-GgPPrJFw.js";import"./getRadiusAndStrokeWidthFromDot-Cnf2Ftr7.js";import"./graphicalItemSelectors-D6Epzwcp.js";import"./index-CiWjk4ms.js";import"./ChartSizeDimensions-DX7nzkVv.js";import"./OffsetShower-CSfFk_uM.js";import"./PlotAreaShower-IRVjM9_1.js";const tt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const et=["CustomizedLabel"];export{e as CustomizedLabel,et as __namedExportsOrder,tt as default};
