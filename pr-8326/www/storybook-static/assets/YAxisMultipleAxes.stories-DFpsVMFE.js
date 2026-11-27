import{R as t}from"./iframe-PHc5u_Go.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-W1GxgUQy.js";import{R as l}from"./zIndexSlice-O7J7Jeos.js";import{C as x}from"./ComposedChart-CJW-bEl0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BqmF2dhP.js";import{L as a}from"./Line-CScqX6gb.js";import{X as c}from"./XAxis-CwnWWi2T.js";import{T as g}from"./Tooltip-Ixe77Jvi.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CtovE_6b.js";import"./get-CjriyByo.js";import"./Label-B_2vkxlb.js";import"./Text-B4WGoEXs.js";import"./ZIndexLayer-jWs-pX7J.js";import"./index-CENrQ3Fo.js";import"./index-BL548a5i.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C8shuSpM.js";import"./throttle-B7fmfrhU.js";import"./axisSelectors-D8A3lwIR.js";import"./diverging-Ca8JIZw_.js";import"./CartesianAxis-DA5HtWf2.js";import"./Layer-DvHcP4X_.js";import"./types-DsQO6Yiz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B_HpVp09.js";import"./index-B6C2iRoi.js";import"./index-B8MUftfu.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-0aodawEv.js";import"./index-B4O5QRRq.js";import"./fillDefinitions-CfETDC7a.js";import"./CartesianChart-B8odkp-B.js";import"./chartDataContext-uHFtVhR5.js";import"./CategoricalChart-BjWAqdhB.js";import"./dataEntryStyles-B0gayhW-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EDZm1eQj.js";import"./useAnimationId-Crie2Rxs.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-4zLzrPeO.js";import"./tooltipContext-DID6IymL.js";import"./ErrorBarContext-DX7Uypjj.js";import"./activeStyles-C4EAX3cB.js";import"./SetGraphicalItem-CpbhBJBp.js";import"./getZIndexFromUnknown-DVAgy0Q3.js";import"./useEffectiveDataKey-Br4Rw_9X.js";import"./omit-BXi7naXk.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-L9UGnbtt.js";import"./Curve-5DP7CstF.js";import"./step-BRWBSxqC.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BJNvDjHC.js";import"./Dot-CLPkuyBC.js";import"./Symbols-jKk-8HGk.js";import"./symbol-Bn8bSYai.js";import"./useElementOffset-D5tMp2PA.js";import"./uniqBy-2OtzGgB3.js";import"./iteratee-Oda0bPnm.js";import"./Cross-BAq3FLrZ.js";import"./Sector-DSgNE3zK.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
