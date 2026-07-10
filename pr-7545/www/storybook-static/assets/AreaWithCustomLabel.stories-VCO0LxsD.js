import{R as e}from"./iframe-BRR_Yx3q.js";import{R as c}from"./zIndexSlice-2cKWUmx1.js";import{C as d}from"./ComposedChart-BrQA-1mf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D-yIiFxw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-9Cm-XaBZ.js";import"./index-C-RWhaz3.js";import"./index-dwufCIeA.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BuYHfJJu.js";import"./isWellBehavedNumber-BoZxamXc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dreti13-.js";import"./index-C7O-rWXn.js";import"./index-CJWeDOqD.js";import"./renderedTicksSlice-DsmsDUZ3.js";import"./axisSelectors-BvSj2dv3.js";import"./d3-scale-DiG9HsKp.js";import"./CartesianChart-D7iKBlwo.js";import"./chartDataContext-7uLTjT1t.js";import"./CategoricalChart-Bo9h-nM1.js";import"./Layer-DEnO1k0R.js";import"./AnimatedItems-BTME76kn.js";import"./Label-BFmCxOLP.js";import"./Text-CNcfggmg.js";import"./DOMUtils-DaLtqU51.js";import"./ZIndexLayer-B_gUHSFj.js";import"./useAnimationId-C1SKzxsx.js";import"./ActivePoints-Du_pXw62.js";import"./Dot-RhTFr113.js";import"./types-DUTL6gmw.js";import"./RegisterGraphicalItemId-vR20SUSb.js";import"./GraphicalItemClipPath-DlaiPyn0.js";import"./SetGraphicalItem-BE7YCbvJ.js";import"./getRadiusAndStrokeWidthFromDot-CtiaEZzs.js";import"./ActiveShapeUtils-BvVAnTtS.js";import"./Curve-CgfofNr-.js";import"./step-DD-M69WZ.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BBSGChtr.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
