import{R as t}from"./iframe-DI4HGhHh.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-C1Oi2VZJ.js";import{R as l}from"./zIndexSlice-DLsQIX9Y.js";import{C as x}from"./ComposedChart-BT-NJBPH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BCtslQcx.js";import{L as a}from"./Line-BIfkn347.js";import{X as c}from"./XAxis-Dj4RjVoP.js";import{T as g}from"./Tooltip-DGuMnXiM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bfcmt9LS.js";import"./CartesianAxis-XgaOnUyy.js";import"./Layer-2I2RJkTJ.js";import"./resolveDefaultProps-DLUQOXxb.js";import"./Text-BxcnHscC.js";import"./DOMUtils-CCgzbXX3.js";import"./isWellBehavedNumber-BCX7uX26.js";import"./Label-BOdAN_xF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CAI-vp6k.js";import"./index-BwosMlqm.js";import"./index-B5NU_a6D.js";import"./types-BM9AiZnq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CGUH_--9.js";import"./immer-CAVNBYxE.js";import"./RechartsWrapper-DoHqoPfC.js";import"./index-DvTVJIfn.js";import"./index-C0kJRHqc.js";import"./axisSelectors-YTXRCpiD.js";import"./d3-scale-CmlQQQpT.js";import"./CartesianChart-Dp7N-Hpx.js";import"./chartDataContext-GaamtoMW.js";import"./CategoricalChart-D5RDPchP.js";import"./tooltipContext-DfACEnFU.js";import"./AnimatedItems-B_Y2HCHw.js";import"./useAnimationId-B5j5oAoh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CdJqIjzl.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-1xWFxJ9c.js";import"./RegisterGraphicalItemId-C8ygtyRo.js";import"./ErrorBarContext-BHKF_nuF.js";import"./GraphicalItemClipPath-CxUl7p1C.js";import"./SetGraphicalItem-BlwG21oe.js";import"./getZIndexFromUnknown-3dpL5-Eh.js";import"./graphicalItemSelectors-COEWuTcX.js";import"./Curve-D1vPRm9h.js";import"./step-D4TxsChD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Br89aa_G.js";import"./Dot--Dziv_M5.js";import"./getRadiusAndStrokeWidthFromDot-DU4jn54H.js";import"./useElementOffset--KSA65z0.js";import"./uniqBy-DHyoL8un.js";import"./iteratee-D86B-dJN.js";import"./Cross-B3VN6dnN.js";import"./Sector-ohE8-JF6.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
