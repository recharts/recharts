import{e as t}from"./iframe-DujSE0UK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-DGH9UPdi.js";import{R as l}from"./arrayEqualityCheck-D8VjMjvf.js";import{C as x}from"./ComposedChart-DcASGjDc.js";import{B as o}from"./Bar-dwixR8Bq.js";import{L as a}from"./Line-D-gcbtsu.js";import{X as c}from"./XAxis-YY1xwgnu.js";import{T as A}from"./Tooltip-ZKuMVIqS.js";import{R as g}from"./RechartsHookInspector-CRMB31G9.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DVd0f2kI.js";import"./Layer-B-nUYb5l.js";import"./resolveDefaultProps-C48txAh5.js";import"./Text-qQLvw26P.js";import"./DOMUtils-CiKk1OJG.js";import"./Label-D6PynPvp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-sSQKP7NE.js";import"./zIndexSlice-DxmTVpDq.js";import"./immer-DoffRpuJ.js";import"./types-D6xVUDWG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-qOFace14.js";import"./hooks-BfEZyruk.js";import"./axisSelectors-CplbQtmA.js";import"./d3-scale-DAOxFYCv.js";import"./RechartsWrapper-CZxyCKqo.js";import"./index-BzWEaTVN.js";import"./CartesianChart-C8FLn_u-.js";import"./chartDataContext-C-qHRTgP.js";import"./CategoricalChart-H-u-kan4.js";import"./tooltipContext-DMW6mWzr.js";import"./ReactUtils-CJKtjJwj.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CfdmikBA.js";import"./isPlainObject-PvV2F2dX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-SsDZNd-D.js";import"./useAnimationId-DcYOTGVs.js";import"./Trapezoid-C4tWIuQV.js";import"./Sector-FLQA7LtL.js";import"./Symbols-nyT1XPVO.js";import"./symbol-CaRsNxSw.js";import"./step-BqfvS8lo.js";import"./Curve-BIsIHsFZ.js";import"./RegisterGraphicalItemId-CBH-yQFt.js";import"./ErrorBarContext-D8NP2kg_.js";import"./GraphicalItemClipPath-SL3od_yD.js";import"./SetGraphicalItem-BsRnOhvR.js";import"./getZIndexFromUnknown-Cbr6eMfh.js";import"./graphicalItemSelectors-DgRwhpMi.js";import"./ActivePoints-BzgKbyfb.js";import"./Dot-Bc7S1y82.js";import"./getRadiusAndStrokeWidthFromDot-BIQm3Qe0.js";import"./useElementOffset-BLNKdpxK.js";import"./uniqBy-3iDuyky4.js";import"./iteratee-BYf5_rS8.js";import"./Cross-BrrDcBeB.js";import"./index-B_iM8tEy.js";import"./ChartSizeDimensions-DEiQIg5P.js";import"./OffsetShower-CF4VV-Vy.js";import"./PlotAreaShower-CLUz5lpa.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
