import{R as t}from"./iframe-B7xPXiPl.js";import{R as p}from"./zIndexSlice-DflaePKy.js";import{C as m}from"./ComposedChart-BdsejxH2.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-Ce6by0ZQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-t98kZJWg.js";import"./throttle-BS8hni_u.js";import"./index-D9RsPAPo.js";import"./index-D5HoT5KN.js";import"./RechartsWrapper-BcgQInkA.js";import"./axisSelectors-Bm0UGi6R.js";import"./polarAxisSelectors-BXJXB0Uo.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CVxlp6F9.js";import"./index-C-x4qMT5.js";import"./index-BSMQz-2O.js";import"./renderedTicksSlice-CrxiGG4Q.js";import"./index-v1i9I3dv.js";import"./fillDefinitions-BBy33SnP.js";import"./CartesianChart-BjVCLf26.js";import"./chartDataContext-D0czUVCw.js";import"./CategoricalChart-DFRV2_vj.js";import"./Layer-CYZUIq4P.js";import"./dataEntryStyles-C3moi0Z-.js";import"./Label-YOyO9lVV.js";import"./Text-BexCT2h6.js";import"./ZIndexLayer-7qwpAdIl.js";import"./ActivePoints-Ij5uM0Pj.js";import"./Dot-GE-iIyp3.js";import"./types-CQsoFKaQ.js";import"./activeStyles-CHc73Nrw.js";import"./useAnimationId-Bi0MWfey.js";import"./Symbols-BV4T3Yk8.js";import"./symbol-BKIkK8QI.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-C6Fs49Wr.js";import"./getRadiusAndStrokeWidthFromDot-CdlEB0NM.js";import"./ActiveShapeUtils-Cx93C_x7.js";import"./Curve-CrTz1Ty2.js";import"./step-DxMe6Ez2.js";import"./useEffectiveDataKey-Bs8MhK-5.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
