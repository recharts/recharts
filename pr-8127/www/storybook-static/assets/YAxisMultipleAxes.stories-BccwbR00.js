import{R as t}from"./iframe-l1Y42C0u.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-MT51XlEY.js";import{R as l}from"./zIndexSlice-B33nqsCb.js";import{C as x}from"./ComposedChart-0uZutU6k.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CWc1HL67.js";import{L as a}from"./Line-CJUUfYSp.js";import{X as c}from"./XAxis-B9K8Q1Xb.js";import{T as g}from"./Tooltip-Chbmqq1h.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-sWz5CiLk.js";import"./Text-B6K4_AwF.js";import"./resolveDefaultProps-1jZi99P0.js";import"./DOMUtils-D4PcHABk.js";import"./ZIndexLayer-DxyEEQXG.js";import"./index-DIs184pY.js";import"./index-Cqq6zn6Z.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BQIs9A7o.js";import"./throttle-DAyvkz9h.js";import"./axisSelectors-D7HUEi6M.js";import"./d3-scale-B5Y8SIz5.js";import"./CartesianAxis-tpqsI94N.js";import"./Layer-euAv7Vlw.js";import"./types-CrZHDfLN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D6aSCZ50.js";import"./index-Bn03Joy2.js";import"./index-BwfxQem6.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DOuMjlQh.js";import"./index-BL-lBVJK.js";import"./CartesianChart-DP0lCfag.js";import"./ZIndexPortal-DmDlsnpL.js";import"./CategoricalChart-CsG2T3-z.js";import"./LabelList-CqnzZffr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Gcg8iRps.js";import"./useAnimationId-Df3Y-xS6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CSx2HuI1.js";import"./tooltipContext-BSj91y9Q.js";import"./dataEntryStyles-D_KE_N47.js";import"./fillDefinitions-AHxQevDT.js";import"./themeFill-DQcF-Fqd.js";import"./ErrorBarContext-xxN9WryY.js";import"./activeStyles-De0IjX-U.js";import"./SetGraphicalItem-Do2v7-d1.js";import"./getZIndexFromUnknown-DnteUgzv.js";import"./useEffectiveDataKey-Dv99CamK.js";import"./omit-R_--s2l3.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B3MncDoj.js";import"./step-Be4HSYh6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C9qJ4yHK.js";import"./Dot-CvycDJmI.js";import"./Symbols-CQXeMdB_.js";import"./symbol-K2q-awoK.js";import"./getRadiusAndStrokeWidthFromDot-DDaIFX1-.js";import"./useElementOffset-Dc6g4T8Y.js";import"./uniqBy-BXAphbyZ.js";import"./iteratee-BoMr2KG7.js";import"./Cross-BgI2taLq.js";import"./Sector-B4KLeSUR.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Xt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Xt as __namedExportsOrder,Wt as default};
