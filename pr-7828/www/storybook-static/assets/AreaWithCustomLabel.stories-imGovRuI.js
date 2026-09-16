import{R as r}from"./iframe-yjkt2IH9.js";import{R as c}from"./zIndexSlice-DBLHpMzC.js";import{C as d}from"./ComposedChart-BoyqtaUh.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BAKv-sWn.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DNcBTn_q.js";import"./index-BRngxrU7.js";import"./index-CV8Eusxy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C1hVLYYK.js";import"./isWellBehavedNumber-DxZkGz0e.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DXGMrlZO.js";import"./axisSelectors-Jt8yF-QI.js";import"./d3-scale-nv5WZ-MU.js";import"./index-PsDnrYhU.js";import"./index-BvMKJHsM.js";import"./renderedTicksSlice-CrS6eWPX.js";import"./index-BQpCoukA.js";import"./CartesianChart-B1g09AHb.js";import"./chartDataContext-B80RtjhA.js";import"./CategoricalChart-CKH0Hy4l.js";import"./Layer-DkCnbteg.js";import"./AnimatedItems-DOXtHAOp.js";import"./Label-DNJm325E.js";import"./Text-DGqsL-zN.js";import"./DOMUtils-Cld05Rut.js";import"./useId-DlJSbOEb.js";import"./useBackwardsCompatibleTheme-D9TCWuL1.js";import"./ZIndexLayer-akraxgUp.js";import"./useAnimationId-CMvFcnUz.js";import"./ActivePoints-D4dpp1py.js";import"./Dot-DjkzHWoo.js";import"./types-cDH95ogz.js";import"./RegisterGraphicalItemId-Dy2Y8QPA.js";import"./GraphicalItemClipPath-CrsQrVv0.js";import"./SetGraphicalItem-C0bV6rYE.js";import"./getRadiusAndStrokeWidthFromDot-CGTWwDkJ.js";import"./ActiveShapeUtils-CUarEX30.js";import"./Curve-CkZxc2JO.js";import"./step-DDqhC4ci.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C3_xntvz.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
