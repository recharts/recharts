import{R as t}from"./iframe-Czcj7Ej5.js";import{R as p}from"./zIndexSlice-CKivF8h7.js";import{C as m}from"./ComposedChart-BkinsCpZ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DQ6C8S4B.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BVmZUzar.js";import"./index-DMWmOMbl.js";import"./index-B91NvUo7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-8BNEdWXX.js";import"./isWellBehavedNumber-Dco4JHSd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CDYHtUJT.js";import"./axisSelectors-BeEA7IYF.js";import"./d3-scale-BQoi7yt5.js";import"./index-B0JfwGdu.js";import"./index-Bxr1sCFD.js";import"./renderedTicksSlice-CbrcSGbF.js";import"./index-CFVWldzh.js";import"./CartesianChart-Dv6L8FEP.js";import"./chartDataContext-Bk1K2XnM.js";import"./CategoricalChart-Du7LZMoH.js";import"./Layer-2POOn5CI.js";import"./AnimatedItems-B6csDPia.js";import"./Label-OqXB0-3Q.js";import"./Text-BN2m7we3.js";import"./DOMUtils-CVT-c_43.js";import"./useId-3K3eUDJ4.js";import"./useBackwardsCompatibleTheme-BpiBN5I0.js";import"./ZIndexLayer-CF-iLGvZ.js";import"./useAnimationId-_fI9jCE-.js";import"./ActivePoints-BVCg7sLW.js";import"./Dot-Cx9jlkw_.js";import"./types-CjYnj8ko.js";import"./RegisterGraphicalItemId-DZFxFD16.js";import"./GraphicalItemClipPath-BePsYx1e.js";import"./SetGraphicalItem-CX4EE90C.js";import"./getRadiusAndStrokeWidthFromDot-FqqM7_gr.js";import"./ActiveShapeUtils-C-4luYKV.js";import"./Curve-BM-kcMMV.js";import"./step-hNno3B0H.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CvRtM1fn.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const it=["FillPattern"];export{e as FillPattern,it as __namedExportsOrder,rt as default};
