import{R as r}from"./iframe-JCMHkfpO.js";import{R as c}from"./zIndexSlice-Cbic3BON.js";import{C as d}from"./ComposedChart-BVs57za7.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BjNDjMuA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DlFFEpQV.js";import"./index-D8yPwBIb.js";import"./index-Ds8zJsBP.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CNbvqjMv.js";import"./isWellBehavedNumber-K1PO631O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-nbVSXC9z.js";import"./index-Bt8eCKRM.js";import"./index-QEaCAJHN.js";import"./axisSelectors-BpNs_jFY.js";import"./d3-scale-BsjeCU8L.js";import"./renderedTicksSlice-BRnimtTJ.js";import"./CartesianChart-Be_k-GK6.js";import"./chartDataContext-DRtbDYDE.js";import"./CategoricalChart-Do9lblK2.js";import"./Layer-DW0R6u6Q.js";import"./AnimatedItems-dkTJaSWs.js";import"./Label-DgnjH2BN.js";import"./Text-H5O9sMOg.js";import"./DOMUtils-lO18r89G.js";import"./useId-5LAcqd5g.js";import"./useBackwardsCompatibleTheme-BlAxrm86.js";import"./ZIndexLayer-DZJzCe6C.js";import"./useAnimationId-CtDYtQmo.js";import"./ActivePoints-B2ZGk6hG.js";import"./Dot-CefwgMiR.js";import"./types-CrNZa3RP.js";import"./RegisterGraphicalItemId-DyknErxM.js";import"./GraphicalItemClipPath-BifFhr-e.js";import"./SetGraphicalItem-BPezHgiz.js";import"./getRadiusAndStrokeWidthFromDot-Bo70O2Eq.js";import"./ActiveShapeUtils-2F7jkNpt.js";import"./Curve-YTzEjIYa.js";import"./step-CcEA6ZtU.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DK76v1qR.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
