import{R as t}from"./iframe-DsTklGd_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BOZCya1S.js";import{R as l}from"./zIndexSlice-BtbFiuZY.js";import{C as x}from"./ComposedChart-CSeGHIwL.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BWbRYXCQ.js";import{L as a}from"./Line-BpWz7ZGo.js";import{X as c}from"./XAxis-CCdXtDxp.js";import{T as g}from"./Tooltip-CpWUFYTg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D9BiQh3x.js";import"./Text-BbSBkVqk.js";import"./resolveDefaultProps-Bms6p2jX.js";import"./pageBackground-BHVKZknb.js";import"./isWellBehavedNumber-CnKVaaX2.js";import"./useId-Dh4XaEh2.js";import"./useBackwardsCompatibleTheme-DVVyS6sc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DFFwnPWa.js";import"./index-BXaEWxS9.js";import"./index-CDyKR3cz.js";import"./axisSelectors-DYheqAyK.js";import"./throttle-DdQ2CShf.js";import"./d3-scale-m8FOg4h4.js";import"./CartesianAxis-CPZLjXk4.js";import"./Layer-CZKgQj5k.js";import"./types-CPppnSS0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BKqQhYx3.js";import"./index-DPiom88R.js";import"./index-DwiZHk90.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DgwcOqsJ.js";import"./index-blk6unfu.js";import"./CartesianChart-CPHbQoR9.js";import"./chartDataContext-PmdzKedQ.js";import"./CategoricalChart-DoFDJCgx.js";import"./activeStyles-CRt5O3EE.js";import"./useAnimationId-DDiQkgxw.js";import"./dataEntryStyles-Cfp8oK59.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-VOQBKS27.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cg3stx7N.js";import"./tooltipContext-CwPVMJgZ.js";import"./ErrorBarContext-BpgUGbiX.js";import"./GraphicalItemClipPath-K8g7er1I.js";import"./SetGraphicalItem-Bi7lJTO4.js";import"./getZIndexFromUnknown-kLkkUETN.js";import"./useEffectiveDataKey-yxNF_elp.js";import"./omit-30vhy62S.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BNsFHGFj.js";import"./step-DT1sNEdD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B7jiKkUq.js";import"./Dot-DzYpmtjj.js";import"./getRadiusAndStrokeWidthFromDot-D7P1mq2m.js";import"./useElementOffset-uGLvwzdi.js";import"./uniqBy-Mv52plNv.js";import"./iteratee-Dj6SgMgn.js";import"./Cross-B_kNLhXT.js";import"./Sector-CgGX8g4n.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
