import{R as t}from"./iframe-u9oyaNDa.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DcziBOs8.js";import{R as l}from"./zIndexSlice-CP6DEYJK.js";import{C as x}from"./ComposedChart-CjiIL43I.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-94lpO5GX.js";import{L as a}from"./Line-7GaAxAzO.js";import{X as c}from"./XAxis-mDQaQsGs.js";import{T as g}from"./Tooltip-DiUmtIlX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Q8r239gm.js";import"./Text-BjcDy3qe.js";import"./resolveDefaultProps-DAwvazXN.js";import"./DOMUtils-ClqiwCzY.js";import"./isWellBehavedNumber-BM97SC6u.js";import"./useId-C7h_mhKQ.js";import"./useBackwardsCompatibleTheme-B4wBZYcr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CWsudvRq.js";import"./index-Cf659ixt.js";import"./index-KfJc4WDj.js";import"./RechartsWrapper-BUYC64MV.js";import"./axisSelectors-OhjP93PE.js";import"./throttle-BNJMxzFn.js";import"./d3-scale-CXFCyIt2.js";import"./index-BqftORPs.js";import"./index-CBGd9m5k.js";import"./renderedTicksSlice-Kslt8j3i.js";import"./index-DWf2p5U7.js";import"./CartesianAxis-BInpl5Mc.js";import"./Layer-DjumWApv.js";import"./types-DQ_9ILU-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-GMYsDnOd.js";import"./chartDataContext-CUbnBmUW.js";import"./CategoricalChart-DAgdBpFV.js";import"./AnimatedItems-BOaP-WB5.js";import"./useAnimationId-DzZz4Iie.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-un1MW7QV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DNXHDk_r.js";import"./tooltipContext-CJc680lq.js";import"./RegisterGraphicalItemId-DN5KjZcx.js";import"./ErrorBarContext-3dixV13Q.js";import"./GraphicalItemClipPath-DV3LH61r.js";import"./SetGraphicalItem-Cs7cmOu4.js";import"./getZIndexFromUnknown-DuGzU7FO.js";import"./useGraphicalItemIdentity-BpDjC4sF.js";import"./Curve-DGZmW8IJ.js";import"./step-BrZPGksV.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CvbD508d.js";import"./Dot-CL6-lJmb.js";import"./getRadiusAndStrokeWidthFromDot-CN_YkoZo.js";import"./useElementOffset-C-12Rct7.js";import"./uniqBy-ThGgtOY0.js";import"./iteratee-TQ17fPkk.js";import"./Cross-DBjhH0rb.js";import"./Sector-qC3sba4E.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
