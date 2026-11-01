import{R as t}from"./iframe-Dt9aG847.js";import{R as p}from"./zIndexSlice-C3sOwbsK.js";import{C as m}from"./ComposedChart-CpvmmgfC.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BWOzKV0z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cnn2TL20.js";import"./throttle-DjDKvtka.js";import"./index-Ckb0wJr8.js";import"./index-ZaO1fpAq.js";import"./RechartsWrapper-CgsNUza7.js";import"./axisSelectors-Bm-O_fE3.js";import"./polarAxisSelectors-BE-JLCIi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DLGbz4xh.js";import"./index-DaFKSt3L.js";import"./index-C7FBrTyJ.js";import"./renderedTicksSlice-CiUiD4jz.js";import"./index-Cy9hP7c-.js";import"./fillDefinitions-Cturf6E_.js";import"./CartesianChart-ZS3wTvyi.js";import"./ZIndexPortal-C6GfDihg.js";import"./CategoricalChart-CcRrPC5A.js";import"./Layer-Z8zmzF48.js";import"./LabelList-Dmjy57ut.js";import"./Label-0OpL57DR.js";import"./Text-6YRDeSKh.js";import"./DOMUtils-DacRhvVS.js";import"./ZIndexLayer-D4w_arr1.js";import"./ActivePoints-Djx8G9q2.js";import"./Dot-B7i9JEY2.js";import"./types-CAYyOejn.js";import"./activeStyles-D2EMNXIV.js";import"./useAnimationId-CJa-E4MR.js";import"./dataEntryStyles-V0ugCGFO.js";import"./Symbols-VXtPO39-.js";import"./symbol-6_lKArhi.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-KzVnPo4P.js";import"./getRadiusAndStrokeWidthFromDot-BIO0J0B_.js";import"./ActiveShapeUtils-BCHVEK9a.js";import"./Curve-BqouQalk.js";import"./step-J3DdjOPx.js";import"./useEffectiveDataKey-DvT2OXI-.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
