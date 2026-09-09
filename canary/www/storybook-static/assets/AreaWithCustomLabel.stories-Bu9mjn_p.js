import{R as r}from"./iframe-C8yGgO2d.js";import{R as c}from"./zIndexSlice-CuRdZ-8K.js";import{C as d}from"./ComposedChart-D2wyoHi-.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B1HCIO9Y.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dr0khojT.js";import"./index-DWs1UuF8.js";import"./index-B_Sqvp8j.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BEnwhFtj.js";import"./isWellBehavedNumber-P0iskoF8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DxEsBzKb.js";import"./axisSelectors-w7bw2H0b.js";import"./d3-scale-Cb_6Er0t.js";import"./index-_ZrsSmBD.js";import"./index-C4w1OcUY.js";import"./renderedTicksSlice-D5n2q9tr.js";import"./index-_435W0Be.js";import"./CartesianChart-NwzcHRhr.js";import"./chartDataContext-CYKs2BJc.js";import"./CategoricalChart-3Evm6NoG.js";import"./Layer-tDZThP1f.js";import"./AnimatedItems-DmW46OuC.js";import"./Label-BtCjiiK8.js";import"./Text-N9mhAN-H.js";import"./DOMUtils-BOgsOCmi.js";import"./useId-CKVmols2.js";import"./useBackwardsCompatibleTheme-AfUploH6.js";import"./ZIndexLayer-C7uHg4Vj.js";import"./useAnimationId-Bie7xBo-.js";import"./ActivePoints-C28DYC0S.js";import"./Dot-Ckq5Sos6.js";import"./types-DDTipNBU.js";import"./RegisterGraphicalItemId-BaYY2Lpp.js";import"./GraphicalItemClipPath-DlJK_MCm.js";import"./SetGraphicalItem-DHV9mQDm.js";import"./getRadiusAndStrokeWidthFromDot-CC1av9L5.js";import"./ActiveShapeUtils-BmVfGkD_.js";import"./Curve-B2EBLnIf.js";import"./step-B4o5Q5Gu.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-B0pPIliE.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
