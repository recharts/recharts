import{R as t}from"./iframe-BRjS3pa5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BKuUSn8V.js";import{R as l}from"./zIndexSlice-XdBxArD4.js";import{C as x}from"./ComposedChart-BbCOodCR.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Q41Xotji.js";import{L as a}from"./Line-BnrW5em_.js";import{X as c}from"./XAxis-C08AGWpL.js";import{T as g}from"./Tooltip-BPX6UV8F.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Cffb3mHz.js";import"./Layer-BT4MOeWW.js";import"./resolveDefaultProps-CQjC3mbh.js";import"./Text-z_Sr8qFY.js";import"./DOMUtils-D9-UYNUT.js";import"./isWellBehavedNumber-BpzQ2UFz.js";import"./Label-Dttiw5NK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-98YKZStn.js";import"./index-CTzNvEbv.js";import"./index-BBA_Z08e.js";import"./types-DRhRxFpq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BqYlra_S.js";import"./throttle-BVKBaBan.js";import"./RechartsThemeContext-CTxTvR-3.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-kdlfkWfS.js";import"./index-BBFKTPis.js";import"./index-JNqHplgB.js";import"./axisSelectors-CG0YGbYa.js";import"./d3-scale-BkRq6yTg.js";import"./CartesianChart-CNsqprpw.js";import"./chartDataContext-UzO9iCYp.js";import"./CategoricalChart-CG1ra5Si.js";import"./tooltipContext-D1__PQT4.js";import"./AnimatedItems-51O2x23y.js";import"./useAnimationId-CRgssPqb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BRRrD7WV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-pSZkQHNE.js";import"./RegisterGraphicalItemId-BMfolY6u.js";import"./ErrorBarContext-CRJaMaH8.js";import"./GraphicalItemClipPath-CPBZ3hrs.js";import"./SetGraphicalItem-B-YWrUBQ.js";import"./getZIndexFromUnknown-CySiY5s8.js";import"./graphicalItemSelectors-CveEmnYZ.js";import"./Curve-BAtmvmuC.js";import"./step-DMngYI5d.js";import"./path-DyVhHtw_.js";import"./ActivePoints-VQONApch.js";import"./Dot-D2cX8i8Q.js";import"./getRadiusAndStrokeWidthFromDot-BUdbBqHd.js";import"./useElementOffset-De69kyJ6.js";import"./uniqBy-BAhY2P_x.js";import"./iteratee-vQSh6bDz.js";import"./Cross-x9zwBclm.js";import"./Sector-MRMFL2R5.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
