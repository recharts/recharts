import{R as r}from"./iframe-DIZ3O37q.js";import{R as c}from"./zIndexSlice-BQzkuVGb.js";import{C as d}from"./ComposedChart-D39bvl9W.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DbDXXgfX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CmJg4BXK.js";import"./index-v0zH_vno.js";import"./index-eN1sdWPw.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CZ7A5O_B.js";import"./isWellBehavedNumber-C03WQupV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DCqN-I2W.js";import"./axisSelectors-CgxEqo8X.js";import"./d3-scale-BsLoKPkH.js";import"./index-Cmvub_uM.js";import"./index-ywKEni0y.js";import"./renderedTicksSlice-dPbGmcjH.js";import"./index-DJHqlgJe.js";import"./CartesianChart-BArvePMg.js";import"./chartDataContext-DHk2uxah.js";import"./CategoricalChart-C-yl_Evz.js";import"./Layer-dog9ZdZ9.js";import"./activeStyles-heSOU5tv.js";import"./Label-BKiGyQaq.js";import"./Text-CxShOurV.js";import"./pageBackground-RtZmpZCV.js";import"./useId-JbG4rdAV.js";import"./useBackwardsCompatibleTheme-BOuG0K82.js";import"./ZIndexLayer-DpnduxRR.js";import"./dataEntryStyles-DEoRHL3P.js";import"./useAnimationId-1Ju_H0cm.js";import"./ActivePoints-CKzWXL41.js";import"./Dot-CFyjFdrS.js";import"./types-DIw8xebl.js";import"./RegisterGraphicalItemId-CU20DwEk.js";import"./SetGraphicalItem-BH1Y0jBy.js";import"./getRadiusAndStrokeWidthFromDot-DM7-yOyB.js";import"./ActiveShapeUtils-CU9aD14w.js";import"./Curve-BKoNYh1Q.js";import"./step-Bx5ie7RH.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-CsQCtOFi.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
