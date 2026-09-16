import{R as r}from"./iframe-yFYT_zN7.js";import{R as c}from"./zIndexSlice-D0SqWiCA.js";import{C as d}from"./ComposedChart-DxJEOi6H.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CL2gyqeg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B6GNdBpm.js";import"./index-CuJJm_Tn.js";import"./index-Du7yNjke.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CTg3N4RV.js";import"./isWellBehavedNumber-CbA6SpN0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BK2Nqghc.js";import"./axisSelectors-Cz3aPbz8.js";import"./d3-scale--DHWqn1j.js";import"./index-DMtch-zH.js";import"./index-DrQda-y9.js";import"./renderedTicksSlice-DwWtQ1Di.js";import"./index-DI6gPrhu.js";import"./CartesianChart-Ck9zKM_U.js";import"./chartDataContext-CrNdyu-C.js";import"./CategoricalChart-DBil3fX0.js";import"./Layer-Dy_GX6yW.js";import"./AnimatedItems-Ck-1wErl.js";import"./Label-99DUDCMD.js";import"./Text-CYbp4Bob.js";import"./DOMUtils-6VQmbUCR.js";import"./useId-CBpR1fpo.js";import"./useBackwardsCompatibleTheme-BN2mwgRc.js";import"./ZIndexLayer-CHhs3r11.js";import"./useAnimationId-DeDzp5yx.js";import"./ActivePoints-BrgN9jKH.js";import"./Dot-UFOmxDS-.js";import"./types-B35KvzC0.js";import"./RegisterGraphicalItemId-CaKRVAB3.js";import"./GraphicalItemClipPath-StVjduOg.js";import"./SetGraphicalItem-DwYip7WF.js";import"./getRadiusAndStrokeWidthFromDot-B44_s7et.js";import"./ActiveShapeUtils-liUtTmHf.js";import"./Curve-BBFKRsTK.js";import"./step-Dfa3kdsE.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CrfN38Fv.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
