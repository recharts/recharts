import{e as t}from"./iframe-C04w6IgM.js";import{R as c}from"./arrayEqualityCheck-CbUGNhnJ.js";import{C as d}from"./ComposedChart-CocGbXJ_.js";import{A as l}from"./Area-DWp62oW3.js";import{R as h}from"./RechartsHookInspector-B7Jr2nYf.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-W7dKz5yL.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CFnGMsu4.js";import"./hooks-Cld4lrxT.js";import"./axisSelectors-BYq9-SUS.js";import"./zIndexSlice-BbE5d2nx.js";import"./CartesianChart-enHf794Z.js";import"./chartDataContext-Cjixp2uN.js";import"./CategoricalChart-PYyhSed2.js";import"./Curve-BQk4xMcU.js";import"./types-D-OVIK3i.js";import"./Layer-DCya1uir.js";import"./ReactUtils-C2UklmlD.js";import"./Label-B7VXzhwV.js";import"./Text-BJaKJCkK.js";import"./DOMUtils-BGMw9OAN.js";import"./ZIndexLayer-HIOEAvam.js";import"./ActivePoints-BaLEk5hj.js";import"./Dot-FCeRraIm.js";import"./RegisterGraphicalItemId-DHraWFR-.js";import"./GraphicalItemClipPath-Do9yu51T.js";import"./SetGraphicalItem-vjtDhulh.js";import"./useAnimationId-DPZtvNGp.js";import"./getRadiusAndStrokeWidthFromDot-DFtLqJEr.js";import"./graphicalItemSelectors-DNc51F5r.js";import"./index-Demzea1L.js";import"./ChartSizeDimensions-BMKfYLeY.js";import"./OffsetShower-RZSmdjyo.js";import"./PlotAreaShower-BeZsrL7O.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
