import{e as t}from"./iframe-CjUtT138.js";import{R as c}from"./arrayEqualityCheck-B-tT2ESq.js";import{C as d}from"./ComposedChart-DK7N52sv.js";import{A as l}from"./Area-BYTbUcwK.js";import{R as h}from"./RechartsHookInspector-BSSs4sC-.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DXKWDAOg.js";import"./PolarUtils-_eTStEZn.js";import"./RechartsWrapper-it-0F-jx.js";import"./hooks-4UrLvWFw.js";import"./axisSelectors-BX9CBNHK.js";import"./zIndexSlice-DsVMOISz.js";import"./CartesianChart-DOBNNTq5.js";import"./chartDataContext-Cd_ntzly.js";import"./CategoricalChart-QNPsXY_1.js";import"./Curve-vYHSIBiw.js";import"./types-C9Ftyw06.js";import"./Layer-D_MGslDL.js";import"./ReactUtils-CHVaJjT2.js";import"./Label-BL8V4Wmg.js";import"./Text-DwSJp926.js";import"./DOMUtils-D7gju_6v.js";import"./ZIndexLayer-DLNaK2nP.js";import"./ActivePoints-ggcLh7it.js";import"./Dot-C7pBRmz2.js";import"./RegisterGraphicalItemId-BsU6Bbki.js";import"./GraphicalItemClipPath-BkNEqUtH.js";import"./SetGraphicalItem-pIRkDX-c.js";import"./useAnimationId-D51fABKH.js";import"./getRadiusAndStrokeWidthFromDot-BnN5ibWF.js";import"./graphicalItemSelectors-D7G1T64w.js";import"./index-CYZv41C2.js";import"./ChartSizeDimensions-CNTgDKUn.js";import"./OffsetShower-Cvrl070M.js";import"./PlotAreaShower-Bo9f_x1d.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
