import{e as t}from"./iframe-BRxwlzhD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CnCAr5FI.js";import{R as l}from"./arrayEqualityCheck-CQCuJwd9.js";import{C as x}from"./ComposedChart-C4oxbzZd.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-fXfyQiPe.js";import{L as a}from"./Line-1L_TT1FV.js";import{X as A}from"./XAxis-Dh51v0ko.js";import{T as g}from"./Tooltip-_6ZtHZzi.js";import{R as f}from"./RechartsHookInspector-B_B-yc0r.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-B1fxs7Xq.js";import"./Layer-BVhxWlBa.js";import"./resolveDefaultProps-CynxUrzr.js";import"./Text-lrriYnC0.js";import"./DOMUtils-Dl_fPRop.js";import"./Label-BA79Nyf7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-S9493XiC.js";import"./zIndexSlice-1DtIfeN0.js";import"./immer-Cx9cWUVd.js";import"./types-CSb1fpov.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CaDUjXCY.js";import"./hooks-fHD2lOQN.js";import"./axisSelectors-D3m0qTvR.js";import"./d3-scale-Bx12rmbF.js";import"./RechartsWrapper-BxIOqnbY.js";import"./index-DRLqonpR.js";import"./CartesianChart-DCUx-fIz.js";import"./chartDataContext-DyuUFUXu.js";import"./CategoricalChart-C7nGcUHo.js";import"./tooltipContext-DDSY3pJ7.js";import"./ReactUtils-B9lhcmHi.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-D4OjEAgF.js";import"./isPlainObject-BY5Vlzsd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B51QCHw4.js";import"./useAnimationId-BIq3Zr7i.js";import"./Trapezoid-LOBSkskr.js";import"./Sector-lTYUfjnl.js";import"./Symbols-Cg1rHhLz.js";import"./symbol-DhbO_5Le.js";import"./step-DIees0vo.js";import"./Curve-CgFRM1Qr.js";import"./RegisterGraphicalItemId-C8eWu06V.js";import"./ErrorBarContext-D6ju5024.js";import"./GraphicalItemClipPath-mwssqMPM.js";import"./SetGraphicalItem-DUVzJXp_.js";import"./getZIndexFromUnknown-gwhnqJev.js";import"./graphicalItemSelectors-jpCGMroj.js";import"./ActivePoints-Cs5vmxH5.js";import"./Dot-Dqr59ASu.js";import"./getRadiusAndStrokeWidthFromDot-D4qF164R.js";import"./useElementOffset-DZ0xnJbD.js";import"./uniqBy-DBDVCLff.js";import"./iteratee-DSZa7zM1.js";import"./Cross-BkG-tf_Y.js";import"./index-U7yqHMm0.js";import"./ChartSizeDimensions-VvfCpTvE.js";import"./OffsetShower-CdhB882n.js";import"./PlotAreaShower-DOh-p-fE.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
