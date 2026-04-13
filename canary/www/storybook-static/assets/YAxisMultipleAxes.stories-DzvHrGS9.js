import{e as t}from"./iframe-Br4eYoVn.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-WZOcc484.js";import{R as l}from"./arrayEqualityCheck-BTssjmx8.js";import{C as x}from"./ComposedChart-DO9Baogr.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DJM807fU.js";import{L as a}from"./Line-CjfZ9drr.js";import{X as A}from"./XAxis-C8A1sscS.js";import{T as g}from"./Tooltip-C7klFK4K.js";import{R as f}from"./RechartsHookInspector-CJ4a_N61.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DnfdLPHJ.js";import"./Layer-BXiy0Hpp.js";import"./resolveDefaultProps-d8J7CQ2o.js";import"./Text-DSxsG7eI.js";import"./DOMUtils-CbhnCx5H.js";import"./Label-CUHpuvtr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BkFJTbU_.js";import"./zIndexSlice-C3EiH9DM.js";import"./immer-DPmqhqsD.js";import"./types-Bdr3PbTc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Tssq-3bV.js";import"./hooks-qMCGdphr.js";import"./axisSelectors-CHWOzT-A.js";import"./d3-scale-CCjKFVY6.js";import"./RechartsWrapper-BAtpNlJG.js";import"./index-q-WvHn66.js";import"./CartesianChart-Cr6moti0.js";import"./chartDataContext-DmHyrOc9.js";import"./CategoricalChart-RTBYP3g_.js";import"./tooltipContext-cjDug_hT.js";import"./ReactUtils-Dn-n-3Yl.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-C1KBE52j.js";import"./isPlainObject-Dnct6C6Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnOsz_oj.js";import"./useAnimationId-7Mhr-lzJ.js";import"./Trapezoid-CWbkVsvx.js";import"./Sector-DL1xggZ9.js";import"./Symbols-DmFirhkx.js";import"./symbol-NUJ48OEk.js";import"./step-DYF_aI-7.js";import"./Curve-C9oEn5cY.js";import"./RegisterGraphicalItemId-DFun1y8y.js";import"./ErrorBarContext-B31x6VGT.js";import"./GraphicalItemClipPath-Szud5QX3.js";import"./SetGraphicalItem-Bcsb28JH.js";import"./getZIndexFromUnknown-D8Wk6pHV.js";import"./graphicalItemSelectors-BFuwCmEQ.js";import"./ActivePoints-BJ31ITZc.js";import"./Dot-ec03_cyV.js";import"./getRadiusAndStrokeWidthFromDot-DtONMN5t.js";import"./useElementOffset-BqlbwxZo.js";import"./uniqBy-ByNeAQ4B.js";import"./iteratee-B-3U5ZDw.js";import"./Cross-8Y80D0dQ.js";import"./index-B-JygPoA.js";import"./ChartSizeDimensions-DeYSdXrS.js";import"./OffsetShower-B3belhb8.js";import"./PlotAreaShower-DSu4MaQt.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
