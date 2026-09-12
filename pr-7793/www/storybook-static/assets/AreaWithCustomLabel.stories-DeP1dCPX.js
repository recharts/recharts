import{R as r}from"./iframe-CkRErbX3.js";import{R as c}from"./zIndexSlice-DTmbH2kM.js";import{C as d}from"./ComposedChart-NwFDWpH0.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CnLw-CfU.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BUNP2xt_.js";import"./index-lTKqLNY2.js";import"./index-8q2B2E2Y.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D0XcYrnY.js";import"./isWellBehavedNumber-D_Km0wQV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-LX80ZVpP.js";import"./axisSelectors-BQZb9AEv.js";import"./d3-scale-CAyfIE8L.js";import"./index-Cj3PhY3N.js";import"./index-DPOnfHKZ.js";import"./renderedTicksSlice-BTBGPftx.js";import"./index-CHvbSDPi.js";import"./CartesianChart-D7JoZRAe.js";import"./chartDataContext-C9978EDJ.js";import"./CategoricalChart-BNOSmnxT.js";import"./Layer-eVqkjfjk.js";import"./AnimatedItems-BXDAeM5O.js";import"./Label-Cbc3sDLG.js";import"./Text-CcsMLAiM.js";import"./DOMUtils-ysvCMZ9n.js";import"./useId-BiQAXzmn.js";import"./useBackwardsCompatibleTheme-Z-DwFZxL.js";import"./ZIndexLayer-mbz94-CG.js";import"./useAnimationId-B20w_W1l.js";import"./ActivePoints-DWOGb-Xm.js";import"./Dot-2hkZUwyy.js";import"./types-ByxJ_946.js";import"./RegisterGraphicalItemId-DwpGnQ-i.js";import"./GraphicalItemClipPath-osbFejbO.js";import"./SetGraphicalItem-7qiiWKdg.js";import"./getRadiusAndStrokeWidthFromDot-B41JQ_h1.js";import"./ActiveShapeUtils-B8wUCaOd.js";import"./Curve-DD6HoqKB.js";import"./step-ZsLkjyrm.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-kWkqpE_r.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
