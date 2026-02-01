import{e as t}from"./iframe-S3w8vazP.js";import{R as c}from"./arrayEqualityCheck-CVVcuOqH.js";import{C as d}from"./ComposedChart-Bs1sqtrj.js";import{A as l}from"./Area-BkSFT0XD.js";import{R as h}from"./RechartsHookInspector-BtEk5fyn.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DUh5CxZw.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BglxN53s.js";import"./hooks-BIoyKUdn.js";import"./axisSelectors-C9fo5mxJ.js";import"./zIndexSlice-C8yB0SjJ.js";import"./CartesianChart-Di7ZLiW9.js";import"./chartDataContext-C3H726Iv.js";import"./CategoricalChart-BpFyN0NS.js";import"./Curve-DzPn9elm.js";import"./types-46Crnp6z.js";import"./Layer-Dpjv3Z7H.js";import"./ReactUtils-DdWnBm1Y.js";import"./Label-BFw783un.js";import"./Text-Ch2i1yLS.js";import"./DOMUtils-BYd--jqE.js";import"./ZIndexLayer-DtdorfOg.js";import"./ActivePoints-Dejn0HsJ.js";import"./Dot-Bjvjl7Nl.js";import"./RegisterGraphicalItemId-B2X6SVeo.js";import"./GraphicalItemClipPath-D9qCdAxL.js";import"./SetGraphicalItem-BpO8akWh.js";import"./useAnimationId-Pi9wCxwd.js";import"./getRadiusAndStrokeWidthFromDot-aysjhdrr.js";import"./graphicalItemSelectors-bqgSTEDn.js";import"./index-DLTKO4-0.js";import"./ChartSizeDimensions-DHpkkx7o.js";import"./OffsetShower-By9PfpSa.js";import"./PlotAreaShower-BawApXcc.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
