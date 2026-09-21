import{R as t}from"./iframe-B8S5mZni.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CXfsjvSU.js";import{R as l}from"./zIndexSlice-C7WPWBHj.js";import{C as x}from"./ComposedChart-BFmInjuY.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CxVwcMJJ.js";import{L as a}from"./Line-BI9PEbOh.js";import{X as c}from"./XAxis-Del5mp5I.js";import{T as g}from"./Tooltip-afrTgFOP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DZ6C1Cc6.js";import"./Text-DDGxlEP5.js";import"./resolveDefaultProps-B-gwRbWC.js";import"./DOMUtils-DwuCUUr8.js";import"./isWellBehavedNumber-TBIenFex.js";import"./useId-7Q8874Q1.js";import"./useBackwardsCompatibleTheme-v1szHh_7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-OLi9LTWb.js";import"./index-BRy-1fgE.js";import"./index-DkKi0J9U.js";import"./RechartsWrapper-DNwO_82A.js";import"./axisSelectors-Im4hMjdM.js";import"./throttle-DJQOHpml.js";import"./d3-scale-siXpSW3b.js";import"./index-wxI64tZb.js";import"./index-CiAWbHQN.js";import"./renderedTicksSlice-BoqO-m_z.js";import"./index-DmW1QCPA.js";import"./CartesianAxis-D2B7a931.js";import"./Layer-DKzqyPeV.js";import"./types-BZDZh7Dp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CYUUiu8V.js";import"./chartDataContext-B9Fl8ZXu.js";import"./CategoricalChart-za3sj-4w.js";import"./AnimatedItems-BPa7Tabb.js";import"./useAnimationId-DSiNOIGc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-pFBKfI04.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BXPGLF8U.js";import"./tooltipContext-Aojyt3AD.js";import"./RegisterGraphicalItemId-CoAB0bbS.js";import"./ErrorBarContext-XJ_0JE40.js";import"./GraphicalItemClipPath-D8etsuAL.js";import"./SetGraphicalItem-bKrSk8yx.js";import"./getZIndexFromUnknown-DOFGyGAi.js";import"./useGraphicalItemIdentity-DMPVVD7J.js";import"./Curve-Ba1VZ5w3.js";import"./step-D9jBRyHm.js";import"./path-DyVhHtw_.js";import"./ActivePoints-0LdIyAY7.js";import"./Dot-Dq-zru-b.js";import"./getRadiusAndStrokeWidthFromDot-BV5HZWc_.js";import"./useElementOffset-DPucxQk4.js";import"./uniqBy-RBk98CTS.js";import"./iteratee-w700QPS8.js";import"./Cross-oAZsVutq.js";import"./Sector-C-x9nLdk.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
