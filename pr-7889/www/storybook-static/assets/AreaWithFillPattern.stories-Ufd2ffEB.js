import{R as t}from"./iframe-BiVlDiGB.js";import{R as p}from"./zIndexSlice-BT91VcLs.js";import{C as m}from"./ComposedChart-CruKG_sN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-tAD5a3PJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-YKevu-yW.js";import"./index-QwesTmYv.js";import"./index-ChXYLaG0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CzQIEG40.js";import"./isWellBehavedNumber-6NC8t9If.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BDkbatGL.js";import"./axisSelectors-BEkueF2I.js";import"./d3-scale-GIUO3qKs.js";import"./index-BUQ8JU-K.js";import"./index-BgrYIa47.js";import"./renderedTicksSlice-BO57uAxz.js";import"./index-BlprVplm.js";import"./CartesianChart-zLDK9f_1.js";import"./chartDataContext-C02yhzPU.js";import"./CategoricalChart-C5Ob1It2.js";import"./Layer-CGg1zqLT.js";import"./AnimatedItems-0a3kF70I.js";import"./Label-CTisYkFS.js";import"./Text-B7j_haGg.js";import"./DOMUtils-uFQLQ8Py.js";import"./useId-Di9tEwNI.js";import"./useBackwardsCompatibleTheme-C8tb1jUV.js";import"./ZIndexLayer-SmUjHGv1.js";import"./useAnimationId-BDtWHeb_.js";import"./ActivePoints-DAXej_aD.js";import"./Dot-CRQkuIVU.js";import"./types-D-F_NfC0.js";import"./RegisterGraphicalItemId-BA3j10pa.js";import"./GraphicalItemClipPath-3vc4gJgj.js";import"./SetGraphicalItem-jWHGIqY5.js";import"./getRadiusAndStrokeWidthFromDot-BevzmnHp.js";import"./ActiveShapeUtils-Dqrzinyd.js";import"./Curve-vjyprLTK.js";import"./step-CkhChmyV.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DlBKGkIj.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
