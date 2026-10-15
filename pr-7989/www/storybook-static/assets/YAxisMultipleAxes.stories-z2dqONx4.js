import{R as t}from"./iframe-DW88jlWE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-uwKRdj5s.js";import{R as l}from"./zIndexSlice-DVK4421h.js";import{C as x}from"./ComposedChart-CCOYdmsW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BQqwZ5oe.js";import{L as a}from"./Line-eHeA353O.js";import{X as c}from"./XAxis-DR4MLdhh.js";import{T as g}from"./Tooltip-CU8_CHdD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-woFms0xV.js";import"./Text-BEy-xjYS.js";import"./resolveDefaultProps-BeGeeMAY.js";import"./pageBackground-D5Jdtqol.js";import"./isWellBehavedNumber-DJEibIDK.js";import"./useId-DsKCuo-O.js";import"./useBackwardsCompatibleTheme-DRnujEnS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-NojUaQJi.js";import"./index-CYoLVhib.js";import"./index-DKd_R_4T.js";import"./axisSelectors-BvsqhHdG.js";import"./throttle-DdwERQOb.js";import"./d3-scale-B9KsqEcg.js";import"./CartesianAxis-BAGJBH6f.js";import"./Layer-1wEz8tGE.js";import"./types-CqLteoP0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CBsnm3d5.js";import"./index-DGoH4J8D.js";import"./index-CTYHixiw.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-D6Qja1Rv.js";import"./index-DfrCmWVV.js";import"./CartesianChart-DB1uC4rj.js";import"./chartDataContext-DYk24gQd.js";import"./CategoricalChart-Bfzcp6tQ.js";import"./activeStyles-D70ZhOkY.js";import"./useAnimationId-CJ2VkiZA.js";import"./dataEntryStyles-BR960LqV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTJIjFU2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-sQdrYNDC.js";import"./tooltipContext-BBMsUqm9.js";import"./ErrorBarContext-Cf7bjtdd.js";import"./GraphicalItemClipPath-BGSGPFhH.js";import"./SetGraphicalItem-CiG8FS9q.js";import"./getZIndexFromUnknown-C_N_5TMa.js";import"./useEffectiveDataKey-OZ4YR6rc.js";import"./Curve-Dh68tpzp.js";import"./step-DBxmXEXg.js";import"./path-DyVhHtw_.js";import"./ActivePoints-uBvMOKmI.js";import"./Dot-uVIbcFi4.js";import"./getRadiusAndStrokeWidthFromDot-jzOKzrlC.js";import"./useElementOffset-BhYHZyL1.js";import"./uniqBy-CqnjSlNB.js";import"./iteratee-CxMCF-q0.js";import"./Cross-BgszvaaW.js";import"./Sector-BtU0zDu-.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
