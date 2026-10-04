import{R as r}from"./iframe-C55SonNK.js";import{R as c}from"./zIndexSlice-DasulNlo.js";import{C as d}from"./ComposedChart-DRtqau9M.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-NqpLcSSx.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-G3ECa8tr.js";import"./index-DlZLgaYD.js";import"./index-BwYupLtq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BmNtE2rS.js";import"./isWellBehavedNumber-hNTnQGF2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BfpEIOv-.js";import"./axisSelectors-pQ0Se0UH.js";import"./d3-scale-BMtFe6cd.js";import"./index-ConF1OJd.js";import"./index-BPMo8MBn.js";import"./renderedTicksSlice-LEZPKkpV.js";import"./index-Czl7SMar.js";import"./CartesianChart-BihUZ5nW.js";import"./chartDataContext-CzjQbFCV.js";import"./CategoricalChart-BO0KKDhg.js";import"./Layer-Bpfyjb4F.js";import"./AnimatedItems-mUQIEGKr.js";import"./Label-XuIK8xgk.js";import"./Text-BGO9kFr7.js";import"./DOMUtils-B--wunTb.js";import"./useId-Ph5cHYEn.js";import"./useBackwardsCompatibleTheme-CMxCV-uY.js";import"./ZIndexLayer-xKUTxtZr.js";import"./useAnimationId-Dfy40kVz.js";import"./ActivePoints-BhFZHI7X.js";import"./Dot-CxsnkucE.js";import"./types-DWD7ie2J.js";import"./RegisterGraphicalItemId-CAAWrCM1.js";import"./GraphicalItemClipPath-5x7FHKUZ.js";import"./SetGraphicalItem-CASyq9nQ.js";import"./getRadiusAndStrokeWidthFromDot-CCMPBL5C.js";import"./ActiveShapeUtils-CaNZ8cmS.js";import"./Curve-cqh3GTlE.js";import"./step-Da31Aboz.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DFmFmERc.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
