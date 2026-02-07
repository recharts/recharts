import{e as t}from"./iframe-DTmqf-89.js";import{R as c}from"./arrayEqualityCheck-B5lu4Lk9.js";import{C as d}from"./ComposedChart-N22sluFG.js";import{A as l}from"./Area-Dj3j2SNE.js";import{R as h}from"./RechartsHookInspector-1827yCK6.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C00TVibV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-COXu3P-w.js";import"./hooks-BU_yGiYF.js";import"./axisSelectors-C7PUT4HW.js";import"./zIndexSlice-Vv1FeqCv.js";import"./CartesianChart-BS9lWtNm.js";import"./chartDataContext-DSwc8Xm3.js";import"./CategoricalChart-D6K3dQ4i.js";import"./Curve-B7xWVUlS.js";import"./types-B8nej2n0.js";import"./Layer-BTS4uGxy.js";import"./ReactUtils-byYmdu0g.js";import"./Label-egeGTsC3.js";import"./Text-CUOaxD2f.js";import"./DOMUtils-B3KaDt1C.js";import"./ZIndexLayer-DxJNdv8G.js";import"./ActivePoints-Cjk-cffs.js";import"./Dot-Bi08gvdO.js";import"./RegisterGraphicalItemId-DzHJgvRB.js";import"./GraphicalItemClipPath-BMDqk7zi.js";import"./SetGraphicalItem-BFlL7NjP.js";import"./useAnimationId-CwTw9zZj.js";import"./getRadiusAndStrokeWidthFromDot-C9PG8MX9.js";import"./graphicalItemSelectors-B4vCRplq.js";import"./index-Csnv4pYo.js";import"./ChartSizeDimensions-DGu1LvxE.js";import"./OffsetShower-BXOIobIw.js";import"./PlotAreaShower-BatiQcKf.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
