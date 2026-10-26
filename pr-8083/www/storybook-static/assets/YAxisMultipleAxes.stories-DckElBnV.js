import{R as t}from"./iframe-xm0njxpX.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-NECyBpPr.js";import{R as l}from"./zIndexSlice-BXJXmFQu.js";import{C as x}from"./ComposedChart-CTFFybCq.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-HGS41inY.js";import{L as a}from"./Line-8E3Vc0X3.js";import{X as c}from"./XAxis-BO1QGjPl.js";import{T as g}from"./Tooltip-BCFHrh-n.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-S9WiqPCG.js";import"./Text-B0-TExiI.js";import"./resolveDefaultProps-B61AogRi.js";import"./pageBackground-DWSrNR00.js";import"./useId-BgEUuOn0.js";import"./ZIndexLayer-DyZHr2FP.js";import"./index-sPTpvkxI.js";import"./index-BJuRFged.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DQe6GYeu.js";import"./throttle-CQYnjh9B.js";import"./dataEntryStyles-6HljWj9B.js";import"./axisSelectors-CvRpVDMX.js";import"./d3-scale-DRKVpWRJ.js";import"./CartesianAxis-C-JfYURt.js";import"./Layer-BK3cybNP.js";import"./types-dJ8tHIrH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BXAMy43b.js";import"./index--0VHY1xY.js";import"./index-A2yfNmgu.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B8IVe3Ss.js";import"./index-BwWTg3c5.js";import"./CartesianChart-BJCMshR7.js";import"./chartDataContext-Dzgvzmie.js";import"./CategoricalChart-CF01fl7y.js";import"./activeStyles-DbHXCiJk.js";import"./useAnimationId-CEkjnsp2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-y41hMVV_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BgjHc8Mn.js";import"./tooltipContext-jY8SRIcz.js";import"./RegisterGraphicalItemId-CvVXplwq.js";import"./ErrorBarContext-iSnZN3fR.js";import"./SetGraphicalItem-BWe-V4S4.js";import"./getZIndexFromUnknown-5YUkMLyI.js";import"./useEffectiveDataKey-L1KgQlH4.js";import"./omit-lelMGAAU.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BAoUkSSw.js";import"./step-W8iSilzg.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BjJpQq32.js";import"./Dot-CSz5GuhK.js";import"./Symbols-DCRo0j9j.js";import"./symbol-BSoKxRAd.js";import"./getRadiusAndStrokeWidthFromDot-C3oN3ytl.js";import"./useElementOffset-DlepEBex.js";import"./uniqBy-0D-LcbqQ.js";import"./iteratee-IqDasbN4.js";import"./Cross-CzL3SQCG.js";import"./Sector-DPbvsCHz.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
