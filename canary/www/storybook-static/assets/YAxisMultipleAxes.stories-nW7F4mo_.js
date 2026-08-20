import{R as t}from"./iframe-1v9h95J8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DahzdkhC.js";import{R as l}from"./zIndexSlice-BhjZ46tE.js";import{C as x}from"./ComposedChart-CQ6NotWx.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DuLPR8zA.js";import{L as a}from"./Line-DFNe7bTs.js";import{X as c}from"./XAxis-C3_Gtrrp.js";import{T as g}from"./Tooltip-B2fMo0XT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CLKDqP8g.js";import"./Text-t2WYL4eB.js";import"./resolveDefaultProps-BhmjJgZI.js";import"./DOMUtils-Duwm3W6u.js";import"./isWellBehavedNumber-IDGRCsZw.js";import"./useId-BeY-WYzc.js";import"./useBackwardsCompatibleTheme-D-bpn3x_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ClRRfs-A.js";import"./index-DorzE8c_.js";import"./index-C6o7i8Oe.js";import"./RechartsWrapper-XwXOT9f_.js";import"./index-C_nXGIxS.js";import"./index-DKrzWSHd.js";import"./throttle-Dy0aiko3.js";import"./axisSelectors-BWhm0UuR.js";import"./d3-scale-qCvwfRiK.js";import"./renderedTicksSlice-CbFboWTW.js";import"./CartesianAxis-BrAAElTJ.js";import"./Layer-BGkgrUb2.js";import"./types-Bc5JlxqX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dhkzwurf.js";import"./chartDataContext-ONZEIQIl.js";import"./CategoricalChart-3eK3rQ5j.js";import"./AnimatedItems-BtjOxZbL.js";import"./useAnimationId-1FoMJdgT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BArip1lr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DyMxVbzF.js";import"./tooltipContext-C8yzlazJ.js";import"./RegisterGraphicalItemId-CM5ihZMg.js";import"./ErrorBarContext-7DKBlL9r.js";import"./GraphicalItemClipPath-CNT3Oe3B.js";import"./SetGraphicalItem-CrvsS0eI.js";import"./getZIndexFromUnknown-CvXnk0Gx.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DJQDelow.js";import"./Curve-CZh9TamE.js";import"./step-BpAcBh1s.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BMT_QtoQ.js";import"./Dot-BB2fWryZ.js";import"./getRadiusAndStrokeWidthFromDot-BDAbQB1I.js";import"./useElementOffset-Dyp5e5y2.js";import"./uniqBy-BO5r3yE5.js";import"./iteratee-CWaP7vY_.js";import"./Cross-D9rThth8.js";import"./Sector-BTksePaH.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
