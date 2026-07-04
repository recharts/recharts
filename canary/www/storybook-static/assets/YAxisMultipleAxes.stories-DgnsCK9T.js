import{R as t}from"./iframe-BMwTDcev.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CCCDM9CF.js";import{R as l}from"./zIndexSlice-CPh4fBg6.js";import{C as x}from"./ComposedChart-DZYtQfew.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Sbr_1d-q.js";import{L as a}from"./Line-DUpd8mAG.js";import{X as c}from"./XAxis-7lt7L-uw.js";import{T as g}from"./Tooltip-wlKbbwbE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DZkRw9Hy.js";import"./Layer-DhxEcDzW.js";import"./resolveDefaultProps-DPnbdQu5.js";import"./Text-JRu-Gvgm.js";import"./DOMUtils-BEqLO6hC.js";import"./isWellBehavedNumber-BJdFuSyd.js";import"./Label-nIa50DhA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BzcpQumx.js";import"./index-CE-0bGiS.js";import"./index-3001YAOl.js";import"./types-zXcSMCPW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Co-nhFmz.js";import"./throttle-D2Td0Lm2.js";import"./RechartsWrapper-BRX6xo6C.js";import"./index-ya5mjY_f.js";import"./index-CVc-PuqQ.js";import"./axisSelectors-sdy2ioo_.js";import"./d3-scale-Dl0VFgtV.js";import"./CartesianChart-BteRC4rl.js";import"./chartDataContext-CXqd6BGE.js";import"./CategoricalChart-CdHUt0U8.js";import"./tooltipContext-C32om4rY.js";import"./AnimatedItems-BgUudFYn.js";import"./useAnimationId-CiOVdLQp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-By_LjXZY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BPh2ccfV.js";import"./RegisterGraphicalItemId-B8C7xs2e.js";import"./ErrorBarContext-DgB1iysu.js";import"./GraphicalItemClipPath-C1lbmTQ1.js";import"./SetGraphicalItem-D1eQX8Ui.js";import"./getZIndexFromUnknown-78UrIRyD.js";import"./graphicalItemSelectors-B0JMcxas.js";import"./Curve-DSVLafFk.js";import"./step-BkUkyWe_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C2MaqzXC.js";import"./Dot-KOqs7h1g.js";import"./getRadiusAndStrokeWidthFromDot-DrCQxCSe.js";import"./useElementOffset-CtkGwEHZ.js";import"./uniqBy-pyVWw1j2.js";import"./iteratee-CJeFQgUm.js";import"./Cross-DHXtJImm.js";import"./Sector-p7PlKC-2.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
