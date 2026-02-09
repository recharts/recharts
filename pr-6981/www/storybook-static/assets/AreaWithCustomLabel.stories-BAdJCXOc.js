import{e as t}from"./iframe-_ezCe_To.js";import{R as c}from"./arrayEqualityCheck-OWAMtNJc.js";import{C as d}from"./ComposedChart-BZQ3F3Nq.js";import{A as l}from"./Area-DznWK7XI.js";import{R as h}from"./RechartsHookInspector-D5tzqIDa.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-R_saYEpi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3l68k8X.js";import"./hooks-DGCPXX4G.js";import"./axisSelectors-LsrbDDJC.js";import"./zIndexSlice-Dca2j4f-.js";import"./CartesianChart-C47j_-ZF.js";import"./chartDataContext-Bh5VlY_Q.js";import"./CategoricalChart-BLLc755m.js";import"./Curve-C2x4bgof.js";import"./types-DgqTh4_l.js";import"./Layer-BtA8wuUB.js";import"./ReactUtils-B0BDd-2i.js";import"./Label-CHFqoGJt.js";import"./Text-CYvn3qP_.js";import"./DOMUtils-CBHTypWU.js";import"./ZIndexLayer-CWThG05g.js";import"./ActivePoints-CJI24LGC.js";import"./Dot-C4tiY8Du.js";import"./RegisterGraphicalItemId-C1YzkRSv.js";import"./GraphicalItemClipPath-BQEIoeEz.js";import"./SetGraphicalItem-DNE92K4u.js";import"./useAnimationId-BzKwp2Yk.js";import"./getRadiusAndStrokeWidthFromDot-D-FWk1PK.js";import"./graphicalItemSelectors-DUHvhoPV.js";import"./index-DsSUOPyu.js";import"./ChartSizeDimensions-BekARe9N.js";import"./OffsetShower-DpjGgrQ9.js";import"./PlotAreaShower-OcEMvBwg.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
