import{e as t}from"./iframe-CGVhrCsk.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-E6ZISSH3.js";import{Y as r}from"./YAxis-pDp602YX.js";import{R as l}from"./arrayEqualityCheck-hWfBO-dZ.js";import{C as x}from"./ComposedChart-Cs4bNDUq.js";import{B as o}from"./Bar-CEsP4oMW.js";import{L as a}from"./Line-BDkuDWC1.js";import{X as c}from"./XAxis-CU7mfsQ-.js";import{T as A}from"./Tooltip-BZRXTx-W.js";import{R as g}from"./RechartsHookInspector-W4SpTwNb.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DzeHRsGq.js";import"./Layer-DI3r5k9z.js";import"./resolveDefaultProps-CwNF5fMy.js";import"./Text-DbvmJCeH.js";import"./DOMUtils-5Zd9MXZO.js";import"./Label-Ca0FMlUU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BlFiVhV6.js";import"./zIndexSlice-DutzqnKh.js";import"./immer-ByckOGb7.js";import"./types-CutyoUQf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DmMczr5P.js";import"./hooks-mLbHXbPh.js";import"./axisSelectors-CrTWvSV9.js";import"./d3-scale-D5vl0Nsi.js";import"./RechartsWrapper-DgM4xUF4.js";import"./index-CEIii_b2.js";import"./CartesianChart-B1c-3hUF.js";import"./chartDataContext-DQaWG2U3.js";import"./CategoricalChart-X3-XrJiY.js";import"./tooltipContext-dZuY-BFu.js";import"./ReactUtils-CZtHcLE8.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DEu4pVNL.js";import"./isPlainObject-BSA6Caji.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CL9KViSo.js";import"./useAnimationId-bFrgCHGo.js";import"./Trapezoid-C1cOue80.js";import"./Sector-8CmLtbdM.js";import"./Symbols-DsXXK2gD.js";import"./symbol-Dw_xitWX.js";import"./step-p7MifGWd.js";import"./Curve-DdraDXui.js";import"./RegisterGraphicalItemId-D2-m4nk3.js";import"./ErrorBarContext-BGDc3EIW.js";import"./GraphicalItemClipPath-D7PtxHvG.js";import"./SetGraphicalItem-BqAzYXKd.js";import"./getZIndexFromUnknown-BCBfMeyE.js";import"./graphicalItemSelectors-CBuEl457.js";import"./ActivePoints-DCd-acaj.js";import"./Dot-Dwb1H9wZ.js";import"./getRadiusAndStrokeWidthFromDot-EoCljdHa.js";import"./useElementOffset--pKlwBer.js";import"./uniqBy-BhkSAKgM.js";import"./iteratee-DIIFvXI9.js";import"./Cross-DPS2xDL2.js";import"./index-CQT87Gjl.js";import"./ChartSizeDimensions-CJ3vtll8.js";import"./OffsetShower-56TqmRW6.js";import"./PlotAreaShower-CzLMiHXt.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
