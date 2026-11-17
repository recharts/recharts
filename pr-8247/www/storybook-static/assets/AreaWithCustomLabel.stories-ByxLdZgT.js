import{R as r}from"./iframe-CcEsDsPt.js";import{R as c}from"./zIndexSlice-B6RUMmkk.js";import{C as d}from"./ComposedChart-D0JJ5S5k.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CPJwUdco.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CG7EywaD.js";import"./throttle-DZ4rLUZb.js";import"./index-BtX-QQGe.js";import"./index-BVtuMGKw.js";import"./RechartsWrapper-Clhdkuph.js";import"./axisSelectors-CKb6nzHd.js";import"./polarAxisSelectors-DR_PitVn.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CJ6MxznC.js";import"./index-SbP6Yowi.js";import"./index--ncHqsRr.js";import"./renderedTicksSlice-ModyArOC.js";import"./index-Cos4qCXe.js";import"./fillDefinitions-C6z_LMZM.js";import"./CartesianChart-C019ixZ1.js";import"./chartDataContext-DMXCxnSO.js";import"./CategoricalChart-BMAmMdOt.js";import"./Layer-fXDLQXYt.js";import"./dataEntryStyles-frn6yaTB.js";import"./Label-CMmdEaqf.js";import"./Text-wPKGoZhq.js";import"./ZIndexLayer-DOqZSl62.js";import"./ActivePoints-IAr-p6xM.js";import"./Dot-VbU1fpiG.js";import"./types-DELOeU-O.js";import"./activeStyles-CiUshd_8.js";import"./useAnimationId-qpAzE9JI.js";import"./Symbols-CB4LXAVB.js";import"./symbol-CBgh6xJV.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CHwZeAHG.js";import"./getRadiusAndStrokeWidthFromDot-D--XkPxF.js";import"./ActiveShapeUtils-CMoHIOd4.js";import"./Curve-D2q8IfYm.js";import"./step-BQxy8stc.js";import"./useEffectiveDataKey-B9tlhySB.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
