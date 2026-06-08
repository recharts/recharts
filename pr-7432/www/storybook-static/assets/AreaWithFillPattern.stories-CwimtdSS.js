import{R as t}from"./iframe-B2GUem4R.js";import{R as p}from"./zIndexSlice-CZi7E6fW.js";import{C as m}from"./ComposedChart-C0b-ufbL.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Cf8dZxWU.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DXmH-xiw.js";import"./index-8D89370m.js";import"./index-C3eO1gGD.js";import"./get-Dz6Q_sAk.js";import"./resolveDefaultProps-D8aANFv1.js";import"./isWellBehavedNumber-Dny2ojXK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-wIT9NoUO.js";import"./index-CiX8zsFN.js";import"./index-CRfxI4mA.js";import"./renderedTicksSlice-CFEn6KcH.js";import"./axisSelectors-eBcYGUc1.js";import"./d3-scale-BTfuin0j.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B-JFZAz_.js";import"./chartDataContext-CqMqFbwN.js";import"./CategoricalChart-DLExbf-B.js";import"./Layer-D33k1icw.js";import"./AnimatedItems-LimEMMjo.js";import"./Label-BkYexeGT.js";import"./Text-BI7UFZae.js";import"./DOMUtils-Bf1ILi-r.js";import"./ZIndexLayer-B6ZLwcmD.js";import"./useAnimationId-D653EGzA.js";import"./ActivePoints-CSw05vyh.js";import"./Dot-t6KHQrBE.js";import"./types-D4D5wSub.js";import"./RegisterGraphicalItemId-CH4DvZUM.js";import"./GraphicalItemClipPath-CAM-mwtd.js";import"./SetGraphicalItem-C_-j0gLb.js";import"./getRadiusAndStrokeWidthFromDot-By4awG1w.js";import"./ActiveShapeUtils-1-wftwDY.js";import"./Curve-TtTpS3RF.js";import"./step-1OtCv9Fq.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-DegQp3fd.js";const $={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const tt=["FillPattern"];export{e as FillPattern,tt as __namedExportsOrder,$ as default};
