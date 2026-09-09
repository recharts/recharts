import{R as t}from"./iframe-CrjMmK-P.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-WGtSziYB.js";import{R as l}from"./zIndexSlice-BjJGmtkk.js";import{C as x}from"./ComposedChart-DWFup1Gh.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CAGhqtCF.js";import{L as a}from"./Line-BdPUp7B4.js";import{X as c}from"./XAxis-Bf99Djp-.js";import{T as g}from"./Tooltip-CPrKDQ9h.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BUscAhBU.js";import"./Text-CvoG-yND.js";import"./resolveDefaultProps-1lRPudDL.js";import"./DOMUtils-BLhe2-Wn.js";import"./isWellBehavedNumber-i-P4IxnU.js";import"./useId-BEuvre-A.js";import"./useBackwardsCompatibleTheme-C_kcEgOz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BnhEIQdT.js";import"./index-C29X7Fc2.js";import"./index-BDweFuqO.js";import"./RechartsWrapper-W15Lm7G0.js";import"./axisSelectors-CArdhpNf.js";import"./throttle-DvPRoUwa.js";import"./d3-scale-60bYpT2W.js";import"./index-DhUbeUHh.js";import"./index-C0KmE10p.js";import"./renderedTicksSlice-CoKKbA57.js";import"./index-p1bk8TMl.js";import"./CartesianAxis-B8LyCo9q.js";import"./Layer-D9-s7BIj.js";import"./types-DQIGWyvO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CtX-pqzv.js";import"./chartDataContext-rtr64WFG.js";import"./CategoricalChart-RhdZ5xjE.js";import"./AnimatedItems-DhhQShtD.js";import"./useAnimationId-yNh7qZi1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-4U1uwwED.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DNRW1wio.js";import"./tooltipContext-BnMOhzUN.js";import"./RegisterGraphicalItemId-BtD1DcTG.js";import"./ErrorBarContext-DVTSO5_6.js";import"./GraphicalItemClipPath-d2m1y1AJ.js";import"./SetGraphicalItem-Cz1BmFYo.js";import"./getZIndexFromUnknown-DjH7KU0c.js";import"./useGraphicalItemIdentity-D4eInQUL.js";import"./Curve-DmmzRQeA.js";import"./step-XIk4Qxhk.js";import"./path-DyVhHtw_.js";import"./ActivePoints-l6QKzYun.js";import"./Dot-BglkAryw.js";import"./getRadiusAndStrokeWidthFromDot-BZvBgzm6.js";import"./useElementOffset-D3QBqJsK.js";import"./uniqBy-BOWmp87N.js";import"./iteratee-5CO9aB2p.js";import"./Cross-CcupEozg.js";import"./Sector-DVSg-Fqk.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
