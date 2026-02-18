import{e as t}from"./iframe-DRECDyJu.js";import{R as c}from"./arrayEqualityCheck-CwmcLezE.js";import{C as d}from"./ComposedChart-CFtzaxo-.js";import{A as l}from"./Area-uUNj3TYb.js";import{R as h}from"./RechartsHookInspector-CkXF-mFA.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BL8CG5Be.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CU5EzhmX.js";import"./hooks-CjbPLp91.js";import"./axisSelectors-B-ON6UuJ.js";import"./zIndexSlice-DfG_LBZH.js";import"./renderedTicksSlice-BLRX00yy.js";import"./CartesianChart-B_9qra-d.js";import"./chartDataContext-D1nxolyM.js";import"./CategoricalChart-B6UPKjrz.js";import"./Curve-BflKxEFk.js";import"./types-BSPZHGNH.js";import"./Layer-BVdUfIl0.js";import"./ReactUtils--6xJa5xj.js";import"./Label-CYBLI-Y2.js";import"./Text-DYPz2gV9.js";import"./DOMUtils-bfarr5el.js";import"./ZIndexLayer-DsAf8BK3.js";import"./ActivePoints-BT3fRugx.js";import"./Dot-B6Z1yhin.js";import"./RegisterGraphicalItemId-CnbfgSt4.js";import"./GraphicalItemClipPath-Cm2-R3a1.js";import"./SetGraphicalItem-BUqWhQAE.js";import"./useAnimationId-DgWDlavz.js";import"./getRadiusAndStrokeWidthFromDot-Db6__9I1.js";import"./graphicalItemSelectors-C1R8rUPC.js";import"./index-2vD-No8t.js";import"./ChartSizeDimensions-EJWE07nJ.js";import"./OffsetShower-Dgs61RIJ.js";import"./PlotAreaShower-B71aiz9a.js";const tt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const et=["CustomizedLabel"];export{e as CustomizedLabel,et as __namedExportsOrder,tt as default};
