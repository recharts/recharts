import{R as t}from"./iframe-DtzldFfh.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CQZ6A0GW.js";import{R as l}from"./zIndexSlice-PhkkSvay.js";import{C as x}from"./ComposedChart-C0Pw1zvu.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CscaL18R.js";import{L as a}from"./Line-BvNBRL71.js";import{X as c}from"./XAxis-BY5CXCjh.js";import{T as g}from"./Tooltip-CXQtUWKg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DAuHelmL.js";import"./Text-BCSLlBnR.js";import"./resolveDefaultProps-u2nTClVy.js";import"./ZIndexLayer-BWdFNyrE.js";import"./index-CCZfAL_G.js";import"./index-CuN-tN9X.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-IPVOZM3m.js";import"./throttle-Drk_UoQx.js";import"./axisSelectors-C2izPxUf.js";import"./d3-scale-BmMEJmfI.js";import"./CartesianAxis-DxmrFkoo.js";import"./Layer-BcJtH6wk.js";import"./types-aakKZZv0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DbXdst8y.js";import"./index-xLc8fata.js";import"./index-6_OYP7D7.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-RpB-MHrg.js";import"./index-OfVoCx4o.js";import"./fillDefinitions-4fWzE3Hc.js";import"./CartesianChart-D8rXmJzw.js";import"./chartDataContext-BNrACUYr.js";import"./CategoricalChart-Bkw2UtyY.js";import"./dataEntryStyles-kT4_La43.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-sBf3lxLL.js";import"./useAnimationId-Dzlg4g7S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-lUUDRG4C.js";import"./tooltipContext-uJRo-_HY.js";import"./ErrorBarContext-CFgTAQbG.js";import"./activeStyles-BesdgLFE.js";import"./SetGraphicalItem-31k7kJYq.js";import"./getZIndexFromUnknown-CIvTotf4.js";import"./useEffectiveDataKey-BP-D5MQu.js";import"./omit-B1g3ijZ2.js";import"./isArguments-yB-y1yaH.js";import"./Curve-xzGpqU4W.js";import"./step-Dbgt0c4J.js";import"./path-DyVhHtw_.js";import"./ActivePoints-klnIqfJn.js";import"./Dot-DiyqsLJ3.js";import"./Symbols-CvrtYxxZ.js";import"./symbol-D-v3LMsn.js";import"./getRadiusAndStrokeWidthFromDot-CtzQdQd8.js";import"./useElementOffset-0o51WQzY.js";import"./uniqBy-DSURNKI0.js";import"./iteratee-BoqSWeEv.js";import"./Cross-D_bufb52.js";import"./Sector-CK9Jq0GA.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
