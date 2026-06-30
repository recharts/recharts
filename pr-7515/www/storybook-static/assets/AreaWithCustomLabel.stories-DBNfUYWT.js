import{R as e}from"./iframe-ClZ97IhH.js";import{R as c}from"./zIndexSlice-C5PhT0E1.js";import{C as d}from"./ComposedChart-B1E1zelw.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CeG7P5bV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CenVclrT.js";import"./index-CrQHS0ha.js";import"./index-D9OO5l1d.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CcaTf9gV.js";import"./isWellBehavedNumber-BOULWsxq.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BLJ6xSnq.js";import"./index-CFJQbE9C.js";import"./index-6l3olgx1.js";import"./renderedTicksSlice-Cu1gA7XW.js";import"./axisSelectors-YPPwLD-Y.js";import"./d3-scale-BrF_Bfnv.js";import"./CartesianChart-CLbAeK38.js";import"./chartDataContext-DXptRcnW.js";import"./CategoricalChart-CU7_I9di.js";import"./Layer-av8QWZYv.js";import"./AnimatedItems-Ugycet-g.js";import"./Label-Bh1DkGaJ.js";import"./Text-CUeHZ0Lm.js";import"./DOMUtils-C7DdSVbv.js";import"./ZIndexLayer-DzfxsJEt.js";import"./useAnimationId-BXxNbWRb.js";import"./ActivePoints-JUHjUNnj.js";import"./Dot-C94-4eAI.js";import"./types-CfFSLUx9.js";import"./RegisterGraphicalItemId-XhYDb4e7.js";import"./GraphicalItemClipPath-DgZI2AKv.js";import"./SetGraphicalItem-DzMBG2H0.js";import"./getRadiusAndStrokeWidthFromDot-CiF60Eet.js";import"./ActiveShapeUtils-SliXRAYD.js";import"./Curve-DEZWs80m.js";import"./step-RKP5ji2w.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-LqY6E-my.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
