import{R as t}from"./iframe-DyNflmpD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DRbcnQBN.js";import{R as l}from"./zIndexSlice-DcbzUDl1.js";import{C as x}from"./ComposedChart-DK3vhTkG.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cqj-Xi0f.js";import{L as a}from"./Line-BGuS8g8Y.js";import{X as c}from"./XAxis-BRq0uwwt.js";import{T as g}from"./Tooltip-BAxc7Yy-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-8baFJ3SD.js";import"./Text-DubbQCtu.js";import"./resolveDefaultProps-CEGyXQoP.js";import"./DOMUtils-CnMp_f2C.js";import"./isWellBehavedNumber-Du2TBwtB.js";import"./useId-CCFKlxj2.js";import"./useBackwardsCompatibleTheme-1TKRF9_G.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BkImCK5k.js";import"./index-CXOSBmJF.js";import"./index-b5COxMAZ.js";import"./RechartsWrapper-DcT-g24f.js";import"./axisSelectors-D8oAfUCo.js";import"./throttle-JOKyqjkh.js";import"./d3-scale-rIUPnSoV.js";import"./index-CUSxx8_g.js";import"./index-D1o802DX.js";import"./renderedTicksSlice-D5roUEnp.js";import"./index-wtd-kRKG.js";import"./CartesianAxis-FmtEoT3c.js";import"./Layer-BAK3mXOF.js";import"./types-BmhrOP68.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-SvhUL1zG.js";import"./chartDataContext-CccchDo-.js";import"./CategoricalChart-BmCM1Kvw.js";import"./AnimatedItems-Bg7iXKcU.js";import"./useAnimationId-B6Hjzqdy.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ewchM9Jh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-7Ik4Y1iY.js";import"./tooltipContext-DMH8dqMh.js";import"./RegisterGraphicalItemId-I1F5nEAR.js";import"./ErrorBarContext-0wgmY52F.js";import"./GraphicalItemClipPath-C6FvMp3W.js";import"./SetGraphicalItem-DjVLiBcR.js";import"./getZIndexFromUnknown-BgbHQNkS.js";import"./useGraphicalItemIdentity-BUorwys7.js";import"./Curve-tt8V9XJv.js";import"./step-Cw2SmsXu.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CZJUt6u2.js";import"./Dot-DiXQ237y.js";import"./getRadiusAndStrokeWidthFromDot-D8_lJPIV.js";import"./useElementOffset-yI9njwCE.js";import"./uniqBy-3XMkSlBq.js";import"./iteratee-CgqxdBPn.js";import"./Cross-LXoMM9NZ.js";import"./Sector-C-RrM82Y.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
