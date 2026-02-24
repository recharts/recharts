import{e as t}from"./iframe-KW6q1dC8.js";import{R as c}from"./arrayEqualityCheck-CsL9oElz.js";import{C as d}from"./ComposedChart--6sNek95.js";import{A as l}from"./Area-CsVTqcCn.js";import{R as h}from"./RechartsHookInspector-DHhOwwId.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DHg0Gmry.js";import"./immer-DJQrWxfT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3hZLvHH.js";import"./index-IRfq0wV0.js";import"./hooks-B87Kmuri.js";import"./axisSelectors-CGmw0y2t.js";import"./d3-scale-VvEjRtef.js";import"./zIndexSlice-BRzCHmzO.js";import"./renderedTicksSlice-4nv5xzpG.js";import"./CartesianChart-e0ar_JeY.js";import"./chartDataContext-BSoSHoQo.js";import"./CategoricalChart-DZLAbsgr.js";import"./Curve-DF4GvF_O.js";import"./types-Dwy1lCB-.js";import"./step-B042Wr1e.js";import"./Layer-6RQ8uR29.js";import"./ReactUtils-_GmE1-On.js";import"./Label-Bmj0n5iK.js";import"./Text-BNRPp-95.js";import"./DOMUtils-0gZHvISx.js";import"./ZIndexLayer-w4JJl7sJ.js";import"./ActivePoints-BZL4jV5j.js";import"./Dot-BDQ-YubX.js";import"./RegisterGraphicalItemId-YsmU15H8.js";import"./GraphicalItemClipPath-C4dlV5mW.js";import"./SetGraphicalItem-BYLwEs4Z.js";import"./useAnimationId-D6KMdx62.js";import"./getRadiusAndStrokeWidthFromDot-Csfskhtu.js";import"./graphicalItemSelectors-BUu0Du50.js";import"./index-8EwdUQHQ.js";import"./ChartSizeDimensions-RgqfN5JQ.js";import"./OffsetShower-BWgPsPSu.js";import"./PlotAreaShower-BcdTxtG3.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
