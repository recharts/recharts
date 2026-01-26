import{e as t}from"./iframe-PyjOQzGK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CNrfi_Sb.js";import{Y as r}from"./YAxis-B6zPQ9mM.js";import{R as l}from"./arrayEqualityCheck-_dHyT-RZ.js";import{C as x}from"./ComposedChart-BVUASlqQ.js";import{B as o}from"./Bar-xgJOySSm.js";import{L as a}from"./Line-DIlKf69S.js";import{X as c}from"./XAxis-P49Iul1Y.js";import{T as A}from"./Tooltip-DFUZibXb.js";import{R as g}from"./RechartsHookInspector-D26E9kzM.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-uwFRJaRu.js";import"./CartesianAxis-DYXf8O7N.js";import"./Layer-CHnOmiRY.js";import"./Text-BMHdefpA.js";import"./DOMUtils-InBL681b.js";import"./Label-CvwrqBXQ.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-DUzVAEAH.js";import"./zIndexSlice-B8KtXzX9.js";import"./types-UMLEboQ_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-Lbs_q-DW.js";import"./axisSelectors-BsdiAjZp.js";import"./RechartsWrapper-C_qiBOfF.js";import"./CartesianChart-DdiktEiW.js";import"./chartDataContext--xq0wDov.js";import"./CategoricalChart-CggXLcLb.js";import"./tooltipContext-D-hTrTbJ.js";import"./ReactUtils-ChAGskY_.js";import"./ActiveShapeUtils-ChuhRPpg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJG4_O5K.js";import"./useAnimationId-DVpAz_Js.js";import"./Trapezoid-DucQEHEf.js";import"./Sector-hPc79hJa.js";import"./Symbols-Jat4kELE.js";import"./Curve-BookXfP4.js";import"./RegisterGraphicalItemId-BTJ5pHFA.js";import"./ErrorBarContext-D5I_WxoZ.js";import"./GraphicalItemClipPath-Dnx8SYU_.js";import"./SetGraphicalItem-CfBIbOKf.js";import"./getZIndexFromUnknown-C55m1d9I.js";import"./graphicalItemSelectors-BvzVMp8r.js";import"./ActivePoints-D6OmLLQF.js";import"./Dot-tggScJ5V.js";import"./getRadiusAndStrokeWidthFromDot-BrIH8QFd.js";import"./useElementOffset-CYUbJaFG.js";import"./iteratee-ClTcsDgX.js";import"./Cross-DQDWiPaF.js";import"./index-uJDoNHNu.js";import"./ChartSizeDimensions-BahwbRey.js";import"./OffsetShower-C2jS-DP9.js";import"./PlotAreaShower-CwTougAK.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
              <RechartsHookInspector />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
