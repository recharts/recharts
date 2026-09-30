import{R as r}from"./iframe-B96S8mAp.js";import{R as c}from"./zIndexSlice-D8E1yZ1V.js";import{C as d}from"./ComposedChart-CehmNKG2.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B5M0xdv-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ClBFd37Y.js";import"./index-DkqDlut5.js";import"./index-h_VAy7kX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-hdreNdXc.js";import"./isWellBehavedNumber-DfNG0DIy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMN5w2mX.js";import"./axisSelectors-CoX3e_2U.js";import"./d3-scale-9nPPSrDa.js";import"./index-Bb9sRMCm.js";import"./index-C-l8V5Fx.js";import"./renderedTicksSlice-BTyytnZ2.js";import"./index-YSWiv6gp.js";import"./CartesianChart-a8pJKl2i.js";import"./chartDataContext-DDU_iWzI.js";import"./CategoricalChart-BJxf0mxD.js";import"./Layer-DAZaOor8.js";import"./AnimatedItems-B3aC5t_D.js";import"./Label-CqVVrAo5.js";import"./Text-BO1tL-Lm.js";import"./DOMUtils-B7FzpOG9.js";import"./useId-C9t3LM8u.js";import"./useBackwardsCompatibleTheme-BlUzVNC-.js";import"./ZIndexLayer-DUeg7nPd.js";import"./useAnimationId-CEflbmtS.js";import"./ActivePoints-L_3TnI4T.js";import"./Dot-zng579xF.js";import"./types-Dzd-LsE5.js";import"./RegisterGraphicalItemId-yOmcvIGu.js";import"./GraphicalItemClipPath-RRykAftR.js";import"./SetGraphicalItem-CvYLLoCp.js";import"./getRadiusAndStrokeWidthFromDot-CnqQHwHm.js";import"./ActiveShapeUtils-CRg0xwL0.js";import"./Curve-5IRE8Ev4.js";import"./step-98le-Vot.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CBUuLMbL.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
