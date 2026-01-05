import{e as t}from"./iframe-C75Mon5f.js";import{R as c}from"./arrayEqualityCheck-CCinF1xg.js";import{C as d}from"./ComposedChart-ZGVCoeE1.js";import{A as l}from"./Area-Bq23oBZm.js";import{R as h}from"./RechartsHookInspector-DeYlN7PD.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DdslWj5k.js";import"./PolarUtils-gc7ouCGw.js";import"./RechartsWrapper-DtD9QMMH.js";import"./hooks-CF17bvZj.js";import"./axisSelectors-DwNVm2PQ.js";import"./zIndexSlice-Ch2lslkG.js";import"./CartesianChart-BO0IyvRA.js";import"./chartDataContext-CSddlAqh.js";import"./CategoricalChart-CjaXzYYa.js";import"./Curve-uThrsaDe.js";import"./types-CgyKhdli.js";import"./Layer-DOYjA-jF.js";import"./ReactUtils-D5lwbz2E.js";import"./Label-BHT6Zr6z.js";import"./Text-s5ZlGFzn.js";import"./DOMUtils-Bv5mFBkh.js";import"./ZIndexLayer-1hGb0ezX.js";import"./ActivePoints-wA62MW9B.js";import"./Dot-BY3Oxjgr.js";import"./RegisterGraphicalItemId-6Y3WjFD5.js";import"./GraphicalItemClipPath-CJQxttXy.js";import"./SetGraphicalItem-CMCPtKvr.js";import"./useAnimationId-BM6GD1p3.js";import"./getRadiusAndStrokeWidthFromDot-ChRl9x7G.js";import"./graphicalItemSelectors-DfMtWIPt.js";import"./index-B1HMmzG7.js";import"./ChartSizeDimensions-DU3pXVrB.js";import"./OffsetShower-C98qoUcb.js";import"./PlotAreaShower-CzYV5sJZ.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
