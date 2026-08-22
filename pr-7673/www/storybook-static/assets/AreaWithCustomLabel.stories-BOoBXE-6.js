import{R as r}from"./iframe-B2LONqI2.js";import{R as c}from"./zIndexSlice-D9n4dMgM.js";import{C as d}from"./ComposedChart-BOAgkMxe.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D7UHIMQP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CdlfIoiX.js";import"./index-BFHlNwTp.js";import"./index-BJx3ZruJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-ByqX23gf.js";import"./isWellBehavedNumber-BTg56jQA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Iajo6lbi.js";import"./index-DfifFuyy.js";import"./index-DjdDa-5Q.js";import"./axisSelectors-DBW39Q04.js";import"./d3-scale-BIs2XHGH.js";import"./renderedTicksSlice-BQg4gqwf.js";import"./CartesianChart-CDZJhjlJ.js";import"./chartDataContext-n7-aPmS3.js";import"./CategoricalChart-BjK9U0fb.js";import"./Layer-Db6cgHvt.js";import"./AnimatedItems-DwGSOvtC.js";import"./Label-DIFUcr_M.js";import"./Text-DImCa3tX.js";import"./DOMUtils-D3RPrc8V.js";import"./useId-BEHZ_Vtx.js";import"./useBackwardsCompatibleTheme-Bt3YMXHU.js";import"./ZIndexLayer-CjywmeuP.js";import"./useAnimationId-Cxf11lMm.js";import"./ActivePoints-qJroTt_-.js";import"./Dot-CF9Y01Yu.js";import"./types-B61LwKJ2.js";import"./RegisterGraphicalItemId-C9PI0JLV.js";import"./GraphicalItemClipPath-bhsI-95T.js";import"./SetGraphicalItem-9JpLqI-V.js";import"./getRadiusAndStrokeWidthFromDot-KnVcOglV.js";import"./ActiveShapeUtils-CWFSVymI.js";import"./Curve-B_IAc-Uw.js";import"./step-BlTk4FPh.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Cyqw34Xe.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
