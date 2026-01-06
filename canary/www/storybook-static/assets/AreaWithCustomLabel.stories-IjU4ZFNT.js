import{e as t}from"./iframe-I1Pz45Ny.js";import{R as c}from"./arrayEqualityCheck-BssfPt5l.js";import{C as d}from"./ComposedChart-C6b_M18r.js";import{A as l}from"./Area-D8xFd1e8.js";import{R as h}from"./RechartsHookInspector-CR238VhK.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bq-o5tNM.js";import"./PolarUtils-DcZ6GJsX.js";import"./RechartsWrapper-DCDr6Jqb.js";import"./hooks-B674bzAM.js";import"./axisSelectors-BE-GMhoq.js";import"./zIndexSlice-BV16LNaQ.js";import"./CartesianChart-DRbFdOf0.js";import"./chartDataContext-CiPGF6pl.js";import"./CategoricalChart-Cv93x4E-.js";import"./Curve-CHlRnf3G.js";import"./types-CrbLuNpc.js";import"./Layer-DQZYEAka.js";import"./ReactUtils-_pBy8ldc.js";import"./Label-BgdagQ_F.js";import"./Text-DswTa9RV.js";import"./DOMUtils--5RVCy_u.js";import"./ZIndexLayer-BcHuHMGr.js";import"./ActivePoints-dh-kFKvq.js";import"./Dot-CUoJxuAW.js";import"./RegisterGraphicalItemId-S1t7FnBd.js";import"./GraphicalItemClipPath-CYavBbht.js";import"./SetGraphicalItem-B3UzWK5E.js";import"./useAnimationId-SAHxkggc.js";import"./getRadiusAndStrokeWidthFromDot-CMO9CrvP.js";import"./graphicalItemSelectors-CXlkWCcI.js";import"./index-DMBIHBp8.js";import"./ChartSizeDimensions-rQb-Z9Di.js";import"./OffsetShower-DqiW8ZGm.js";import"./PlotAreaShower-DtXJ5a61.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
