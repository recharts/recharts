import{R as t}from"./iframe-SkF1Z4RX.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BRrjXnEX.js";import{R as l}from"./zIndexSlice-Di849QVt.js";import{C as x}from"./ComposedChart-CQq3s6LL.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BVJG8KM3.js";import{L as a}from"./Line-BzhO0L4x.js";import{X as c}from"./XAxis-D03_TvJt.js";import{T as g}from"./Tooltip-DjzFbfmR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cq-EymG9.js";import"./Text-BJaHuQQc.js";import"./resolveDefaultProps-Doom015c.js";import"./DOMUtils-CJyIN8K_.js";import"./ZIndexLayer-BVWEeopG.js";import"./index-B2PIGALe.js";import"./index-DtvbWEv2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BotG4f4O.js";import"./throttle-DtLWJI8N.js";import"./axisSelectors-BsfIJIuR.js";import"./d3-scale-CkXd-iRe.js";import"./CartesianAxis-C8zLGICr.js";import"./Layer-CVy-0b4t.js";import"./types-j8xWAYxX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dhqIaxco.js";import"./index-BfWLl3V2.js";import"./index-DXUCR1Dc.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D7eCqZJw.js";import"./index-CqjGOWVd.js";import"./fillDefinitions-DFub8wZ3.js";import"./CartesianChart-DrHmlDEh.js";import"./ZIndexPortal-Ccz9Ppdz.js";import"./CategoricalChart-CFpoaktB.js";import"./LabelList-iUgi9C9_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DeUeWV1w.js";import"./useAnimationId-_Q1GlxqN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-pmXZ3dMD.js";import"./tooltipContext-DPtGy-7-.js";import"./dataEntryStyles-BsghJbw2.js";import"./ErrorBarContext-DFT45or-.js";import"./activeStyles-f736jV_-.js";import"./SetGraphicalItem-BQZxwmYP.js";import"./getZIndexFromUnknown-BZWBqZNJ.js";import"./useEffectiveDataKey-DnqAh09W.js";import"./omit-CbZkK91b.js";import"./isArguments-yB-y1yaH.js";import"./Curve-6N2VVfLG.js";import"./step-CspGBwNT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-NIeWtT_V.js";import"./Dot-CRvYYT1z.js";import"./Symbols-BYB3KgvY.js";import"./symbol-CUYo63-h.js";import"./getRadiusAndStrokeWidthFromDot-C10IayrY.js";import"./useElementOffset-BCa24z6l.js";import"./uniqBy-CFMexfao.js";import"./iteratee-CvWL5GPd.js";import"./Cross-CtnF-O9-.js";import"./Sector-CMJKZPzq.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
