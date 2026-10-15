import{R as t}from"./iframe-CcyN1ZV1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DQC0nPlg.js";import{R as l}from"./zIndexSlice-DWTF0hX9.js";import{C as x}from"./ComposedChart-BIM71YL9.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DNXzfDPP.js";import{L as a}from"./Line-BuaXrB5L.js";import{X as c}from"./XAxis-6LjH0TsS.js";import{T as g}from"./Tooltip-F5VK9A1d.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DeeiGPOy.js";import"./Text-GXnWYGAc.js";import"./resolveDefaultProps-CTY6OgJi.js";import"./pageBackground-D_UkCcJZ.js";import"./isWellBehavedNumber-CnBZkqHG.js";import"./useId-C9u3rAWe.js";import"./useBackwardsCompatibleTheme-BdBaTXYz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CpLPcSfq.js";import"./index-Dyila60U.js";import"./index-AJQJO5x9.js";import"./axisSelectors-B4ReTl4S.js";import"./throttle-B9Dwf27c.js";import"./d3-scale-BxouAPuB.js";import"./CartesianAxis-DnpMFCoE.js";import"./Layer-cvLVo1Gu.js";import"./types-U4cAvHsY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bjh8Fjbe.js";import"./index-B2XcMOi-.js";import"./index-BVkJtaEu.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-C-9S0sCc.js";import"./index-_YIGzYhu.js";import"./CartesianChart-B3SfFTfT.js";import"./chartDataContext-BSpB3ZZP.js";import"./CategoricalChart-CXFsQjCx.js";import"./activeStyles-CeU8zAVc.js";import"./useAnimationId-J9w0IkU1.js";import"./dataEntryStyles-VGeW2eAl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdGfQr7e.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6VvEytF.js";import"./tooltipContext-CcDYFQ4J.js";import"./ErrorBarContext-1RRlDzY7.js";import"./GraphicalItemClipPath-BRUG8_Yr.js";import"./SetGraphicalItem-CtBWbyZo.js";import"./getZIndexFromUnknown-qyJrGT0U.js";import"./useEffectiveDataKey-D_8eHxuE.js";import"./Curve-Cj1AfJKq.js";import"./step-CVWEfu7h.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BB9nBPw6.js";import"./Dot-CXSypbME.js";import"./getRadiusAndStrokeWidthFromDot-DQBrP5M-.js";import"./useElementOffset-B2YA_4mp.js";import"./uniqBy-Ddp6Bm8x.js";import"./iteratee-KZVFWJDs.js";import"./Cross-WD_mAZPw.js";import"./Sector-DAa6ob58.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
