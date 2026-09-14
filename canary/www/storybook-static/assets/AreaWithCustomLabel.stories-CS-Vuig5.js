import{R as r}from"./iframe-CCZR7NAh.js";import{R as c}from"./zIndexSlice-RhYtObCh.js";import{C as d}from"./ComposedChart-B5KY41wA.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-ueez-TAD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ZP6rSZKd.js";import"./index-tWW1_YSW.js";import"./index-B_5iXp8A.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DBU-kSsr.js";import"./isWellBehavedNumber-Csif_Eh7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-wkc56maS.js";import"./axisSelectors-BSioHzmv.js";import"./d3-scale-CU88JBPJ.js";import"./index-CQgQjfRf.js";import"./index-Cn7KliQr.js";import"./renderedTicksSlice-D9smLeXW.js";import"./index-1iFFgL5n.js";import"./CartesianChart-BL5MVgQu.js";import"./chartDataContext-DSMzrBHe.js";import"./CategoricalChart-thtv_Ll2.js";import"./Layer-B2yEt3nd.js";import"./AnimatedItems-C_k0o8_C.js";import"./Label-A6NnUU-m.js";import"./Text-BNhIgYfP.js";import"./DOMUtils-BDfLWNCh.js";import"./useId-BL2vel-5.js";import"./useBackwardsCompatibleTheme-DIkjfI7E.js";import"./ZIndexLayer-RJSSngl5.js";import"./useAnimationId-DJLlQPal.js";import"./ActivePoints-Dj4SzkHH.js";import"./Dot-CnbUvxwO.js";import"./types-BX41f3Nu.js";import"./RegisterGraphicalItemId-U6F3LrJb.js";import"./GraphicalItemClipPath-eRrs6_re.js";import"./SetGraphicalItem-DoozTt-Y.js";import"./getRadiusAndStrokeWidthFromDot-DBCpafJP.js";import"./ActiveShapeUtils-DgHvx5XO.js";import"./Curve-7ikXqYG-.js";import"./step-CvhyldGl.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BWyXW6pi.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
