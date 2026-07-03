import{R as e}from"./iframe-Bqhaiwq8.js";import{R as c}from"./zIndexSlice-BJS-a__d.js";import{C as d}from"./ComposedChart-oTFXmOZl.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DVBbReiA.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C_LSyirk.js";import"./index-CENQUa5y.js";import"./index-ChBrJC7P.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bz_Hg9tX.js";import"./isWellBehavedNumber-Be3mi6aN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0HX42ff.js";import"./index-QuJ2DhnT.js";import"./index-DxkzSUWz.js";import"./renderedTicksSlice-dCTNHtgX.js";import"./axisSelectors-Dd8okoki.js";import"./d3-scale-i5sn4jpY.js";import"./CartesianChart-DUun358R.js";import"./chartDataContext-BxVBYRL6.js";import"./CategoricalChart-BqinH4KG.js";import"./Layer-Co0F7rtj.js";import"./AnimatedItems-ZUM4uHMT.js";import"./Label-D7swILSN.js";import"./Text-BtH8DQvC.js";import"./DOMUtils-BpHmJx8-.js";import"./ZIndexLayer-CIZ0RaUe.js";import"./useAnimationId-D0jk17bx.js";import"./ActivePoints-DZkQMisB.js";import"./Dot-BTqZFgU3.js";import"./types-OmV-cVYy.js";import"./RegisterGraphicalItemId-BMXEaOnC.js";import"./GraphicalItemClipPath-9FMv3-Ih.js";import"./SetGraphicalItem-CKezQY-K.js";import"./getRadiusAndStrokeWidthFromDot-BRzjy3Uy.js";import"./ActiveShapeUtils-DZHTMyL3.js";import"./Curve-DUDGkuFv.js";import"./step-Yi3ifzmX.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CchqaGKR.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
