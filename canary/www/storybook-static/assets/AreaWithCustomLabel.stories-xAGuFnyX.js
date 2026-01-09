import{e as t}from"./iframe-DGrXlEkx.js";import{R as c}from"./arrayEqualityCheck-DicChNuU.js";import{C as d}from"./ComposedChart-B5e_pVnj.js";import{A as l}from"./Area-DtjZBkWj.js";import{R as h}from"./RechartsHookInspector-Br39JKkJ.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CbjUZWO4.js";import"./PolarUtils-DHWqJfSQ.js";import"./RechartsWrapper-BsZxNtsW.js";import"./hooks-BJzdHLQJ.js";import"./axisSelectors-B99hHUji.js";import"./zIndexSlice-BOlzJk7E.js";import"./CartesianChart-DhyYzKH1.js";import"./chartDataContext-xgZ2IC4i.js";import"./CategoricalChart-CoFZdKLi.js";import"./Curve-B7GNUcvb.js";import"./types-Byz7h8Fw.js";import"./Layer-D3LXHH9n.js";import"./ReactUtils-B0RMD20A.js";import"./Label-BU6Zd3bq.js";import"./Text-DHLuacJp.js";import"./DOMUtils-BNpuiDkW.js";import"./ZIndexLayer-B0lWMP9E.js";import"./ActivePoints-Cg45XT1Q.js";import"./Dot-JJjdvtMS.js";import"./RegisterGraphicalItemId-kRuXUne3.js";import"./GraphicalItemClipPath-BaBV_qBF.js";import"./SetGraphicalItem-DtkD_AUo.js";import"./useAnimationId-BLzFnaDj.js";import"./getRadiusAndStrokeWidthFromDot-gCSpblHn.js";import"./graphicalItemSelectors-BPbz2guO.js";import"./index-DUFFx6eI.js";import"./ChartSizeDimensions-DMMvC6d0.js";import"./OffsetShower-T7KMfcKq.js";import"./PlotAreaShower-B7mPYwn0.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
