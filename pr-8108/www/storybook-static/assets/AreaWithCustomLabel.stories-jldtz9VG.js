import{R as r}from"./iframe-BPaILHrg.js";import{R as c}from"./zIndexSlice-Bmw1fph3.js";import{C as d}from"./ComposedChart-DU4uZiCB.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-xDgvvQqu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-fs0FwHaQ.js";import"./throttle-B9kMlkpl.js";import"./index-CkFyYTJL.js";import"./index-CA_30Yt5.js";import"./RechartsWrapper-D7MXGog1.js";import"./axisSelectors-BgmzCmWH.js";import"./polarAxisSelectors-CP4AmDBe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CvctqLlv.js";import"./index-CnIUZT6I.js";import"./index-B04q1BNb.js";import"./renderedTicksSlice-BvsmzMN6.js";import"./index-BFOFl-I4.js";import"./CartesianChart-DVMMqgwd.js";import"./ZIndexPortal-bECtAjmI.js";import"./CategoricalChart-DVM1oU_Q.js";import"./Layer-BYN-xjEA.js";import"./LabelList-BA53HbEo.js";import"./Label-r7ey19qR.js";import"./Text-CtKpv6li.js";import"./pageBackground-CWFMyAd2.js";import"./ZIndexLayer-DOVmR1lD.js";import"./ActivePoints-BAgIMyf9.js";import"./Dot-Eg6Ew0GK.js";import"./types-DUbTKtwp.js";import"./activeStyles-BRvUZ3GA.js";import"./useAnimationId-BDqdHn7D.js";import"./dataEntryStyles-DyygVVmF.js";import"./Symbols-Dk1_zaB2.js";import"./symbol-hCExAh31.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CsCmCIZL.js";import"./getRadiusAndStrokeWidthFromDot-DTWprENN.js";import"./ActiveShapeUtils-By1qTU3M.js";import"./Curve-DgfwLhV2.js";import"./step-D2WZnOIE.js";import"./useEffectiveDataKey-Bbwl3GsC.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
