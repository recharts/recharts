import{R as t}from"./iframe-DyrN_51d.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BoJncRS_.js";import{R as l}from"./zIndexSlice-20W2dW_I.js";import{C as x}from"./ComposedChart-D587OAML.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-5e581GDj.js";import{L as a}from"./Line-BSKz0Foo.js";import{X as c}from"./XAxis-BrvsOOq-.js";import{T as g}from"./Tooltip-DNLsLlMW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BwFzhvIj.js";import"./Text-CV1ypZeZ.js";import"./resolveDefaultProps-Dqwg9Cw4.js";import"./DOMUtils-DIhf953N.js";import"./isWellBehavedNumber-BWb0p1O1.js";import"./useId-kCzHPj6p.js";import"./useBackwardsCompatibleTheme-Bt58M03l.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bp9YTxbL.js";import"./index-JQNKXinH.js";import"./index-DXzoq_51.js";import"./RechartsWrapper-DkN-Eg1-.js";import"./axisSelectors-Bfr9Dapf.js";import"./throttle-Deocn2P3.js";import"./d3-scale-Dg7Uhedh.js";import"./index-Zhh87yRU.js";import"./index-B7rURxTX.js";import"./renderedTicksSlice-CRqt9_jA.js";import"./index-DdYmtx0a.js";import"./CartesianAxis-vw-O2ROQ.js";import"./Layer-Bhl1Azk1.js";import"./types-D2IYUNPt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BsXS56U5.js";import"./chartDataContext-5lrtEEYG.js";import"./CategoricalChart-DkwHwiOc.js";import"./AnimatedItems-_Ln2HVFG.js";import"./useAnimationId-D9Lt2BUa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkR0YeyO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DpQnh-5h.js";import"./tooltipContext-DmPOkKme.js";import"./RegisterGraphicalItemId-CVmkVACh.js";import"./ErrorBarContext-Bxc1YjcQ.js";import"./GraphicalItemClipPath-CA7J29cH.js";import"./SetGraphicalItem-lGNUC0L0.js";import"./getZIndexFromUnknown-BBM42x_k.js";import"./useGraphicalItemIdentity-CBB7gohW.js";import"./Curve-JRjNlxP0.js";import"./step-DtwkAaFX.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C6wxEM4H.js";import"./Dot-CXTwVenc.js";import"./getRadiusAndStrokeWidthFromDot-u76jjLdq.js";import"./useElementOffset-D2ZAhnE4.js";import"./uniqBy-D3fTQr9L.js";import"./iteratee-4xLB6-L6.js";import"./Cross-BRYpQItw.js";import"./Sector-0EaVWfRH.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
