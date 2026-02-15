import{e as t}from"./iframe-yr43iL0r.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-DMMOmwli.js";import{Y as r}from"./YAxis-mhKbt4Et.js";import{R as l}from"./arrayEqualityCheck-CCQ3u8Vd.js";import{C as x}from"./ComposedChart-1KeYqgHX.js";import{B as o}from"./Bar-DsVk3pnm.js";import{L as a}from"./Line-DPN0sTqh.js";import{X as c}from"./XAxis-CO6uFh57.js";import{T as A}from"./Tooltip-CyIF4bCF.js";import{R as g}from"./RechartsHookInspector-DBIDewuF.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dq1WM_rK.js";import"./CartesianAxis-DoAv_8BM.js";import"./Layer-CmzX8B_O.js";import"./Text-D8JJ6HaF.js";import"./DOMUtils-Dis7On6r.js";import"./Label-BXAwjjII.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cs9veiYj.js";import"./zIndexSlice-BFVNfIo_.js";import"./types-C8fXyDYe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C-Ibv-v0.js";import"./hooks-DV8SPP2s.js";import"./axisSelectors-CxU8esto.js";import"./RechartsWrapper-CBwzaw9q.js";import"./CartesianChart-XyvFTYw0.js";import"./chartDataContext-CzToVTlc.js";import"./CategoricalChart-NU99wwp5.js";import"./tooltipContext-CZrHOkRy.js";import"./ReactUtils-BmYUR6Pw.js";import"./ActiveShapeUtils-tkDZnXJM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-KnzijHvw.js";import"./useAnimationId-CevQg5hG.js";import"./Trapezoid-BsqiFDvD.js";import"./Sector-BWGZTQIf.js";import"./Symbols-DYDfKw0L.js";import"./Curve-BbMbMcrT.js";import"./RegisterGraphicalItemId-CyCvhas2.js";import"./ErrorBarContext-OMAqLqYv.js";import"./GraphicalItemClipPath-Cvcgdpb5.js";import"./SetGraphicalItem-BOYYMY6l.js";import"./getZIndexFromUnknown-CwGerQ8X.js";import"./graphicalItemSelectors-oY4HT1sB.js";import"./ActivePoints-C__HlfVm.js";import"./Dot-DO5eF7L8.js";import"./getRadiusAndStrokeWidthFromDot-DEWUqlIZ.js";import"./useElementOffset-DgYeCa-o.js";import"./iteratee-DUEQD3sA.js";import"./Cross-okrOoNo4.js";import"./index-BF6TeZpk.js";import"./ChartSizeDimensions-DVhO3wZZ.js";import"./OffsetShower-po89n_GW.js";import"./PlotAreaShower-uj30a7QU.js";const It={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Et=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Et as __namedExportsOrder,It as default};
