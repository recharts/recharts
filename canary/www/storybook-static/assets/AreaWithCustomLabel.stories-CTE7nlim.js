import{R as r}from"./iframe-ZSAsyeui.js";import{R as c}from"./zIndexSlice-Dv-5_8A6.js";import{C as d}from"./ComposedChart-D3WKujQY.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BgWX8gvS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CzYlkvqW.js";import"./throttle-D-BJc2jV.js";import"./index-OvyM_4Sm.js";import"./index-DjKI25gJ.js";import"./RechartsWrapper-BzidFlVd.js";import"./axisSelectors-B8o8U7qV.js";import"./polarAxisSelectors-BqI7JiW5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CC-JJjQv.js";import"./index-uqJ6YOvZ.js";import"./index-zauSQ6TS.js";import"./renderedTicksSlice-CWxjmG2R.js";import"./index-DD-2LlvS.js";import"./CartesianChart-CMZp9es4.js";import"./ZIndexPortal-CvnMM87Z.js";import"./CategoricalChart-D-416rq6.js";import"./Layer-DRoxmpYI.js";import"./LabelList-Xwc-TPit.js";import"./Label-ooeO0hBy.js";import"./Text-BRlBLGWa.js";import"./pageBackground-BD4buOa5.js";import"./ZIndexLayer-C2WKPlYv.js";import"./ActivePoints-BfGk3pVb.js";import"./Dot-BEWDPMal.js";import"./types-DmKiIpv6.js";import"./activeStyles-BfRigOWz.js";import"./useAnimationId-DVzTYwao.js";import"./dataEntryStyles-D8AFB-Xx.js";import"./Symbols-fzhinMEB.js";import"./symbol-fTzakvJ7.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BULml3ZG.js";import"./getRadiusAndStrokeWidthFromDot-RjCFhzne.js";import"./ActiveShapeUtils-PjK4neH_.js";import"./Curve-Czqktp7G.js";import"./step-agpXYCOV.js";import"./useEffectiveDataKey-DWBa4tvD.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
