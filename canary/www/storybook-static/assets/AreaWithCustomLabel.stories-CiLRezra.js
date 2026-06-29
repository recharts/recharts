import{R as e}from"./iframe-CszBinxB.js";import{R as c}from"./zIndexSlice-CutJbhUL.js";import{C as d}from"./ComposedChart-B908q7UQ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Cszwodid.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D83-jpt2.js";import"./index-Dk3UIdqq.js";import"./index-CK8GAH5B.js";import"./get-Dkt-pB45.js";import"./resolveDefaultProps-Bibg6aom.js";import"./isWellBehavedNumber-CQgoIKii.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B9WMJT6y.js";import"./index-CJ5FwB5R.js";import"./index-CqsgrxyY.js";import"./renderedTicksSlice-BApmRI5D.js";import"./axisSelectors-ChU_3Lvt.js";import"./d3-scale-8f-0eAbn.js";import"./CartesianChart-CKqsh66i.js";import"./chartDataContext-D1nSjPO9.js";import"./CategoricalChart-KozYfQM0.js";import"./Layer-CbC5ZndY.js";import"./AnimatedItems-dM5mhDfD.js";import"./Label-Dp0h3UHP.js";import"./Text-BedxJwrY.js";import"./DOMUtils-BDWRPNb8.js";import"./ZIndexLayer-BWnK9pgn.js";import"./useAnimationId-DACL8E3O.js";import"./ActivePoints-D0tv5d-k.js";import"./Dot-D-4kDITN.js";import"./types-BcRZVSBA.js";import"./RegisterGraphicalItemId-BWZQesOM.js";import"./GraphicalItemClipPath-BrN2bI9m.js";import"./SetGraphicalItem-DWL3HNya.js";import"./getRadiusAndStrokeWidthFromDot-DQWqw49n.js";import"./ActiveShapeUtils-BBAZWV6w.js";import"./Curve-BU7ZSeTV.js";import"./step-F1REG5Zy.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-Bl27Wn5K.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
