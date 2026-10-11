import{R as r}from"./iframe-BR4M1uiR.js";import{R as c}from"./zIndexSlice-HrFSVAcv.js";import{C as d}from"./ComposedChart-HjQSkOyf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B05Xou2U.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-G6Y8pgni.js";import"./index-Ci_VIYcH.js";import"./index-BnaGZY2I.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BLjA4bYj.js";import"./isWellBehavedNumber-D_WQYNTo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0bWwFQm.js";import"./axisSelectors-BqweAZHb.js";import"./d3-scale-CeZrfwiY.js";import"./index-YkNArcGN.js";import"./index-D8NvIHNM.js";import"./renderedTicksSlice-BfPj2XQ-.js";import"./index-CncCwIwt.js";import"./CartesianChart-q49HIkvw.js";import"./chartDataContext-BuFcKplQ.js";import"./CategoricalChart-2FTjt8Lf.js";import"./Layer-DlfW1ESK.js";import"./activeStyles-WDF83Cdx.js";import"./Label-XYAyrwIP.js";import"./Text-VnSH714e.js";import"./pageBackground-DPb5heYZ.js";import"./useId-pURs8c9G.js";import"./useBackwardsCompatibleTheme-D05qWzDc.js";import"./ZIndexLayer-CLaDw56X.js";import"./useAnimationId-AG0wMyfL.js";import"./dataEntryStyles-DLaplEnq.js";import"./ActivePoints-BSY_3c_N.js";import"./Dot-BLsUlW8t.js";import"./types-B-qT5SDC.js";import"./GraphicalItemClipPath-yRc51fA7.js";import"./SetGraphicalItem-BfeYb81m.js";import"./getRadiusAndStrokeWidthFromDot-Cs2lmqDd.js";import"./ActiveShapeUtils-CPXOp-Yk.js";import"./Curve-D8aJ7Tuc.js";import"./step-CbSh2F2e.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-B_fgXjH_.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
