import{R as t}from"./iframe-C0YxDW4G.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DweGkw3n.js";import{R as l}from"./zIndexSlice-DZlnymAS.js";import{C as x}from"./ComposedChart-D72s1HZM.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CbhUQTYm.js";import{L as a}from"./Line-Cpl-VXWr.js";import{X as c}from"./XAxis-Cpmqfpq_.js";import{T as g}from"./Tooltip-zR4Uhk69.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-gEQqlFEh.js";import"./Text-BVHk9liS.js";import"./resolveDefaultProps-DJlTwR1C.js";import"./DOMUtils-CbyUgj5a.js";import"./isWellBehavedNumber-BBCyva1N.js";import"./useId-DohVK8l3.js";import"./useBackwardsCompatibleTheme-CKP3ZQ-p.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D7SEoPy2.js";import"./index-BVdk1KvG.js";import"./index-CKK11yAc.js";import"./RechartsWrapper-BlkZ7fGa.js";import"./axisSelectors-nVTOJQip.js";import"./throttle-DOQHZSoJ.js";import"./d3-scale-DUyT1Gjc.js";import"./index-BIhmmbcr.js";import"./index-B97k9itH.js";import"./renderedTicksSlice-BVS-v-zq.js";import"./index-Cpic7GAq.js";import"./CartesianAxis-d866ov5z.js";import"./Layer-tJBN4qpr.js";import"./types-CmslNM9O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CyMga4mL.js";import"./chartDataContext-DVZlfd-d.js";import"./CategoricalChart-BIr7jbpw.js";import"./AnimatedItems-DNNl8m9z.js";import"./useAnimationId-BpnQNYpV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cdyy37-n.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ZNrpT7nq.js";import"./tooltipContext-DYl4GNw5.js";import"./RegisterGraphicalItemId-DyGH3H1s.js";import"./ErrorBarContext-_SzMhsus.js";import"./GraphicalItemClipPath-BMlAd1SQ.js";import"./SetGraphicalItem-BTB5LVHV.js";import"./getZIndexFromUnknown-ELRPR1JY.js";import"./useGraphicalItemIdentity-BFvVeiu2.js";import"./dataEntryStyles-BpByYVhN.js";import"./Curve-ID0kLGRf.js";import"./step-BuTfKpR_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-mPjd9m9U.js";import"./Dot-DVL9KKRs.js";import"./getRadiusAndStrokeWidthFromDot-DYSx7Sm5.js";import"./useElementOffset-k9b-gsJZ.js";import"./uniqBy-eGdnF5ge.js";import"./iteratee-Cy8fxwlM.js";import"./Cross-DLa943FX.js";import"./Sector-iXZx7oIx.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
