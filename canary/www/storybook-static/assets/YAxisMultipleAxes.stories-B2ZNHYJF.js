import{R as t}from"./iframe-SCBQwNxQ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CjkWE18a.js";import{R as l}from"./zIndexSlice-j2Iu_2in.js";import{C as x}from"./ComposedChart-DL5-9kqo.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CZnijN9R.js";import{L as a}from"./Line-Ioxo2vHg.js";import{X as c}from"./XAxis-Cc0l9D0i.js";import{T as g}from"./Tooltip-B9AMlJlO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-5iI9wFuI.js";import"./Text-CXiXfLVx.js";import"./resolveDefaultProps-CyZ9SZnI.js";import"./DOMUtils-htjTn9rf.js";import"./isWellBehavedNumber-DvdKXsqM.js";import"./useId-GXBIOTNS.js";import"./useBackwardsCompatibleTheme-BnvgZvcH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D6bO2lss.js";import"./index-DsLPnsoz.js";import"./index-Co8Np-XD.js";import"./RechartsWrapper-BlKrxgAY.js";import"./axisSelectors-DLhQ9sAD.js";import"./throttle-CzCySKF_.js";import"./d3-scale-G26x6J9Q.js";import"./index-B6uIZp6g.js";import"./index-B0bY_C-Z.js";import"./renderedTicksSlice-DJfakFhE.js";import"./index-CE5ovKc5.js";import"./CartesianAxis-Cxx7AUTO.js";import"./Layer-Cqwrwd-u.js";import"./types-tzKuPEFf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CfXQSmt5.js";import"./chartDataContext-1NVWGtYz.js";import"./CategoricalChart-Byg7V9pR.js";import"./AnimatedItems-Wlp1qaKk.js";import"./useAnimationId-DXE0JH3K.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-7gtnQWmz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-HcSLNl9S.js";import"./tooltipContext-CGZwaRme.js";import"./RegisterGraphicalItemId-ArfZLync.js";import"./ErrorBarContext-SniQgvjJ.js";import"./GraphicalItemClipPath-DklClpWQ.js";import"./SetGraphicalItem-CM8VxQRS.js";import"./getZIndexFromUnknown-_cv6Km6O.js";import"./useGraphicalItemIdentity-D5Od3f0u.js";import"./dataEntryStyles-dNPvN40_.js";import"./Curve-DfnFB90y.js";import"./step-x-If1Moz.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DzK6hILC.js";import"./Dot-BvkLNrn9.js";import"./getRadiusAndStrokeWidthFromDot-BJxhJQao.js";import"./useElementOffset-B4lloxY7.js";import"./uniqBy-DusnyNSE.js";import"./iteratee-C3MB5p7e.js";import"./Cross-C3dnBeYr.js";import"./Sector-Di2yrsjN.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
