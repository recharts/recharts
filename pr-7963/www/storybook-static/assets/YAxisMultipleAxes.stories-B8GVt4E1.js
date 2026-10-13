import{R as t}from"./iframe-Bd2Bk_ai.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Dddzu0fc.js";import{R as l}from"./zIndexSlice-CvsBboU2.js";import{C as x}from"./ComposedChart-C6UPQc6u.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BTIEIv2d.js";import{L as a}from"./Line-BYwtVnuU.js";import{X as c}from"./XAxis-CypmBaco.js";import{T as g}from"./Tooltip-DFK7qGgh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-O_u7VAtA.js";import"./Text-oE3Ppk29.js";import"./resolveDefaultProps-BB0elGzE.js";import"./pageBackground-S_W44ttK.js";import"./isWellBehavedNumber-DBLq0YlU.js";import"./useId-CHbendDP.js";import"./useBackwardsCompatibleTheme-C0u865U4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DQoX8EpG.js";import"./index-YOlWJ3UI.js";import"./index-BgWJcO-O.js";import"./axisSelectors-hjszmlUK.js";import"./throttle-BgaPtkTt.js";import"./d3-scale-DCtwXSpz.js";import"./CartesianAxis-DlgdGNPk.js";import"./Layer-Db-kRrip.js";import"./types-BTpVoC26.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cpd-xLFY.js";import"./index-DJuU84IJ.js";import"./index-nQQMczPK.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DzNno5mi.js";import"./index-Qipw3yHd.js";import"./CartesianChart-CrlTsjwB.js";import"./chartDataContext-BPm9-wzB.js";import"./CategoricalChart-CcrqLwDF.js";import"./activeStyles-C6x8xDfA.js";import"./useAnimationId-Cm1DhMix.js";import"./dataEntryStyles-BtdfRJJQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ChYeKnX_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dy2jST-f.js";import"./tooltipContext-CVXk4v3Q.js";import"./ErrorBarContext-RrbFFwNs.js";import"./GraphicalItemClipPath-Dc7-6XW3.js";import"./SetGraphicalItem-Br5gILYL.js";import"./getZIndexFromUnknown-MRIXuAJH.js";import"./useEffectiveDataKey-_q65TZZ4.js";import"./Curve-5l5JQbBY.js";import"./step-BGDWO4Dz.js";import"./path-DyVhHtw_.js";import"./ActivePoints-kKexF7Xi.js";import"./Dot-DaQEzLOP.js";import"./getRadiusAndStrokeWidthFromDot-D0dtyr_V.js";import"./useElementOffset-DD2zEOuZ.js";import"./uniqBy-DSxR1_ki.js";import"./iteratee-DmMpoBDe.js";import"./Cross-l8PQsr7L.js";import"./Sector-C7HxJjMo.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
