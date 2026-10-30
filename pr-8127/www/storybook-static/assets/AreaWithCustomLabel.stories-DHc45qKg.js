import{R as r}from"./iframe-Bp2XYb68.js";import{R as c}from"./zIndexSlice-Cdn-Kk-M.js";import{C as d}from"./ComposedChart-C50k9Mlo.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D44pu83J.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DKzL2Qxu.js";import"./throttle-DjpMRj7m.js";import"./index-D6Dz_bd_.js";import"./index-Cy8aa7S-.js";import"./RechartsWrapper-DFwXtpN1.js";import"./axisSelectors-D7x9R07e.js";import"./polarAxisSelectors-B_7CHFJS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BystX3Ur.js";import"./index-BgEF2N6-.js";import"./index-BWzqc-Tl.js";import"./renderedTicksSlice-BEFESDc_.js";import"./index-BIZLi33-.js";import"./CartesianChart-B3KmVN-H.js";import"./ZIndexPortal-Dv9B-KcK.js";import"./CategoricalChart-DdepWN88.js";import"./Layer-BCuSbR8-.js";import"./LabelList-NX9sUv81.js";import"./Label-BYixOdgi.js";import"./Text-NUByGaeH.js";import"./DOMUtils-CRqOLD4o.js";import"./ZIndexLayer-CdRyST1N.js";import"./ActivePoints-BQlT-yF-.js";import"./Dot-Bp6Z7m8n.js";import"./types-ChkwvJX7.js";import"./activeStyles-BkNcOac3.js";import"./useAnimationId-BnLlvmFh.js";import"./dataEntryStyles-0iby4079.js";import"./fillDefinitions-ChX4QXi5.js";import"./Symbols-BjKzRhG-.js";import"./symbol-AE1MCh3f.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-C-JkmH8Z.js";import"./getRadiusAndStrokeWidthFromDot-Du2-K1xF.js";import"./ActiveShapeUtils-DNSxrQCm.js";import"./Curve-L4y0Pw0M.js";import"./step-D6j5BM_X.js";import"./useEffectiveDataKey-DiX5XHUq.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
