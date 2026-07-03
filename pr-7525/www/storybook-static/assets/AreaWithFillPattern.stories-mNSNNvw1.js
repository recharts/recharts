import{R as t}from"./iframe-mx_m0Bbx.js";import{R as p}from"./zIndexSlice-DzRj0O2j.js";import{C as m}from"./ComposedChart-BENGvYsD.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-D2pbrDB5.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C4NetDSi.js";import"./index-VyciUKje.js";import"./index-D6L8-6uP.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DbkTAdx2.js";import"./isWellBehavedNumber-DNgXwIS7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BGo6HJcU.js";import"./index-DRxhjL8G.js";import"./index-DfXqfQfJ.js";import"./renderedTicksSlice-Dbw1NMhi.js";import"./axisSelectors-BCNbmsqC.js";import"./d3-scale-Dkhn0JVn.js";import"./CartesianChart-CI1Yx8pO.js";import"./chartDataContext-DbyvTQIy.js";import"./CategoricalChart-CaTs9Dwm.js";import"./Layer-CIGRgmJf.js";import"./AnimatedItems-CxqbLrvD.js";import"./Label-CTtz2nFH.js";import"./Text-BRqwcuo5.js";import"./DOMUtils-CxMZUWXo.js";import"./ZIndexLayer-DoWBLOas.js";import"./useAnimationId-B1RQqc1z.js";import"./ActivePoints-p8w8Ckwa.js";import"./Dot-CG3pFr9Q.js";import"./types-CGXKV1tr.js";import"./RegisterGraphicalItemId-A-L91Q74.js";import"./GraphicalItemClipPath-DdGvz8Ok.js";import"./SetGraphicalItem-_D-u02tv.js";import"./getRadiusAndStrokeWidthFromDot-e5MUZgSd.js";import"./ActiveShapeUtils-BNcmVmA7.js";import"./Curve-8KyVkyQb.js";import"./step-DzD8K2Hy.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-CIKPVBBJ.js";const Z={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const $=["FillPattern"];export{e as FillPattern,$ as __namedExportsOrder,Z as default};
