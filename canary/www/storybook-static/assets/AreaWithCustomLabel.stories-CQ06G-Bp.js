import{R as r}from"./iframe-J2FnkNkN.js";import{R as c}from"./zIndexSlice-CIfx3dbz.js";import{C as d}from"./ComposedChart-jyhVlhQd.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CwA0znk1.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dd6uK12C.js";import"./index-DOkoL7Wj.js";import"./index-DRH1Q61C.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C36Ti6I7.js";import"./isWellBehavedNumber-Bda2kxwI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-tuonj_dH.js";import"./index-udl5h_c3.js";import"./index-B1zoM-7H.js";import"./axisSelectors-XOgqlW54.js";import"./d3-scale-BnVmKfe4.js";import"./renderedTicksSlice-uiaDKKzv.js";import"./CartesianChart-7orgvIwE.js";import"./chartDataContext-DsIZ8kzc.js";import"./CategoricalChart-Dws3VtHh.js";import"./Layer-B9c44e16.js";import"./AnimatedItems-DaE3ZoZL.js";import"./Label-Bl3T8NIS.js";import"./Text-DoArQ2iR.js";import"./DOMUtils-DrtZ7889.js";import"./useId-BqCnyWtn.js";import"./useBackwardsCompatibleTheme-iB5pgxqo.js";import"./ZIndexLayer-BcQVAnhI.js";import"./useAnimationId-B8FTTFdD.js";import"./ActivePoints-Cu9CSGsi.js";import"./Dot-BQU71g_n.js";import"./types-cmsIqA-S.js";import"./RegisterGraphicalItemId-4W54GOXR.js";import"./GraphicalItemClipPath-BR02B87f.js";import"./SetGraphicalItem-B2-Omghc.js";import"./getRadiusAndStrokeWidthFromDot-DwBzFWb4.js";import"./ActiveShapeUtils-DbeW4ISg.js";import"./Curve-CNSL121i.js";import"./step-B2sXv2yh.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CfGcF6Eu.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
