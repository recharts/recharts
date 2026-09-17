import{R as t}from"./iframe-BWgNvoHd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Cw1g73tC.js";import{R as l}from"./zIndexSlice-C7P0LeTp.js";import{C as x}from"./ComposedChart-CDicU1zI.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BBTzfxY9.js";import{L as a}from"./Line-C5JxjXkq.js";import{X as c}from"./XAxis-NaVI4shj.js";import{T as g}from"./Tooltip-B-ieOYkC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B5Qmh4rZ.js";import"./Text-CY7tJJcL.js";import"./resolveDefaultProps-BWCwlNwt.js";import"./DOMUtils-Dr6Nulpk.js";import"./isWellBehavedNumber-CM5YB1xm.js";import"./useId-BqfKGNe3.js";import"./useBackwardsCompatibleTheme-CAXCwkj5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cmt_sSM5.js";import"./index-DmnQYdaI.js";import"./index-CK7j19MQ.js";import"./RechartsWrapper-CqggqYnG.js";import"./axisSelectors-Dam-iDrH.js";import"./throttle-Bg-BpQUC.js";import"./d3-scale-CFMZ35Kl.js";import"./index-BqzBYwQc.js";import"./index-FyKmNOxh.js";import"./renderedTicksSlice-Dqzed6yg.js";import"./index-ldLlQXbm.js";import"./CartesianAxis-ChN3yMr6.js";import"./Layer-C3eYLIIL.js";import"./types-CrSccog6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dh0jr6Yv.js";import"./chartDataContext-BK5iZPJH.js";import"./CategoricalChart-BAKFtZDW.js";import"./AnimatedItems-hZV-WKF8.js";import"./useAnimationId-Bc7y922J.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CBMXDrA6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BslnG83G.js";import"./tooltipContext-BJeljRjS.js";import"./RegisterGraphicalItemId-DD6KbxKE.js";import"./ErrorBarContext-CCrZclZc.js";import"./GraphicalItemClipPath-MkJi9iI4.js";import"./SetGraphicalItem-BxHdn_2c.js";import"./getZIndexFromUnknown-D-oalug2.js";import"./useGraphicalItemIdentity-BBFCWIMQ.js";import"./Curve-3XxISmtt.js";import"./step-ChFfihmJ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cc4fx1EW.js";import"./Dot-B7IGFvAw.js";import"./getRadiusAndStrokeWidthFromDot-D_8ZDval.js";import"./useElementOffset-DTfG1d0_.js";import"./uniqBy-b4mUNSGI.js";import"./iteratee-BEUkWsOH.js";import"./Cross-BNwhfFnH.js";import"./Sector-CAxghyDl.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
