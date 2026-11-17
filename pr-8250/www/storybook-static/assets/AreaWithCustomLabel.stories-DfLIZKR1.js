import{R as r}from"./iframe-DU9JCgt3.js";import{R as c}from"./zIndexSlice-CxGcNVtb.js";import{C as d}from"./ComposedChart-CdeuUBYe.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D7hAYV2Q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DjHw4YyH.js";import"./throttle-BSvWgvBy.js";import"./index-BY0VFtFS.js";import"./index-CswZpk24.js";import"./RechartsWrapper-EGU-JwYV.js";import"./axisSelectors-Ba1wHviL.js";import"./polarAxisSelectors-2A6VXBMe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D71t0tOP.js";import"./index-BABuRh0J.js";import"./index-CiCV4MQd.js";import"./renderedTicksSlice-Dpx6Aro9.js";import"./index-BMDBiiS9.js";import"./fillDefinitions-CAZ5LaLK.js";import"./CartesianChart-D0Nvp_pW.js";import"./chartDataContext-D3U_nlv4.js";import"./CategoricalChart-BN1LMHzB.js";import"./getRadiusAndStrokeWidthFromDot-DhmVJFDn.js";import"./Layer-8TmRCycn.js";import"./dataEntryStyles-BKp-1fzi.js";import"./Label-TtbmFLuu.js";import"./Text-CxPCVLsv.js";import"./ZIndexLayer-DyKyG2im.js";import"./ActivePoints-BMENxG1Z.js";import"./Dot-Cq9hKL4h.js";import"./types-BRIT5d70.js";import"./activeStyles-DjdKzu9Y.js";import"./useAnimationId-CMFzH8KV.js";import"./Symbols-CqwNhkfd.js";import"./symbol-C9biWcKI.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-Dj9i93RZ.js";import"./ActiveShapeUtils-CkxgtXn-.js";import"./Curve-CiFPjJzw.js";import"./step-CSLjLb0b.js";import"./useEffectiveDataKey-9kbdNBk-.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
