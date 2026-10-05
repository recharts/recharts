import{R as r}from"./iframe-BjBEpprL.js";import{R as c}from"./zIndexSlice-D-PTjDwF.js";import{C as d}from"./ComposedChart-CZvD_f50.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D889yFSR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-NXQPRMgU.js";import"./index-CFgOxFQX.js";import"./index-BBITsrkq.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B9MstDaw.js";import"./isWellBehavedNumber-BCSUkdc1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CcICmPjO.js";import"./axisSelectors-DfmJjs-d.js";import"./d3-scale-CKCE33MR.js";import"./index-BaAr_1o8.js";import"./index-MYKE-65n.js";import"./renderedTicksSlice-1EW54Ol1.js";import"./index-DMF93B4y.js";import"./CartesianChart-BrSdxCQq.js";import"./chartDataContext-D6HhxZlR.js";import"./CategoricalChart-CI19dNhZ.js";import"./Layer-vH_2ZCys.js";import"./AnimatedItems-BDzZfL3v.js";import"./Label-BeKD4wFi.js";import"./Text-CUza6yot.js";import"./DOMUtils-Bj0yZBJ3.js";import"./useId-ChOQ34QW.js";import"./useBackwardsCompatibleTheme-CUuvE6f4.js";import"./ZIndexLayer-Dpvj1i9H.js";import"./useAnimationId-a8RjQG0_.js";import"./ActivePoints-DYDQlTVO.js";import"./Dot-BYQ0G1Os.js";import"./types-DeKlgzSD.js";import"./RegisterGraphicalItemId-CyOHhqL8.js";import"./GraphicalItemClipPath-EXC5I5vP.js";import"./SetGraphicalItem-CqlMG-ES.js";import"./getRadiusAndStrokeWidthFromDot-C3KEWMVy.js";import"./ActiveShapeUtils-BcKWPZeO.js";import"./Curve-C8b-yzs0.js";import"./step-DdKwrL1k.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BkQxsk2A.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
