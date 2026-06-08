import{R as t}from"./iframe-8lQPdWqg.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-B8-aAKdo.js";import{R as l}from"./zIndexSlice-HgvYxHxO.js";import{C as x}from"./ComposedChart-nJhIiDmQ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-WfYPDZ05.js";import{L as a}from"./Line-DQbvyftM.js";import{X as c}from"./XAxis-DJEDKgVX.js";import{T as g}from"./Tooltip-C7ZXpw4h.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BByPkrE2.js";import"./CartesianAxis-DwSWDszA.js";import"./Layer-CDc8atAP.js";import"./resolveDefaultProps-D5naey2E.js";import"./Text-B197qhYG.js";import"./DOMUtils-BTKUKMTR.js";import"./isWellBehavedNumber-Bo5Fj-TS.js";import"./Label-Dm0B15Tp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CBi4-krB.js";import"./index-DDpCqwLC.js";import"./index-DuAs5Bye.js";import"./types-CT--YnpL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BULVvGQu.js";import"./immer-BzJ0g7On.js";import"./RechartsWrapper-1T0MVTTa.js";import"./index-4GPQXHZz.js";import"./index-DC8gB5sz.js";import"./axisSelectors-6HnY6kw7.js";import"./d3-scale-CBB0hoc6.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BwVyT9hr.js";import"./chartDataContext-p8mU6nY6.js";import"./CategoricalChart-DXrGsRNK.js";import"./tooltipContext-nL6J0rER.js";import"./AnimatedItems-DC4nP9_V.js";import"./useAnimationId-Bv0dv7sa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BOIggd48.js";import"./ActiveShapeUtils-BLPRWSBX.js";import"./RegisterGraphicalItemId-CXVUtMmc.js";import"./ErrorBarContext-B402Fsm3.js";import"./GraphicalItemClipPath-DqeRAZts.js";import"./SetGraphicalItem-BjZEdkKC.js";import"./getZIndexFromUnknown-CHrP0GS6.js";import"./graphicalItemSelectors-Boc2l_BC.js";import"./Curve-bBnKBK2X.js";import"./step-BSoAUg6l.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CO3DAqSg.js";import"./Dot-Bl-weaMj.js";import"./getRadiusAndStrokeWidthFromDot-CgN7yRoc.js";import"./useElementOffset-BrKF9R5o.js";import"./uniqBy-CjCz0Q6p.js";import"./iteratee-Db3NWcbd.js";import"./Cross-D5O4BVdp.js";import"./Sector-ChdwTptZ.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
