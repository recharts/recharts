import{e as t}from"./iframe-BA-zV7_F.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-32LA6dK9.js";import{R as l}from"./arrayEqualityCheck-BqA822v0.js";import{C as x}from"./ComposedChart-DGaIMIIA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cch4cH_2.js";import{L as a}from"./Line-AsvZMwsR.js";import{X as A}from"./XAxis-DC7WjUX8.js";import{T as g}from"./Tooltip-BVl0tVaV.js";import{R as f}from"./RechartsHookInspector-D0XJS29G.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C3WTNiVK.js";import"./Layer-CfzD199M.js";import"./resolveDefaultProps-DAB-gcAU.js";import"./Text-reYRnfFB.js";import"./DOMUtils-DH-1IhDl.js";import"./Label-CHedA7kt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BBpTuRSZ.js";import"./zIndexSlice-CahP5Bvu.js";import"./immer-CQr9v0v0.js";import"./types-mhJjiQ_4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CICucQq1.js";import"./hooks-BhKgrcGm.js";import"./axisSelectors-C-c05xug.js";import"./d3-scale-DG9Ho5_0.js";import"./string-B6fdYHAA.js";import"./RechartsWrapper-mihAAWay.js";import"./index-B7YX6_DJ.js";import"./CartesianChart-BDebLbDY.js";import"./chartDataContext-CAEi_CMV.js";import"./CategoricalChart-C254V1pE.js";import"./tooltipContext-Cx-Qjrob.js";import"./AnimatedItems-Dh5-Zm6U.js";import"./useAnimationId-DojuRQal.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-fUtPyr_w.js";import"./isPlainObject-C-Ml-lWL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bu9DVT5n.js";import"./Trapezoid-Bk1aSQBG.js";import"./Sector-DJLTI9DR.js";import"./Symbols-D9ObUrus.js";import"./symbol-BIEGaDb4.js";import"./step-j_6aZTKG.js";import"./Curve-C9qfySG5.js";import"./RegisterGraphicalItemId-pJFOOmQA.js";import"./ErrorBarContext-CGvFvXH0.js";import"./GraphicalItemClipPath-Bm1jNNtI.js";import"./SetGraphicalItem-ebt92THW.js";import"./getZIndexFromUnknown-ixd4-wqn.js";import"./graphicalItemSelectors-DKq5kTda.js";import"./ActivePoints-hBuzQYc_.js";import"./Dot---bkTzjD.js";import"./getRadiusAndStrokeWidthFromDot-7IUVpSgw.js";import"./useElementOffset-ChyJXsRo.js";import"./uniqBy-CagLAZRG.js";import"./iteratee-DxFZgfS6.js";import"./Cross-BhWthZLE.js";import"./index-C9L2m6gr.js";import"./ChartSizeDimensions-C4osSvkZ.js";import"./OffsetShower-DaLST6nw.js";import"./PlotAreaShower-D2fXHUqq.js";const Tt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
