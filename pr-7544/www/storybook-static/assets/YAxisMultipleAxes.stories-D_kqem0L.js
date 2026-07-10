import{R as t}from"./iframe-DfxvUCoY.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CHYqw0Yg.js";import{R as l}from"./zIndexSlice-a1aajdGJ.js";import{C as x}from"./ComposedChart-C8jbAnB3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-_Y8ctb1b.js";import{L as a}from"./Line-BI5q6xYq.js";import{X as c}from"./XAxis-CDwQyzI6.js";import{T as g}from"./Tooltip-CQtlB1yQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BuUJ6A2m.js";import"./Layer-D1z9Z2fI.js";import"./resolveDefaultProps-DkGy9Xqs.js";import"./Text-B6Z1U-Hi.js";import"./DOMUtils-DG22iS9R.js";import"./isWellBehavedNumber-By0pufN4.js";import"./Label-Db_taApy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BYPoLUrq.js";import"./index-snxaCIu3.js";import"./index-BZyQtlPK.js";import"./types-DZdy7jpS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D3ObCuZG.js";import"./throttle-CY5RCzqb.js";import"./RechartsWrapper-DKrR_shM.js";import"./index-CFU132wJ.js";import"./index-qAfe5-0Z.js";import"./axisSelectors-XkeOj5U9.js";import"./d3-scale-CsKfZS2s.js";import"./CartesianChart-BqCTaCca.js";import"./chartDataContext-DU69Yd0K.js";import"./CategoricalChart-B1rK5u_C.js";import"./tooltipContext-IY9SJduJ.js";import"./AnimatedItems-DEpW04f-.js";import"./useAnimationId-D9BVxJGQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dl1vC_ro.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BCjs6TQU.js";import"./RegisterGraphicalItemId-uzM-_OM4.js";import"./ErrorBarContext-D2pK0104.js";import"./GraphicalItemClipPath-D5-jIAHW.js";import"./SetGraphicalItem-8Isqc2ZP.js";import"./getZIndexFromUnknown-qwMb2aOW.js";import"./graphicalItemSelectors-CrE8OTzf.js";import"./Curve-Bell45ld.js";import"./step-BKVqTwxS.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bi6fN5zN.js";import"./Dot-BKUKbPeQ.js";import"./getRadiusAndStrokeWidthFromDot-DIcAvM1x.js";import"./useElementOffset-BEOZ1gXg.js";import"./uniqBy-Aa4pim-J.js";import"./iteratee-CZBfFxXi.js";import"./Cross-D06welhQ.js";import"./Sector-BqiRLkjq.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
