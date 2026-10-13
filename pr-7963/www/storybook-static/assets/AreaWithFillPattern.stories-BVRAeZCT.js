import{R as t}from"./iframe-DUnkgIOQ.js";import{R as p}from"./zIndexSlice-r-fMsMuk.js";import{C as m}from"./ComposedChart-DmUk4KiU.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BVCAAZbw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BvBsSQNH.js";import"./index-Bi2SJwnS.js";import"./index-DrITryDs.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DLNxblaS.js";import"./isWellBehavedNumber-dou1peGm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cnrgjbh6.js";import"./axisSelectors-zqyiWpFa.js";import"./d3-scale-D5X6Q4ub.js";import"./index-BneZVI-r.js";import"./index-B4osSD3q.js";import"./renderedTicksSlice-B8EBEqyh.js";import"./index-CsDFOcOo.js";import"./CartesianChart-5Wn1_YAG.js";import"./chartDataContext-jAnWnb0r.js";import"./CategoricalChart-CgAmM9Jo.js";import"./Layer-B-Hy8zN7.js";import"./activeStyles-BaanO1pI.js";import"./Label-C4zX0cwX.js";import"./Text-2AgJvCRv.js";import"./pageBackground-DK5qsHYc.js";import"./useId-NTbtm6dC.js";import"./useBackwardsCompatibleTheme-BSnNSNn_.js";import"./ZIndexLayer-BhOOp4BW.js";import"./useAnimationId-Dm7GmgCn.js";import"./dataEntryStyles-YmAEtIi5.js";import"./ActivePoints-CKn97wio.js";import"./Dot-DF5hxMLE.js";import"./types-BzNQj-ku.js";import"./GraphicalItemClipPath-YZJU-iu_.js";import"./SetGraphicalItem-C8kjqmoZ.js";import"./getRadiusAndStrokeWidthFromDot-DP2NGMyj.js";import"./ActiveShapeUtils-jD8IoLvy.js";import"./Curve-DuIVBM1d.js";import"./step-BgKuKAEi.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BUAhKumu.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
