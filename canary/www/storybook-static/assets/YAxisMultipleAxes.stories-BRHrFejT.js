import{R as t}from"./iframe-BRRwZ9OM.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-QWCMNG8w.js";import{R as l}from"./zIndexSlice-HqKAKynn.js";import{C as x}from"./ComposedChart-BgZB43-v.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bbdg2Kf-.js";import{L as a}from"./Line-9WEkChWx.js";import{X as c}from"./XAxis-34NAxun3.js";import{T as g}from"./Tooltip-WSYZCHDJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BF1g4qnl.js";import"./Text-m4YXivgw.js";import"./resolveDefaultProps-CZ3dceSm.js";import"./DOMUtils-kcWo8Tu5.js";import"./isWellBehavedNumber-PSI2l2A6.js";import"./useId-DqioIEDp.js";import"./useBackwardsCompatibleTheme-BRwc3p-N.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C1LIYZVJ.js";import"./index-C-3qUDzk.js";import"./index-dIUimeeY.js";import"./RechartsWrapper-BuRv36IR.js";import"./axisSelectors-Duf7CX9E.js";import"./throttle-CI7PhwKd.js";import"./d3-scale-CSNIZQpC.js";import"./index-D46Km6-p.js";import"./index-BjAGoEo5.js";import"./renderedTicksSlice-D7aXzM-e.js";import"./index-Ce-PaXeC.js";import"./CartesianAxis-Dgab3bjn.js";import"./Layer-DaA93mOO.js";import"./types-BTYbdlsY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DeYwOeaV.js";import"./chartDataContext-C1k0ydEu.js";import"./CategoricalChart-CWBsWl6U.js";import"./AnimatedItems-Dxhu-tqD.js";import"./useAnimationId-WhlrcPo0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DUtmhkWL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DiAhe8wn.js";import"./tooltipContext-CxLEjHbB.js";import"./RegisterGraphicalItemId-x9sXDMnN.js";import"./ErrorBarContext-WHUbM02-.js";import"./GraphicalItemClipPath-5REgjKEh.js";import"./SetGraphicalItem-BVwAptcr.js";import"./getZIndexFromUnknown-DKrE3eCu.js";import"./useGraphicalItemIdentity-BCsXVCoB.js";import"./dataEntryStyles-rkDUn2gq.js";import"./Curve-BUEFktWE.js";import"./step-BB9R7jiY.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DZEF0mSo.js";import"./Dot-DsdNLeVo.js";import"./getRadiusAndStrokeWidthFromDot-C1-tTryx.js";import"./useElementOffset-j1dL7wm3.js";import"./uniqBy-Bc7r0gcZ.js";import"./iteratee-cCh71UMl.js";import"./Cross-DVB5iPY6.js";import"./Sector-B69zY3GL.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
