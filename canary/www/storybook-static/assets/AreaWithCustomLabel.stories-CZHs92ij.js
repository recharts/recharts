import{R as r}from"./iframe-B-FpQGVE.js";import{R as c}from"./zIndexSlice-Be4STqbb.js";import{C as d}from"./ComposedChart-1tjyas2t.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BSCfNiGI.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-fO2SI_hD.js";import"./index-Bwqm2cxX.js";import"./index-zzhJWva7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dtl_SfnV.js";import"./isWellBehavedNumber-DgH__KwF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D1D1pk27.js";import"./axisSelectors-BKBkYNOt.js";import"./d3-scale-BVd2nsAD.js";import"./index-BOg1JrYi.js";import"./index-DrqVEo4b.js";import"./renderedTicksSlice-C87TKpMP.js";import"./index-BSKvdyte.js";import"./CartesianChart-CZbjQu0s.js";import"./chartDataContext-BgCxNtXs.js";import"./CategoricalChart-DYpdXtUy.js";import"./Layer-CC5u66Wi.js";import"./AnimatedItems-e1etCO8j.js";import"./Label-CsGEr2R8.js";import"./Text-Djuu9tRj.js";import"./DOMUtils-miVyGpMZ.js";import"./useId-DAIuZYFe.js";import"./useBackwardsCompatibleTheme-CLDALELV.js";import"./ZIndexLayer-BnTzkaQy.js";import"./useAnimationId-BcCVwFd_.js";import"./ActivePoints-DdCBd2pZ.js";import"./Dot-B9Hx6qjI.js";import"./types-DD3qZx3A.js";import"./RegisterGraphicalItemId-1yR8tuVZ.js";import"./GraphicalItemClipPath-Cm6Nokyc.js";import"./SetGraphicalItem-Bih-NG2S.js";import"./getRadiusAndStrokeWidthFromDot-DjdOmN1y.js";import"./ActiveShapeUtils-DC9lclqW.js";import"./Curve-CAoBmZPA.js";import"./step-C2pk31G8.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DhhteXck.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
