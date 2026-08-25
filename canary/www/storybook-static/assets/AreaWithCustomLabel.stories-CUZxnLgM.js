import{R as r}from"./iframe-D6azDvqV.js";import{R as c}from"./zIndexSlice-CJI37Eji.js";import{C as d}from"./ComposedChart-CmwmgTBj.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DehLDtlB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-9sEg-owe.js";import"./index-De2T6Rdx.js";import"./index-CHbhJf8u.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-MMJ4Hspi.js";import"./isWellBehavedNumber-zgmweQfq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CvaooULl.js";import"./index-8WeBRwf8.js";import"./index-CdRGzAoJ.js";import"./axisSelectors-Cuma3wLU.js";import"./d3-scale-BukzO1yu.js";import"./renderedTicksSlice-CP9ELeUi.js";import"./CartesianChart-DKfnJK9b.js";import"./chartDataContext-E0nEwP5U.js";import"./CategoricalChart-BwNlWuS2.js";import"./Layer-Dd-QkUnw.js";import"./AnimatedItems-CFHSF17T.js";import"./Label-Bq-FSxS9.js";import"./Text-7Emw6cxV.js";import"./DOMUtils-ChR8PpsJ.js";import"./useId-D_J3zHys.js";import"./useBackwardsCompatibleTheme-Btt6Zxb8.js";import"./ZIndexLayer-BMP0BbGV.js";import"./useAnimationId-B0HxjIs3.js";import"./ActivePoints-D_5kSOug.js";import"./Dot-DipyiptT.js";import"./types-ArXcJt3v.js";import"./RegisterGraphicalItemId-utzXF_HC.js";import"./GraphicalItemClipPath-CEHJTCek.js";import"./SetGraphicalItem-CIh432wm.js";import"./getRadiusAndStrokeWidthFromDot-D9uGtCD-.js";import"./ActiveShapeUtils-nknSwnl4.js";import"./Curve-BtvAXlb-.js";import"./step-BjTVn7hc.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-T55zgDEk.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
