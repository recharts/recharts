import{R as r}from"./iframe-PkW0ejx3.js";import{R as c}from"./zIndexSlice-CtEWDdkW.js";import{C as d}from"./ComposedChart-coptphr3.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DRHaZTqs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CnX9VcG6.js";import"./throttle-DhIpRp7y.js";import"./index-2kQDiEg9.js";import"./index-CthbcSOz.js";import"./RechartsWrapper-DJcwwy7_.js";import"./axisSelectors-CBaUhvBl.js";import"./polarAxisSelectors-DErot-vK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C_GfRdoG.js";import"./index-bhfK5Tel.js";import"./index-DCKddudy.js";import"./renderedTicksSlice-BiYv8y7m.js";import"./index-DIk-TLTX.js";import"./CartesianChart-CtUUiyil.js";import"./ZIndexPortal-DB_x6J9o.js";import"./CategoricalChart-CFsdFZkP.js";import"./Layer-D2wEMTDW.js";import"./LabelList-BcjFKpxG.js";import"./Label-V19_IbKL.js";import"./Text-DQ7hgPmk.js";import"./pageBackground-BxU5BZDR.js";import"./ZIndexLayer-wqGg5hkh.js";import"./ActivePoints-DYuBZm8s.js";import"./Dot-ByWXk2hq.js";import"./types-iBZQammS.js";import"./activeStyles-RIXOH0Ky.js";import"./useAnimationId-JttpOibe.js";import"./dataEntryStyles-BkC7RZGO.js";import"./Symbols-BgSbEpWI.js";import"./symbol-BJli0oSq.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-rvzc4GbA.js";import"./getRadiusAndStrokeWidthFromDot-DFz9CZPw.js";import"./ActiveShapeUtils-hU5Uvesj.js";import"./Curve-DU0fyPxy.js";import"./step-Ckyxmzdw.js";import"./useEffectiveDataKey-UMh99VlP.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
