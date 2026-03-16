import{e as t}from"./iframe-BuJLGa6N.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-BN83cofH.js";import{R as l}from"./arrayEqualityCheck-CfOAsDPD.js";import{C as x}from"./ComposedChart-BqBphd5X.js";import{B as o}from"./Bar-D1AD2tu-.js";import{L as a}from"./Line-DDBsSeKz.js";import{X as c}from"./XAxis-DPYriBmx.js";import{T as A}from"./Tooltip-BP0M5Jmr.js";import{R as g}from"./RechartsHookInspector-BakXEIZz.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C6pdCV3P.js";import"./Layer-CLRnIkGN.js";import"./resolveDefaultProps-PPT4dvVD.js";import"./Text-OPrfWidj.js";import"./DOMUtils-DdVykUsy.js";import"./Label-DCa5EEbs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMsw-0Pa.js";import"./zIndexSlice-CtkE_I8o.js";import"./immer-Cs2StgEe.js";import"./types-DMmD0s4W.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DMmH3DTh.js";import"./hooks-Bfg6Hj5B.js";import"./axisSelectors-vZNfkK00.js";import"./d3-scale-C2CClwD1.js";import"./RechartsWrapper-zGeEQO-1.js";import"./index-CNZpMZb7.js";import"./CartesianChart-DcpXVgwl.js";import"./chartDataContext-DXuqrhw-.js";import"./CategoricalChart-DkSrZf16.js";import"./tooltipContext-BgPX6D-1.js";import"./ReactUtils-Di8J4KTy.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CXfOhm2i.js";import"./isPlainObject-Crq8bwtR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cp8-G3K2.js";import"./useAnimationId-CMTxjP3y.js";import"./Trapezoid-3-ecroEI.js";import"./Sector-CuxgId53.js";import"./Symbols-BJaoORbT.js";import"./symbol-SMqn5J9_.js";import"./step-8Y20vsos.js";import"./Curve-D9cP6KBy.js";import"./RegisterGraphicalItemId-CZEhY4ID.js";import"./ErrorBarContext-DcDtiioO.js";import"./GraphicalItemClipPath-D_CU0iam.js";import"./SetGraphicalItem-DGBCZizG.js";import"./getZIndexFromUnknown-2LUAOro_.js";import"./graphicalItemSelectors-r1KAVYNM.js";import"./ActivePoints-Czt_wSo-.js";import"./Dot-B4FiKnl2.js";import"./getRadiusAndStrokeWidthFromDot-DYi0rXYC.js";import"./useElementOffset-BrFb8VVi.js";import"./uniqBy-iRT60m2x.js";import"./iteratee-BDAL2q7w.js";import"./Cross-C-tDAxe1.js";import"./index-Bq1Ak5OA.js";import"./ChartSizeDimensions-DBM4r-MV.js";import"./OffsetShower-9LIODqLQ.js";import"./PlotAreaShower-BBiCyrXZ.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
