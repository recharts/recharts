import{R as t}from"./iframe-Hl-NyIui.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-aV4oz1qa.js";import{R as l}from"./zIndexSlice-CfmJ5m3S.js";import{C as x}from"./ComposedChart-BDadpkQJ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-g_JiauVn.js";import{L as a}from"./Line-Do1DfpvA.js";import{X as c}from"./XAxis-dvgP8Xa0.js";import{T as g}from"./Tooltip-DMEXtl6P.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B3PtgVX6.js";import"./Text-BrVNMlzX.js";import"./resolveDefaultProps-Cef9-W_0.js";import"./DOMUtils-CG6HmAln.js";import"./isWellBehavedNumber-DkDVf3J3.js";import"./useId-DW-27Lrg.js";import"./useBackwardsCompatibleTheme-gSrU4sF5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C3i-HdBs.js";import"./index--xPFvF8G.js";import"./index-BDqTEc2Q.js";import"./RechartsWrapper-6h9C2k7P.js";import"./axisSelectors-BUNPrG5h.js";import"./throttle-BbfdAojm.js";import"./d3-scale-jS5aGAiZ.js";import"./index-DBpjU2SQ.js";import"./index-BofEEBUS.js";import"./renderedTicksSlice-CNE8P8TP.js";import"./index-D2iNSRAe.js";import"./CartesianAxis-B_3pRXW9.js";import"./Layer-CFBs8Wel.js";import"./types-B1K9SbcX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Ci5OoGHz.js";import"./chartDataContext-C-VJeLBh.js";import"./CategoricalChart-CArj-fEw.js";import"./AnimatedItems-ChX6uVrd.js";import"./useAnimationId-DLNOJTSV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ChG8X9SF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D9ea8jTE.js";import"./tooltipContext-BPtMQ1jk.js";import"./RegisterGraphicalItemId-D1BMc2l2.js";import"./ErrorBarContext-D2c9lRCZ.js";import"./GraphicalItemClipPath-CzquVpfg.js";import"./SetGraphicalItem-BgE77ea4.js";import"./getZIndexFromUnknown-D8k5nfEd.js";import"./useGraphicalItemIdentity-uh3z32K3.js";import"./Curve-DylS8_W7.js";import"./step-DpF6rbyV.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CVfZawzl.js";import"./Dot-DSN5jlp-.js";import"./getRadiusAndStrokeWidthFromDot-Bo-OkCM4.js";import"./useElementOffset-BfRtNT8-.js";import"./uniqBy-ByQGoswD.js";import"./iteratee-BqIuCNzZ.js";import"./Cross-E3EcVqNT.js";import"./Sector-RRY7EsWd.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
