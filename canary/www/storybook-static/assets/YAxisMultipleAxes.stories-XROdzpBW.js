import{e as t}from"./iframe-CJsZiOdQ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-Sk_2BRIW.js";import{Y as r}from"./YAxis-CY7M7u2R.js";import{R as l}from"./arrayEqualityCheck-DmoSYxVB.js";import{C as x}from"./ComposedChart-BnSciooP.js";import{B as o}from"./Bar-C9cCgorD.js";import{L as a}from"./Line-BNl370Ap.js";import{X as c}from"./XAxis-8z1ahuYp.js";import{T as A}from"./Tooltip-Bg6-faOR.js";import{R as g}from"./RechartsHookInspector-Cp7SH18f.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BsN_5Oop.js";import"./CartesianAxis-Bxrejv1n.js";import"./Layer-saDXbA70.js";import"./Text-B5Zl5I22.js";import"./DOMUtils-xNMyZWBQ.js";import"./Label-B5dudWmS.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-B2Kkx2Li.js";import"./zIndexSlice-DOwFRgwN.js";import"./types--3K6j7TR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-rVLXmLp9.js";import"./axisSelectors-CRJt1Qbh.js";import"./RechartsWrapper-C6hoNl5r.js";import"./CartesianChart-_elP97Nq.js";import"./chartDataContext-D1i6v4HN.js";import"./CategoricalChart-FSCxQE7m.js";import"./tooltipContext-DplqhePf.js";import"./ReactUtils-B6les9Ok.js";import"./ActiveShapeUtils-DoWMc9rU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DIx0VdbO.js";import"./useAnimationId-992q7OPb.js";import"./Trapezoid-C7AD2RUx.js";import"./Sector-CNxjvECL.js";import"./Symbols-DzvLu2sy.js";import"./Curve-5kCuP2Ri.js";import"./RegisterGraphicalItemId-B2S5SyCV.js";import"./ErrorBarContext-BSMEYapQ.js";import"./GraphicalItemClipPath-CTITSRsG.js";import"./SetGraphicalItem-wLUZTpUq.js";import"./getZIndexFromUnknown-BKfcBf_2.js";import"./graphicalItemSelectors-Bd1Nknsx.js";import"./ActivePoints-s1VLO5u4.js";import"./Dot-C-IcEIkw.js";import"./getRadiusAndStrokeWidthFromDot-B69isiT9.js";import"./useElementOffset-ByOgFwSC.js";import"./iteratee-BR97XEbH.js";import"./Cross-BvSndK2L.js";import"./index-B5U_62lg.js";import"./ChartSizeDimensions-Cywz4jFM.js";import"./OffsetShower-qPlPbWlS.js";import"./PlotAreaShower-e-2A-3GR.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
