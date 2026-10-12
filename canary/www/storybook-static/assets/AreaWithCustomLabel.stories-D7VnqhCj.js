import{R as r}from"./iframe-B2Q_Qgm0.js";import{R as c}from"./zIndexSlice-lJSwut70.js";import{C as d}from"./ComposedChart-k0KfFloC.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DaUCh7tV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bfct0QsM.js";import"./index-D0I5UczE.js";import"./index-CRJ1kynM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DEmHyBTe.js";import"./isWellBehavedNumber-CTjozt9e.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1GYxDJl.js";import"./axisSelectors-DGf_3ZFA.js";import"./d3-scale-E67z2Ey2.js";import"./index-t1Y9-LeO.js";import"./index-BmNUC2xp.js";import"./renderedTicksSlice-lf8jbds5.js";import"./index-Zw4_MUHC.js";import"./CartesianChart-CVDOe7y_.js";import"./chartDataContext-B5bxwzwP.js";import"./CategoricalChart-BC5WuIRL.js";import"./Layer-BV6rSg6M.js";import"./activeStyles-C4EynwUE.js";import"./Label-BGi8ZrBi.js";import"./Text-0iD6BYPe.js";import"./pageBackground-ufzNbkAg.js";import"./useId-BUg3av0m.js";import"./useBackwardsCompatibleTheme-CHG3CyzU.js";import"./ZIndexLayer-BL2VuU0B.js";import"./useAnimationId-L9mW9rF6.js";import"./dataEntryStyles-BZP5jTPc.js";import"./ActivePoints-BDe5iXRm.js";import"./Dot-CMzQjqPY.js";import"./types-Ck2mmBqf.js";import"./GraphicalItemClipPath-D_eZ4vKD.js";import"./SetGraphicalItem-C_s7gSpu.js";import"./getRadiusAndStrokeWidthFromDot-CP7Jrqg5.js";import"./ActiveShapeUtils-DztkhC9X.js";import"./Curve-wGV3RYR_.js";import"./step-BCJ1q1Uw.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-FHRr8rA1.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
