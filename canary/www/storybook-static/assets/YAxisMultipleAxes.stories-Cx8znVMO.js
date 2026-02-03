import{e as t}from"./iframe-BP2nTpch.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-Sk_2BRIW.js";import{Y as r}from"./YAxis-nqLFZHiU.js";import{R as l}from"./arrayEqualityCheck-uIVE1gVz.js";import{C as x}from"./ComposedChart-DZabq8it.js";import{B as o}from"./Bar-CSF2moCU.js";import{L as a}from"./Line-DWbyZqWl.js";import{X as c}from"./XAxis-CXtp3tfD.js";import{T as A}from"./Tooltip-WOVTHsaw.js";import{R as g}from"./RechartsHookInspector-DAq4QekR.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-pblYALGE.js";import"./CartesianAxis-Dig3Hc3j.js";import"./Layer-2wKCZbds.js";import"./Text-DczL9Pqa.js";import"./DOMUtils-LYwP3kAp.js";import"./Label-CpYvd4nZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-571M2aB4.js";import"./zIndexSlice-4Wz4F4SZ.js";import"./types-7mx8q_Dg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-C4-fdNyt.js";import"./axisSelectors-D2SDnJRJ.js";import"./RechartsWrapper-B99qXj5r.js";import"./CartesianChart-FpzVruv-.js";import"./chartDataContext-ijRrdm1r.js";import"./CategoricalChart-Dwlif2jD.js";import"./tooltipContext-DFZzgyhw.js";import"./ReactUtils-8y56L2KY.js";import"./ActiveShapeUtils-CDlOYSnz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-OJy3hMDx.js";import"./useAnimationId-BKvpnK5Z.js";import"./Trapezoid-n9rYv4uE.js";import"./Sector-iFxFptm9.js";import"./Symbols-99I1PudQ.js";import"./Curve-DDVqNpBq.js";import"./RegisterGraphicalItemId-BxTYuwSX.js";import"./ErrorBarContext-NtZ5hNP2.js";import"./GraphicalItemClipPath-CFJzNYVk.js";import"./SetGraphicalItem-Cd_T2Vk8.js";import"./getZIndexFromUnknown-B5ANAz8u.js";import"./graphicalItemSelectors-qK5kZ5lZ.js";import"./ActivePoints-wLrf3G7J.js";import"./Dot-UJc7CKGe.js";import"./getRadiusAndStrokeWidthFromDot-CWkvHCAb.js";import"./useElementOffset-BA3_qNb-.js";import"./iteratee-oCzkJu6y.js";import"./Cross-BYyTd8EV.js";import"./index-B3FDMrYE.js";import"./ChartSizeDimensions-Dleof4F0.js";import"./OffsetShower-DpRHCxQ6.js";import"./PlotAreaShower-DWs7AY7M.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
