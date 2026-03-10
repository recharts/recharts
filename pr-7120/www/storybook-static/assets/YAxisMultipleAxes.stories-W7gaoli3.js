import{e as t}from"./iframe-DHjTBwa0.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-CHgoMFSJ.js";import{R as l}from"./arrayEqualityCheck-CGXWmECa.js";import{C as x}from"./ComposedChart-CoHd_5kA.js";import{B as o}from"./Bar-DQnJWcO9.js";import{L as a}from"./Line-CcCWzQUu.js";import{X as c}from"./XAxis-DzpQW1k6.js";import{T as A}from"./Tooltip-CFb1u5nY.js";import{R as g}from"./RechartsHookInspector-D6nhtH8K.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D9ZJukHE.js";import"./Layer-CoFjoalk.js";import"./resolveDefaultProps-DXy8j8LY.js";import"./Text-BWLl8TIe.js";import"./DOMUtils-DL_tkNCI.js";import"./Label-DMGH-XEw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CWpbiknC.js";import"./zIndexSlice-DqtSbfBR.js";import"./immer-BrXT1eSW.js";import"./types-B-PC6Emj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DkHSSwGo.js";import"./hooks-BI4eFA2i.js";import"./axisSelectors-DhPURh7h.js";import"./d3-scale-BUA-RFqD.js";import"./RechartsWrapper-DyX2fUcK.js";import"./index-BPCnijYz.js";import"./CartesianChart-Dm1WBf-W.js";import"./chartDataContext-j2R-tyUk.js";import"./CategoricalChart-ByXlXeCM.js";import"./tooltipContext-C8KY5Efg.js";import"./ReactUtils-DXoYQqwM.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-9h77ymCT.js";import"./isPlainObject-DLGkOX2v.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dj02ipMQ.js";import"./useAnimationId-C2i6VIVJ.js";import"./Trapezoid-DxOEh9VV.js";import"./Sector-CIZ18yvj.js";import"./Symbols-CnglQ83s.js";import"./symbol-LmxUlDu5.js";import"./step-C25GYkrO.js";import"./Curve-DPzG6TNm.js";import"./RegisterGraphicalItemId-DKDKYGnd.js";import"./ErrorBarContext-By3ClU9F.js";import"./GraphicalItemClipPath-CGzigbYh.js";import"./SetGraphicalItem-XHeepBo6.js";import"./getZIndexFromUnknown-BvtEXJQE.js";import"./graphicalItemSelectors-D_K7F2ot.js";import"./ActivePoints-Blqf8jQG.js";import"./Dot-BsheDtZT.js";import"./getRadiusAndStrokeWidthFromDot-GPi5Uiju.js";import"./useElementOffset-DvcdPDwX.js";import"./uniqBy-D8yyZ5is.js";import"./iteratee-D4JFKxme.js";import"./Cross-BJreZDFL.js";import"./index-CGH8qd9t.js";import"./ChartSizeDimensions-xCJQuae6.js";import"./OffsetShower-DuOTKuKX.js";import"./PlotAreaShower-H4JN1u5I.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
