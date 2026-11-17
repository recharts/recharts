import{R as t}from"./iframe-DgA6x1az.js";import{R as p}from"./zIndexSlice-BFMaekmq.js";import{C as m}from"./ComposedChart-ByKzrUfc.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-acXJaVUK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-WkX6zUQT.js";import"./throttle-BeFzmqAe.js";import"./index-TMkZxmcU.js";import"./index-D3kvvSt0.js";import"./RechartsWrapper-DDZDydJY.js";import"./axisSelectors-BWYipoBl.js";import"./polarAxisSelectors-FlPJLKCl.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CFWCEDhR.js";import"./index-hmFEHNSs.js";import"./index-DfxP2LJH.js";import"./renderedTicksSlice-Cbzlud4G.js";import"./index-Bhp_Ctpy.js";import"./fillDefinitions-D7cR_ZXA.js";import"./CartesianChart-xScX7k_y.js";import"./chartDataContext-BQDV-mFo.js";import"./CategoricalChart-925-SQc0.js";import"./getRadiusAndStrokeWidthFromDot-9ffd66xL.js";import"./Layer-4UauM4-I.js";import"./dataEntryStyles-C5svgbWd.js";import"./Label-SeLMQAdg.js";import"./Text-5b15Y2Dk.js";import"./ZIndexLayer-CKzh_iFN.js";import"./ActivePoints-D6pOQsPw.js";import"./Dot-DDXn63wb.js";import"./types-BWKVAmkC.js";import"./activeStyles-CoM8kTSe.js";import"./useAnimationId-DOzFiRYM.js";import"./Symbols-DrLVelb5.js";import"./symbol-CCLUbilH.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-B9ymtMOj.js";import"./ActiveShapeUtils-CCImj5PR.js";import"./Curve-C1ngk-4z.js";import"./step-CeJDq7tp.js";import"./useEffectiveDataKey-B9lYa-g7.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
