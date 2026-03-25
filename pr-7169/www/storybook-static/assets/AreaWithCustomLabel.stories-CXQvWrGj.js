import{e as t}from"./iframe-CB4rwuoz.js";import{R as c}from"./arrayEqualityCheck-B0sfDo8e.js";import{C as d}from"./ComposedChart-YoWdVHlU.js";import{A as l}from"./Area-DlbXBfq_.js";import{R as h}from"./RechartsHookInspector-c3RyaB9m.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-aRufe_6H.js";import"./immer-BWNyrJnU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-VUmZrQSA.js";import"./index-BgC6MCXe.js";import"./hooks-DoXZqLBz.js";import"./axisSelectors-BlEjC6I8.js";import"./d3-scale-BjYlm7DL.js";import"./zIndexSlice-CX5pCWFs.js";import"./renderedTicksSlice-B7tbCiQT.js";import"./CartesianChart-Bwy1F3hm.js";import"./chartDataContext-D2Mcqnh5.js";import"./CategoricalChart-RjnDaFgq.js";import"./Curve-DX-WNmjD.js";import"./types-CgQDsaUM.js";import"./step-BgqYgAla.js";import"./Layer-CF-S8dmg.js";import"./ReactUtils-BKtMub4g.js";import"./Label-C4bu2feL.js";import"./Text-BQ5lZJu1.js";import"./DOMUtils-CBex0cbx.js";import"./ZIndexLayer-DoMA1dJ2.js";import"./ActivePoints-CemCp_OZ.js";import"./Dot-Dh6sbB0Q.js";import"./RegisterGraphicalItemId-mDbm0o4v.js";import"./GraphicalItemClipPath-CewNEzcT.js";import"./SetGraphicalItem-Df_Fprv_.js";import"./useAnimationId-CLj3uDOB.js";import"./getRadiusAndStrokeWidthFromDot-BcBCYhRo.js";import"./graphicalItemSelectors-6Ztty2tI.js";import"./index-DLNZT6vI.js";import"./ChartSizeDimensions-D60uICZH.js";import"./OffsetShower-C1ie4azQ.js";import"./PlotAreaShower-T2_0B54j.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
