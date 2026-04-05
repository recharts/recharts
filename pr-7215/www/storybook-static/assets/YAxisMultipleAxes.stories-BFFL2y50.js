import{e as t}from"./iframe-BzU5tZG5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-l0f4JbWK.js";import{R as l}from"./arrayEqualityCheck-BsfMiBB8.js";import{C as x}from"./ComposedChart-BoR_lsyS.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CkmoE7uV.js";import{L as a}from"./Line-Ct73r5ic.js";import{X as A}from"./XAxis-B-W2dzi3.js";import{T as g}from"./Tooltip-CkKhvLwf.js";import{R as f}from"./RechartsHookInspector-DCXeAgKX.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis--HQls11E.js";import"./Layer-BoRDeEOm.js";import"./resolveDefaultProps-DmGz1ogE.js";import"./Text-CmxtkjMm.js";import"./DOMUtils-Bnb5Olzx.js";import"./Label-hToV_gRB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-x07EvPLC.js";import"./zIndexSlice-Bd6-3QTP.js";import"./immer-C0fwLmkH.js";import"./types-BbKBmvI2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-HvaIjOyz.js";import"./hooks-BZ9lkAel.js";import"./axisSelectors-Cxfo6rVo.js";import"./d3-scale-DcKEztNx.js";import"./string-B6fdYHAA.js";import"./RechartsWrapper-BbxErU3E.js";import"./index-De8EN-cC.js";import"./CartesianChart-BVGWETT1.js";import"./chartDataContext-DW4aeEtj.js";import"./CategoricalChart-FYUpa-sB.js";import"./tooltipContext-hFbAm8Gs.js";import"./AnimatedItems-DpJzQnXc.js";import"./useAnimationId-D2sjwezL.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DAfXePCg.js";import"./isPlainObject-DeEpFnEl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dql0fF0Y.js";import"./Trapezoid-Du0ZEVwP.js";import"./Sector-CPh9calM.js";import"./Symbols-BOk-75a6.js";import"./symbol-CgkrJkl1.js";import"./step-fSDMrmBj.js";import"./Curve-DQMyibMX.js";import"./RegisterGraphicalItemId-B44_OcBQ.js";import"./ErrorBarContext-B_54DcZB.js";import"./GraphicalItemClipPath-CjoeLGJT.js";import"./SetGraphicalItem-D8FHaqBq.js";import"./getZIndexFromUnknown-vIrbzYdS.js";import"./graphicalItemSelectors-D7AZwwu7.js";import"./ActivePoints-OqIedk1P.js";import"./Dot-DzV-VpNB.js";import"./getRadiusAndStrokeWidthFromDot-D38YSDE-.js";import"./useElementOffset-B9cyi7EM.js";import"./uniqBy-Ck23Gndn.js";import"./iteratee-CmTECnc1.js";import"./Cross-yJz91fpS.js";import"./index-BxJbg6c2.js";import"./ChartSizeDimensions-CVqRiDUJ.js";import"./OffsetShower-0OLqDfEA.js";import"./PlotAreaShower-C8OLz8bs.js";const Tt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Wt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
