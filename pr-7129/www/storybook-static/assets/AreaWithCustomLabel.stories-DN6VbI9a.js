import{e as t}from"./iframe-DTYvDHnt.js";import{R as c}from"./arrayEqualityCheck-1nsmynxr.js";import{C as d}from"./ComposedChart-3AuQ4-dj.js";import{A as l}from"./Area-Dpw0-y_-.js";import{R as h}from"./RechartsHookInspector-Pg_EkWGi.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DkSqodrF.js";import"./immer-D3GAE1ff.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_fFV3co.js";import"./index-B3wSVZ9D.js";import"./hooks-uuM42g5A.js";import"./axisSelectors-BgDhuMKt.js";import"./d3-scale-RiIvDOIa.js";import"./zIndexSlice-CBk7l9Bz.js";import"./renderedTicksSlice-B_O9XDCU.js";import"./CartesianChart-xLj2uFa2.js";import"./chartDataContext-BLIq9hU3.js";import"./CategoricalChart-DV8kXzgp.js";import"./Curve-D1NGPsms.js";import"./types-JQYj2LUa.js";import"./step-CL79bITl.js";import"./Layer-D1ZUQvW9.js";import"./ReactUtils-C-Mw6kzE.js";import"./Label-Dl6pWHvn.js";import"./Text--JvpmNSB.js";import"./DOMUtils-BViGwjhG.js";import"./ZIndexLayer-DhriUgdb.js";import"./ActivePoints-C_uAyo2G.js";import"./Dot-CYQCTbwY.js";import"./RegisterGraphicalItemId-o-_afPny.js";import"./GraphicalItemClipPath-ByUNJAKI.js";import"./SetGraphicalItem-DcRf1D23.js";import"./useAnimationId-CwNlC5fD.js";import"./getRadiusAndStrokeWidthFromDot-BR4iej6B.js";import"./graphicalItemSelectors-xdRnjXRN.js";import"./index-CrrTnEOk.js";import"./ChartSizeDimensions-Dx17ITl5.js";import"./OffsetShower-BCss9x5E.js";import"./PlotAreaShower-EDiIsOli.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
