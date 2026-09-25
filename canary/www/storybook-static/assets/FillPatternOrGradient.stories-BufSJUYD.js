import{R as t}from"./iframe-BbNtNwCn.js";import{R as s}from"./zIndexSlice-VrNRi_G1.js";import{C as m}from"./ComposedChart-D4iN_2Rf.js";import{p as l}from"./Page-Cj8EiXz7.js";import{B as r}from"./Bar-bSTZqkum.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BKFxohT3.js";import"./index-75aciM30.js";import"./index-DDphzaTv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DhM2CAPd.js";import"./isWellBehavedNumber-uY0CIhkC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DE-VI6iZ.js";import"./axisSelectors-BzyIizHG.js";import"./d3-scale-Dkbi5OyZ.js";import"./index-BSdVWAmb.js";import"./index-Cs8MvahU.js";import"./renderedTicksSlice-DIxEy3cM.js";import"./index-gTTJo4-y.js";import"./CartesianChart-D4DHjPEA.js";import"./chartDataContext-DlNjoonA.js";import"./CategoricalChart-B7Or92Hs.js";import"./Layer-DFZlw494.js";import"./AnimatedItems-LXQvjRXM.js";import"./Label-Bi0vIQjw.js";import"./Text-jR3JJSu6.js";import"./DOMUtils-DKOsv_Gf.js";import"./useId-CYI9mRcC.js";import"./useBackwardsCompatibleTheme-w385Ylxa.js";import"./ZIndexLayer-CAj7_5Sx.js";import"./useAnimationId-CCouJXLZ.js";import"./types-fRbVNPnq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D88c0sgw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CArN8SR1.js";import"./tooltipContext-DcL2HawB.js";import"./RegisterGraphicalItemId-D25ry5r7.js";import"./ErrorBarContext-Cr3z4FFd.js";import"./GraphicalItemClipPath-B5iQtC38.js";import"./SetGraphicalItem-C_2GZMjS.js";import"./getZIndexFromUnknown-BOFUsWpr.js";import"./useGraphicalItemIdentity-DD2NYUwk.js";const et={title:"Examples/cartesian/Bar/Fill with Gradient or Pattern"},e={render:()=>{const[n,i]=[600,300];return t.createElement(s,{width:"100%",height:i},t.createElement(m,{width:n,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1"},t.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),t.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})),t.createElement("pattern",{id:"star",width:"10",height:"10",patternUnits:"userSpaceOnUse"},t.createElement("polygon",{points:"0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"})),t.createElement("pattern",{id:"stripe",width:"4",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"2",height:"4",fill:"red"}))),t.createElement(r,{dataKey:"uv",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorUv)"}),t.createElement(r,{dataKey:"pv",stroke:"#82ca9d",fillOpacity:1,fill:"url(#stripe)"}),t.createElement(r,{dataKey:"amt",stroke:"#8884d8",fillOpacity:1,fill:"url(#star)"})))}},rt=["Fill"];var o,a,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <pattern id="star" width="10" height="10" patternUnits="userSpaceOnUse">
              <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2" />
            </pattern>
            <pattern id="stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="2" height="4" fill="red" />
            </pattern>
          </defs>
          <Bar dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Bar dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#stripe)" />
          <Bar dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#star)" />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=e.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{e as Fill,rt as __namedExportsOrder,et as default};
