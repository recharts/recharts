import{e as t}from"./iframe-C-3BuwuQ.js";import{R as c}from"./arrayEqualityCheck-FeQgOIOo.js";import{C as d}from"./ComposedChart-BKINFeBC.js";import{A as l}from"./Area-DRkgprMm.js";import{R as h}from"./RechartsHookInspector-_jP1ustk.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B8KPX6JC.js";import"./PolarUtils-C0kEye-G.js";import"./RechartsWrapper-Bcu3XnIN.js";import"./hooks-DEo8Vj_c.js";import"./axisSelectors-TDNCuVG_.js";import"./zIndexSlice-CFeEDpl4.js";import"./CartesianChart-DDw6NmdK.js";import"./chartDataContext-CCRblB7F.js";import"./CategoricalChart-E0yZOneU.js";import"./Curve-DOZfooTf.js";import"./types-CX-GD2h3.js";import"./Layer-BtreNavR.js";import"./ReactUtils-DhVfiJt6.js";import"./Label-C_nqqcnR.js";import"./Text-DQ4MnNVk.js";import"./DOMUtils-g9jP34sD.js";import"./ZIndexLayer-cK31z4E4.js";import"./ActivePoints-CWUIUowx.js";import"./Dot-DyDE0Uuu.js";import"./RegisterGraphicalItemId-CC6kQy01.js";import"./GraphicalItemClipPath-4wjIziT0.js";import"./SetGraphicalItem-wdcyb_2X.js";import"./useAnimationId-0OWcJ5q4.js";import"./getRadiusAndStrokeWidthFromDot-BnVuhiTb.js";import"./graphicalItemSelectors-CJGM5f5x.js";import"./index-DWdef0jv.js";import"./ChartSizeDimensions-B8NVQVZ1.js";import"./OffsetShower-g_YOgmWj.js";import"./PlotAreaShower-CrDYc66T.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
