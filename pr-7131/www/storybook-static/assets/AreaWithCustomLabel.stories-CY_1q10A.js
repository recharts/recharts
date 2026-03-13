import{e as t}from"./iframe-BDTlfdm2.js";import{R as c}from"./arrayEqualityCheck--4uVIqe7.js";import{C as d}from"./ComposedChart-D8FjVx7b.js";import{A as l}from"./Area-HHPVBxoU.js";import{R as h}from"./RechartsHookInspector-CwVl35lx.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Czz55H-I.js";import"./immer-D4Dnjbsg.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CFvbTCKp.js";import"./index-B3NJv-3m.js";import"./hooks-CfsEtptI.js";import"./axisSelectors-Dx0oxQ7o.js";import"./d3-scale-3sh934kt.js";import"./zIndexSlice-Brj7ikm8.js";import"./renderedTicksSlice-D_ZcqCe1.js";import"./CartesianChart-7fZDMSO_.js";import"./chartDataContext-CSwNX1B7.js";import"./CategoricalChart-CpHz1opn.js";import"./Curve-g-MTQgVG.js";import"./types-D6KN9kQt.js";import"./step-C4gkOhOo.js";import"./Layer-CqYlT3eS.js";import"./ReactUtils-ma75EdaK.js";import"./Label-VxKVkBMg.js";import"./Text-HbCgBUoZ.js";import"./DOMUtils-DeXMvM2R.js";import"./ZIndexLayer-DC39aMOh.js";import"./ActivePoints-o7K4rMbo.js";import"./Dot-245mRXx6.js";import"./RegisterGraphicalItemId-Ch3Q5pij.js";import"./GraphicalItemClipPath-DgjUnpLZ.js";import"./SetGraphicalItem-DG5VxVGr.js";import"./useAnimationId-CupwM_tg.js";import"./getRadiusAndStrokeWidthFromDot-CH2mR7qj.js";import"./graphicalItemSelectors-C9Ci8dGJ.js";import"./index-CT8_ithu.js";import"./ChartSizeDimensions-C2U4uaah.js";import"./OffsetShower-Mn3nZtBJ.js";import"./PlotAreaShower-zSnLei3q.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
