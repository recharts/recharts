import{R as t}from"./iframe-DaQbgwSM.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DJNfgCPe.js";import{R as l}from"./zIndexSlice-GtlpPVbP.js";import{C as x}from"./ComposedChart-Bbu2Bio2.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BXQ_bZuT.js";import{L as a}from"./Line-BQic4Z5R.js";import{X as c}from"./XAxis-Dwi6B5gb.js";import{T as g}from"./Tooltip-BQZ3CNSI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BMF2NwhK.js";import"./Text-6pf8QaaJ.js";import"./resolveDefaultProps-C03kBNGe.js";import"./DOMUtils-B-aaPPhR.js";import"./isWellBehavedNumber-CF6bOuRt.js";import"./useId-C9TE6S2g.js";import"./useBackwardsCompatibleTheme-jIXNHWAs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-e1DF3LHV.js";import"./index-fR-dYqAy.js";import"./index-pcae8h2v.js";import"./RechartsWrapper-BMsAihAT.js";import"./axisSelectors-DiPrK3uM.js";import"./throttle-D86JN7dt.js";import"./d3-scale-C28Mr6C_.js";import"./index-B9PrDzsD.js";import"./index-C_QxJfjv.js";import"./renderedTicksSlice-BBiwG0aF.js";import"./index-DVT6pdU4.js";import"./CartesianAxis-Dd7LPnIK.js";import"./Layer-Dy562RhS.js";import"./types-BrU75Oof.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DWDjryZ8.js";import"./chartDataContext-C5kvJ464.js";import"./CategoricalChart-D9AKOXtI.js";import"./AnimatedItems-BlzsOhEO.js";import"./useAnimationId-BjF9VJ68.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C77_7Qyp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CrKaudC-.js";import"./tooltipContext-CIcECwtV.js";import"./RegisterGraphicalItemId-Clsr70g_.js";import"./ErrorBarContext-B2kb74U-.js";import"./GraphicalItemClipPath-D0ATNOOi.js";import"./SetGraphicalItem-HJSDm9m5.js";import"./getZIndexFromUnknown-CDJsOmbk.js";import"./useGraphicalItemIdentity-CLitx1ml.js";import"./Curve-_5Fn1COl.js";import"./step-C8sn29Vk.js";import"./path-DyVhHtw_.js";import"./ActivePoints-oBCdZOS2.js";import"./Dot-C7TPiZG8.js";import"./getRadiusAndStrokeWidthFromDot-3aetdsat.js";import"./useElementOffset-D2-2eyIk.js";import"./uniqBy-Bqm10COm.js";import"./iteratee-CZBTSYNz.js";import"./Cross-DSdbtvKr.js";import"./Sector-BTnt08UU.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
