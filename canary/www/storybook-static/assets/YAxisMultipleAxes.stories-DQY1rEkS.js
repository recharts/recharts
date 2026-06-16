import{R as t}from"./iframe-Dsugo_zg.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BOEdL1M7.js";import{R as l}from"./zIndexSlice-CQ8Dq6Rw.js";import{C as x}from"./ComposedChart-Clv-J78V.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BZvBFTcM.js";import{L as a}from"./Line-Ng1r7DkL.js";import{X as c}from"./XAxis-BtWHE8Ii.js";import{T as g}from"./Tooltip-D4JKW0Gd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-B4-DsMlp.js";import"./CartesianAxis-1FBfSHCk.js";import"./Layer-PDKsNXXB.js";import"./resolveDefaultProps-ByiopbeA.js";import"./Text-BrgPWmaV.js";import"./DOMUtils-Bp38L-kM.js";import"./isWellBehavedNumber-BXhYPRs7.js";import"./Label-Dv0ON-tn.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CosUoOTg.js";import"./index-hfwoyc40.js";import"./index-BltQKr7J.js";import"./types-BdpIxXW8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CsDLwy59.js";import"./immer-Dn_ZGj_2.js";import"./RechartsWrapper-D3mVticM.js";import"./index-B1HEKGfm.js";import"./index-B6DCYcPU.js";import"./axisSelectors-DuSkawJ1.js";import"./d3-scale-C9TIKeBC.js";import"./string-B6fdYHAA.js";import"./CartesianChart-UK3tQwAh.js";import"./chartDataContext-D_whFwD4.js";import"./CategoricalChart-FdwMdvH0.js";import"./tooltipContext-BGk27Aep.js";import"./AnimatedItems-BcVxVlvs.js";import"./useAnimationId-BEJfwvjz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-6j2cXDPI.js";import"./ActiveShapeUtils-DQiBB_Ml.js";import"./RegisterGraphicalItemId-VkMnq2n0.js";import"./ErrorBarContext-BTy60tqZ.js";import"./GraphicalItemClipPath-DVeVc-Gk.js";import"./SetGraphicalItem-CiVD-7Sz.js";import"./getZIndexFromUnknown-D5sXd5s7.js";import"./graphicalItemSelectors-CtWRHLh-.js";import"./Curve-ZHf_GWFM.js";import"./step-BaYniHaQ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B-oBY2kZ.js";import"./Dot-zHN_KyIs.js";import"./getRadiusAndStrokeWidthFromDot-BuDs2Yv2.js";import"./useElementOffset-Ckhk56wk.js";import"./uniqBy-BVaAsoy2.js";import"./iteratee-BfnyOwZq.js";import"./Cross-BWkIDfq-.js";import"./Sector-ByCcrvia.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
