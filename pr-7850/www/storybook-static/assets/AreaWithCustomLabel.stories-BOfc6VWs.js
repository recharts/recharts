import{R as r}from"./iframe-CiEll_hl.js";import{R as c}from"./zIndexSlice-BWUZw0HV.js";import{C as d}from"./ComposedChart-BclLBL5K.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B-L9yJkB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D31XxRNM.js";import"./index-C6gwqJSk.js";import"./index-CWa27twE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-duavw9Kl.js";import"./isWellBehavedNumber-ry_onT8i.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8qI1d7ig.js";import"./axisSelectors-Czhrsmz1.js";import"./d3-scale-CoahAzwi.js";import"./index-DPEbYR3l.js";import"./index-d_0OIgID.js";import"./renderedTicksSlice-CDeLucdV.js";import"./index-RfC6TSb7.js";import"./CartesianChart-YzLYuA0Z.js";import"./chartDataContext-A6K28S5n.js";import"./CategoricalChart-yzrwRYbH.js";import"./Layer-Bl66F1TU.js";import"./AnimatedItems-ABeUxSrb.js";import"./Label-2sILoPl9.js";import"./Text-C5G8lazz.js";import"./DOMUtils-HtrcCiap.js";import"./useId-BF2rDIp_.js";import"./useBackwardsCompatibleTheme-B38ON0Kc.js";import"./ZIndexLayer-DOTS06hC.js";import"./useAnimationId-DB2VCJ-C.js";import"./ActivePoints-Dc8U7ztD.js";import"./Dot-D6RGfzzu.js";import"./types-MiZov7mG.js";import"./RegisterGraphicalItemId-V_3RkT2Z.js";import"./GraphicalItemClipPath-CNKUlu4p.js";import"./SetGraphicalItem-BGxIGAFZ.js";import"./getRadiusAndStrokeWidthFromDot-IdnOPtwR.js";import"./ActiveShapeUtils-CIEveTom.js";import"./Curve-bnxtETge.js";import"./step-CMCW6W2-.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DPacc47z.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
