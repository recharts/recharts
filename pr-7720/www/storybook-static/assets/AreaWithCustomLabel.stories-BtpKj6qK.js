import{R as r}from"./iframe-BQrvPSLN.js";import{R as c}from"./zIndexSlice-7Hw-ZWkF.js";import{C as d}from"./ComposedChart-B4viTwzv.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BExnf0sO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-0gn-kluv.js";import"./index-n8L9L6eU.js";import"./index-DCJ-lssY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dldn7S-M.js";import"./isWellBehavedNumber--jy1hcq-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bwj5H6_7.js";import"./axisSelectors-rztmSPpu.js";import"./d3-scale-Dpwc0BRN.js";import"./index-C-4Z9rOq.js";import"./index-Cod02e9Y.js";import"./renderedTicksSlice-DgYqXOgC.js";import"./index-JVOuHVdP.js";import"./CartesianChart-Bonfnn_6.js";import"./chartDataContext-BgdaUcoV.js";import"./CategoricalChart-DzUyeNOX.js";import"./Layer-BL59xEeu.js";import"./AnimatedItems-DoNW6X9C.js";import"./Label-fnZYxsAf.js";import"./Text-CV4rnU1k.js";import"./DOMUtils-DGTFhh_s.js";import"./useId-Cxn74IfF.js";import"./useBackwardsCompatibleTheme-DM-kCCC-.js";import"./ZIndexLayer-B-lyDO19.js";import"./useAnimationId-DGJmUGW3.js";import"./ActivePoints-DNIiWjQ1.js";import"./Dot-BNdpCbfX.js";import"./types-DmUtaJkc.js";import"./RegisterGraphicalItemId-D_J9lCCC.js";import"./GraphicalItemClipPath-ZQcwoD7Q.js";import"./SetGraphicalItem-DNCLDvoD.js";import"./getRadiusAndStrokeWidthFromDot-Da7-LUzg.js";import"./ActiveShapeUtils-Ds3BnvmO.js";import"./Curve-BvFQjNVt.js";import"./step-Dz5dQj2m.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DgC6dd13.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const st=["CustomizedLabel"];export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
