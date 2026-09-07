import{R as t}from"./iframe-CGBDVxE-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CATKcxKg.js";import{R as l}from"./zIndexSlice-Dcoi5C6v.js";import{C as x}from"./ComposedChart-BXiAbWC5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-mxXDfl1D.js";import{L as a}from"./Line-eMAUoNnx.js";import{X as c}from"./XAxis-Ynp2iGfo.js";import{T as g}from"./Tooltip-B0x42Fjv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-rN0i5HX0.js";import"./Text-DzBijb3H.js";import"./resolveDefaultProps-DFx1_FeE.js";import"./DOMUtils-D0ua0v6z.js";import"./isWellBehavedNumber-BDUfwR7p.js";import"./useId-BXTAvIyb.js";import"./useBackwardsCompatibleTheme-B_EiPeE9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BQMQ-79w.js";import"./index-hboVxxbY.js";import"./index-DBtrqjyz.js";import"./RechartsWrapper-R5wdE7Du.js";import"./axisSelectors-DpEiq2v9.js";import"./throttle-r4SgwsRS.js";import"./d3-scale-BEr64TMX.js";import"./index-BIKEo4sh.js";import"./index-WvwT3848.js";import"./renderedTicksSlice-D93v-Tca.js";import"./index-DyBKUzQK.js";import"./CartesianAxis-BmUJzq6P.js";import"./Layer-BQpheWca.js";import"./types-ALxpiXvN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DkeZbNrD.js";import"./chartDataContext-BUzll-9F.js";import"./CategoricalChart-_qdlKxZa.js";import"./AnimatedItems-BodTqMda.js";import"./useAnimationId-Dg5PDt8u.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BrNBFEk8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-tQSQ8w1p.js";import"./tooltipContext-JrsZoYZm.js";import"./RegisterGraphicalItemId-B6GAZHe-.js";import"./ErrorBarContext-vv2ECrtE.js";import"./GraphicalItemClipPath-CHQFwdrq.js";import"./SetGraphicalItem-CIMjPr92.js";import"./getZIndexFromUnknown-BvlpvwUA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CeH-sbSH.js";import"./Curve-D7CJuFyB.js";import"./step-DHP97Yog.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DVb5cL5_.js";import"./Dot-CBmDQuzq.js";import"./getRadiusAndStrokeWidthFromDot-XfT2XWrG.js";import"./useElementOffset-Bo3nBkz1.js";import"./uniqBy-Dq6L1riV.js";import"./iteratee-DZ9WVhQn.js";import"./Cross-D8x6YHTw.js";import"./Sector-CmmqCzxU.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
