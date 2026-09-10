import{R as r}from"./iframe-CZvBVoM1.js";import{R as c}from"./zIndexSlice-BFsaUhqg.js";import{C as d}from"./ComposedChart-CMms7XdW.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DeDGWXvx.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DKdITuKH.js";import"./index--IdmBhgA.js";import"./index-De4B3ZIK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D-jdsqZa.js";import"./isWellBehavedNumber-DwVpyNCs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DpE83LkU.js";import"./axisSelectors-DObFO88m.js";import"./d3-scale-CYHPrWE0.js";import"./index-B6TkzWSy.js";import"./index-B9F-HAZ2.js";import"./renderedTicksSlice-DZCA8OL1.js";import"./index-WmPIOj3u.js";import"./CartesianChart-BODelrhP.js";import"./chartDataContext-DBey5Kyz.js";import"./CategoricalChart-rBPlq3sD.js";import"./Layer-BOzNA3ZR.js";import"./AnimatedItems-a9Nj57gp.js";import"./Label-CXH4SBDp.js";import"./Text-N_3Dav1R.js";import"./DOMUtils-GcGnpUs3.js";import"./useId-r81p-TMa.js";import"./useBackwardsCompatibleTheme-CTIdE2S0.js";import"./ZIndexLayer-D9FERMeL.js";import"./useAnimationId-CmzTxAaG.js";import"./ActivePoints-BlDBLjzI.js";import"./Dot-WxQzlPyE.js";import"./types-SdWXGAN0.js";import"./RegisterGraphicalItemId-B0jJiuk8.js";import"./GraphicalItemClipPath-X4UZrOjX.js";import"./SetGraphicalItem-CjJbMcaD.js";import"./getRadiusAndStrokeWidthFromDot-Cq0DuT0s.js";import"./ActiveShapeUtils-DBOPu4wl.js";import"./Curve-CMGEeLJ1.js";import"./step-BaGdmwmz.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-ftydmPqi.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
