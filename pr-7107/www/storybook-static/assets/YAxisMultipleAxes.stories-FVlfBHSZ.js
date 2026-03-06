import{e as t}from"./iframe-aCccIK8W.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-DESrMeXh.js";import{R as l}from"./arrayEqualityCheck-ClrrSpKq.js";import{C as x}from"./ComposedChart-BI19kJGr.js";import{B as o}from"./Bar-woK3I8Eb.js";import{L as a}from"./Line-C_rjhjlW.js";import{X as c}from"./XAxis-DiB5K0gp.js";import{T as A}from"./Tooltip-BiqMomjH.js";import{R as g}from"./RechartsHookInspector-DXULShHw.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DWcQuKap.js";import"./Layer-CmBSmthE.js";import"./resolveDefaultProps-BiMbCPR1.js";import"./Text-CNK9ky3H.js";import"./DOMUtils-6k1qM2nD.js";import"./Label-BjurlKVT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B0CgEJFf.js";import"./zIndexSlice-dI_hsE6E.js";import"./immer-CMSDbRto.js";import"./types-BigTFNah.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C5CpkahC.js";import"./hooks-BQl6gm9P.js";import"./axisSelectors-BqKDnBGl.js";import"./d3-scale-CSKaLMYw.js";import"./RechartsWrapper-KXQQ6Aed.js";import"./index-7BGALgNU.js";import"./CartesianChart-Dg_vwzFX.js";import"./chartDataContext-DcZ4BnGt.js";import"./CategoricalChart-43yq3nHJ.js";import"./tooltipContext-CdIqGXcF.js";import"./ReactUtils-DHbtMuek.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DCYjk_1o.js";import"./isPlainObject-DUQm3b0H.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bexr03gH.js";import"./useAnimationId-DA5IV2DG.js";import"./Trapezoid-XFMgvjFP.js";import"./Sector-v0Uu-y4P.js";import"./Symbols-BntmdNmA.js";import"./symbol-CMsEkqSO.js";import"./step-DZfgQXrh.js";import"./Curve-BLf6fQkp.js";import"./RegisterGraphicalItemId-taqDOdbV.js";import"./ErrorBarContext-BYQ7VTEV.js";import"./GraphicalItemClipPath-DFzOqGMg.js";import"./SetGraphicalItem-C9DhQ9yz.js";import"./getZIndexFromUnknown-BNgycAnv.js";import"./graphicalItemSelectors-DfsXJl_5.js";import"./ActivePoints-CPXBnAoH.js";import"./Dot-DtYrWfLR.js";import"./getRadiusAndStrokeWidthFromDot-BvcMpZcb.js";import"./useElementOffset-BcVyS5Gh.js";import"./uniqBy-BmKwTMCS.js";import"./iteratee-BCXX7LqW.js";import"./Cross-UEGwbcTO.js";import"./index-B0bVpeoD.js";import"./ChartSizeDimensions-6pSaZa--.js";import"./OffsetShower-zTVqoSRT.js";import"./PlotAreaShower-DtT8gIxN.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
