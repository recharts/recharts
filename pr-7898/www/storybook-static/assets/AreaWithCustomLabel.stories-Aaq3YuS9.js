import{R as r}from"./iframe-D0XP5FT3.js";import{R as c}from"./zIndexSlice-D8-60lXw.js";import{C as d}from"./ComposedChart-CmUditNM.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bm9R_T-m.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-z8Ap2dYF.js";import"./index-BIEuecVB.js";import"./index-CS8PxtTR.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DjekxJOz.js";import"./isWellBehavedNumber-Ceh04LdS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BDDfTGvW.js";import"./axisSelectors-D4AJEAvo.js";import"./d3-scale-DGDSvNHr.js";import"./index-C2YY5PF9.js";import"./index-D5oWhNFN.js";import"./renderedTicksSlice-BOt15qXr.js";import"./index-a0gINIJJ.js";import"./CartesianChart-B85ukqJW.js";import"./chartDataContext-BcyL-ikw.js";import"./CategoricalChart-w8Ip9gJm.js";import"./Layer-Bdc6UUg3.js";import"./AnimatedItems-BLak8TNm.js";import"./Label-CLcGGCVq.js";import"./Text-D0tua1LJ.js";import"./DOMUtils-CiVsTIiM.js";import"./useId-CfurG6Ob.js";import"./useBackwardsCompatibleTheme-CnQkr5Gq.js";import"./ZIndexLayer-CZS0piq5.js";import"./useAnimationId-DjrvOMwt.js";import"./ActivePoints-BDZ1Wot0.js";import"./Dot-slsYh-CE.js";import"./types-C9t2smuM.js";import"./RegisterGraphicalItemId-HdNBGK70.js";import"./GraphicalItemClipPath-iiifM8JF.js";import"./SetGraphicalItem-CSNZjUhi.js";import"./getRadiusAndStrokeWidthFromDot-Cl1UrcqK.js";import"./ActiveShapeUtils-Da2wOC1_.js";import"./Curve-IiThPwuE.js";import"./step-dzRymlPB.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DszFn3dP.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
