import{R as r}from"./iframe-CXZlrf2U.js";import{R as c}from"./zIndexSlice-BjX2jCNd.js";import{C as d}from"./ComposedChart-Cd7Rssjf.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DhWYjEGJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DzsDYtS8.js";import"./throttle-CeMcgCrB.js";import"./index-BXews0N3.js";import"./index-BQ37V211.js";import"./RechartsWrapper-DH-5ZOsj.js";import"./axisSelectors-CXSRT8oe.js";import"./polarAxisSelectors-C9d2CYxT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmN7CMF4.js";import"./index-CPNldOVQ.js";import"./index-Dwq43-hP.js";import"./renderedTicksSlice-CNKxG0p9.js";import"./index-B6CEgg-5.js";import"./fillDefinitions-CXni0F_U.js";import"./CartesianChart-BF67_Mbn.js";import"./chartDataContext-Cr6H1IFD.js";import"./CategoricalChart-C5S6zTyC.js";import"./Layer-cEFsn6Cd.js";import"./dataEntryStyles-CAbAzZrW.js";import"./Label-DMZfCKi2.js";import"./Text-ypQmpcnA.js";import"./ZIndexLayer-oMBe6LXA.js";import"./ActivePoints-BSxRgFzT.js";import"./Dot-jYZs8or3.js";import"./types-BoOwr3-k.js";import"./activeStyles-guaYkALv.js";import"./useAnimationId-Bvdrz9cO.js";import"./Symbols-BDMCO_-i.js";import"./symbol-BZ1H3BIy.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-GFUHKXGI.js";import"./getRadiusAndStrokeWidthFromDot-CwxjjF24.js";import"./ActiveShapeUtils-DAjhd_ui.js";import"./Curve-DIPpxfHS.js";import"./step-CMXLmVWU.js";import"./useEffectiveDataKey-ojW0Z0fn.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
