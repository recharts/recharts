import{R as t}from"./iframe-DbrRN1n8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DXpw8vqJ.js";import{R as l}from"./zIndexSlice-Du0Au1R-.js";import{C as x}from"./ComposedChart-BwB9uQDU.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BOPgu8U0.js";import{L as a}from"./Line-C6WqqYHN.js";import{X as c}from"./XAxis-D4Dr_tjl.js";import{T as g}from"./Tooltip-C7nLXyTl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-A7WyPB0I.js";import"./Text-WfDu__TP.js";import"./resolveDefaultProps-Ds4rGbhG.js";import"./pageBackground-CkPB-Imo.js";import"./ZIndexLayer-DdjxUpLS.js";import"./index-CogSL5JJ.js";import"./index-D6EAQOZI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D77BuFKC.js";import"./throttle-DUdTYHJ7.js";import"./axisSelectors-DK6uFkxV.js";import"./d3-scale-DUENC00q.js";import"./CartesianAxis-BCK1OBBy.js";import"./Layer-Do_lw1Xj.js";import"./types-DkNvVUMM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-mzEE9LM4.js";import"./index-M4gkvM-3.js";import"./index-xhc0FShP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DlyIgJor.js";import"./index-B5hYk0_Q.js";import"./CartesianChart-CDlGam4t.js";import"./ZIndexPortal-CvbthdtM.js";import"./CategoricalChart-DVK-Whre.js";import"./LabelList-BgsnBCM1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-3NP_NJyH.js";import"./useAnimationId-CvK-4pcw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DUWP9jsa.js";import"./tooltipContext-DOKPheir.js";import"./dataEntryStyles-CKR3qDl0.js";import"./ErrorBarContext-Bfmn5FWH.js";import"./activeStyles-BV7TfXze.js";import"./SetGraphicalItem-D97kyhFi.js";import"./getZIndexFromUnknown-DGJ3xvMK.js";import"./useEffectiveDataKey-ChFOzgVO.js";import"./omit-Dvz-UHEk.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CoHdM9Ch.js";import"./step-I4MYWlIC.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BRaVZy1t.js";import"./Dot-CwOWQR4j.js";import"./Symbols-CnZ9lVP1.js";import"./symbol-mpAZtHsQ.js";import"./getRadiusAndStrokeWidthFromDot-GpKWvG3K.js";import"./useElementOffset-CTE_e8_t.js";import"./uniqBy-KNYEdHaO.js";import"./iteratee-Dv9in7l7.js";import"./Cross-DFNkfyvS.js";import"./Sector-qqHQzkjF.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
