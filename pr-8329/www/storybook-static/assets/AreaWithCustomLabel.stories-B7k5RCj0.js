import{R as r}from"./iframe-D4kLWznI.js";import{R as c}from"./zIndexSlice-B28gm5Zj.js";import{C as d}from"./ComposedChart-D5eWF65_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BIeD6gVd.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CJYKgT8A.js";import"./get-CjriyByo.js";import"./throttle-q19G1wYU.js";import"./index-K9fqWjcX.js";import"./index-BZ6MCrYJ.js";import"./RechartsWrapper-Brhd5wtn.js";import"./axisSelectors-ByHGSv-T.js";import"./polarAxisSelectors-Jvx5Hvrj.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-COuExidI.js";import"./index-BukBKnfG.js";import"./index-BSDf5RkV.js";import"./renderedTicksSlice-BRzk6Zuy.js";import"./index-Cxoy9Bx4.js";import"./fillDefinitions-uAqib7o2.js";import"./CartesianChart-CYGJ7Vi6.js";import"./chartDataContext-ExwO8N-9.js";import"./CategoricalChart-lvaD8ywk.js";import"./getRadiusAndStrokeWidthFromDot-CZtOf2sh.js";import"./Layer-BiQ6tIpf.js";import"./dataEntryStyles-CQy-JarL.js";import"./Label-CC2QlraV.js";import"./Text-NG93JaM3.js";import"./ZIndexLayer-DTTyUNkX.js";import"./ActivePoints-CZBrkmRZ.js";import"./Dot-We9lW2eK.js";import"./types-C0VOENzr.js";import"./activeStyles-B6xOxwnr.js";import"./useAnimationId-Cda-LmXY.js";import"./Symbols-C71JHuMc.js";import"./symbol-q_YI2BlA.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BpVaXpzF.js";import"./ActiveShapeUtils-CmC5_l1r.js";import"./Curve-BIpyAZSM.js";import"./step-BWfRSULP.js";import"./useEffectiveDataKey-KQzX-PyK.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
