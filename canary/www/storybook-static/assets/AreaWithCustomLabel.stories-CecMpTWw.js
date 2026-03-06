import{e as t}from"./iframe-B82KKzsZ.js";import{R as c}from"./arrayEqualityCheck-Cg0idRhp.js";import{C as d}from"./ComposedChart-D9FBDa9m.js";import{A as l}from"./Area-C2q9Th6e.js";import{R as h}from"./RechartsHookInspector-Dn_N91Ha.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cz2WpobP.js";import"./immer-Cjr4YINx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dy52E8zA.js";import"./index-BPhr2cwx.js";import"./hooks-C_Bk0iWL.js";import"./axisSelectors-BlY0RvlZ.js";import"./d3-scale-gdEhlQZC.js";import"./zIndexSlice-DoZOUHwV.js";import"./renderedTicksSlice-D6QyWwDV.js";import"./CartesianChart-DjM6_Ohn.js";import"./chartDataContext-BVeH-QEp.js";import"./CategoricalChart-BF433tP-.js";import"./Curve-BsV_hxX6.js";import"./types-DaFthwO7.js";import"./step-D_vNME6r.js";import"./Layer-ug_gWv5Y.js";import"./ReactUtils-CyWe8bPC.js";import"./Label-CoPQcGVn.js";import"./Text-C1AVdMVq.js";import"./DOMUtils-DQZy4jxA.js";import"./ZIndexLayer-CCx46f1u.js";import"./ActivePoints-Bp-xuhXe.js";import"./Dot-BzE5qBfr.js";import"./RegisterGraphicalItemId-tJqvGPQR.js";import"./GraphicalItemClipPath-Chx7G7zK.js";import"./SetGraphicalItem-BNPEWY7y.js";import"./useAnimationId-BjMwuZHe.js";import"./getRadiusAndStrokeWidthFromDot-VGAN5l6V.js";import"./graphicalItemSelectors-DUfLVgT0.js";import"./index-BDwCI-pI.js";import"./ChartSizeDimensions-DGlceztD.js";import"./OffsetShower-BguOTWfQ.js";import"./PlotAreaShower-CC5s-Y7u.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
