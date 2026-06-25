import{R as e}from"./iframe-CpH4jn8g.js";import{R as c}from"./zIndexSlice-CMsbRcVo.js";import{C as d}from"./ComposedChart-DZX4aRXt.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DWcpvs1r.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-C21IJxSF.js";import"./index--z9jIKZg.js";import"./index-wpdvZnuB.js";import"./get-DfDzGUS7.js";import"./resolveDefaultProps-DGN954Kv.js";import"./isWellBehavedNumber-6OhSnnoK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-TUYhIbD6.js";import"./index-B6von4ou.js";import"./index-CB2lo7iV.js";import"./renderedTicksSlice-D-wmUWoC.js";import"./axisSelectors-Bq_vtAr0.js";import"./d3-scale-hekr18xW.js";import"./CartesianChart-BW_KV3Uo.js";import"./chartDataContext-CNUo9Q_N.js";import"./CategoricalChart-CJCbZaD2.js";import"./Layer-CpyyR4fH.js";import"./AnimatedItems-BjSZm7AL.js";import"./Label-BID2wGRS.js";import"./Text-DxL0BXFO.js";import"./DOMUtils-BSMSB0a3.js";import"./ZIndexLayer-FLcdyCMW.js";import"./useAnimationId-DOUqN62f.js";import"./ActivePoints-9ROC9Lt_.js";import"./Dot-CxmB6f2U.js";import"./types-CDIAbI3v.js";import"./RegisterGraphicalItemId-BwHF-Xvv.js";import"./GraphicalItemClipPath-CjdnX9P0.js";import"./SetGraphicalItem-BKY8M4LB.js";import"./getRadiusAndStrokeWidthFromDot-BpydaN9S.js";import"./ActiveShapeUtils-DtM6eKjz.js";import"./Curve-2uMIoq2i.js";import"./step-COWbUyG4.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DfedSnqi.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
