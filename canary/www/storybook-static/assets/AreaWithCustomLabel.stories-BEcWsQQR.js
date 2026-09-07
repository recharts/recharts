import{R as r}from"./iframe-CD455wJd.js";import{R as c}from"./zIndexSlice-DzVk2zsV.js";import{C as d}from"./ComposedChart-ChgjgM5t.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CsuadmSG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-PUY-A8nf.js";import"./index-aYpzNMmu.js";import"./index-BdOuXsTR.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-iSNXXa8L.js";import"./isWellBehavedNumber-CknUNxNl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DXQmXvit.js";import"./axisSelectors-Bqat7Cub.js";import"./d3-scale-0hylKXBC.js";import"./index-DR22UKYk.js";import"./index-jPsfR26I.js";import"./renderedTicksSlice-BcRTcSpN.js";import"./index-BlJL6ULE.js";import"./CartesianChart-Bhj_o7vp.js";import"./chartDataContext-Bp5bHcMs.js";import"./CategoricalChart-CKQwA7lM.js";import"./Layer-CsmsD0pa.js";import"./AnimatedItems-CUITqmXn.js";import"./Label-Da_iI52E.js";import"./Text-oF7SpzZr.js";import"./DOMUtils-Dy-pvXG4.js";import"./useId--uhm0kQP.js";import"./useBackwardsCompatibleTheme-DwRps50g.js";import"./ZIndexLayer-B_PuTe7d.js";import"./useAnimationId-ChM5IozY.js";import"./ActivePoints-CZUg_rAM.js";import"./Dot-DTxxR4lp.js";import"./types-BNqzQZQk.js";import"./RegisterGraphicalItemId-C74Ike1Q.js";import"./GraphicalItemClipPath-C5TTIcs9.js";import"./SetGraphicalItem-BsTJ2qIT.js";import"./getRadiusAndStrokeWidthFromDot-ClGGafK9.js";import"./ActiveShapeUtils-CUAj6KO9.js";import"./Curve-CXSrw9GZ.js";import"./step-C1fS-Ced.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-yX6ocnQl.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
