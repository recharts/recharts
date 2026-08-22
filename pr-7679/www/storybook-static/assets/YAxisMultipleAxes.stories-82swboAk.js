import{R as t}from"./iframe-DXHKQ-h8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BhGHb5Me.js";import{R as l}from"./zIndexSlice-CsQg_s5y.js";import{C as x}from"./ComposedChart-C6cxeCbV.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-jQmahhsK.js";import{L as a}from"./Line-BiDvAtOX.js";import{X as c}from"./XAxis-Ckl7Pa3u.js";import{T as g}from"./Tooltip-CaMm8fLh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BCe67yO0.js";import"./Text-Bb1JrkH_.js";import"./resolveDefaultProps-CH3DJ1U7.js";import"./DOMUtils-BSgnm9w6.js";import"./isWellBehavedNumber-B2OYT9p4.js";import"./useId-DlJk-nhm.js";import"./useBackwardsCompatibleTheme-DuqY5Wqi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DLuwldtV.js";import"./index-BoMz0vXG.js";import"./index-Bfb_F_qW.js";import"./RechartsWrapper-NUOxXBTc.js";import"./index-D51whMVe.js";import"./index-DQazPbcg.js";import"./throttle-CSmQrAIR.js";import"./axisSelectors-C2FhXeDp.js";import"./d3-scale-x1kkipsN.js";import"./renderedTicksSlice-B6yr5Yhh.js";import"./CartesianAxis-eQGKlaa2.js";import"./Layer-D8Of9gCi.js";import"./types-C9KPOeuA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BAA2O-Wi.js";import"./chartDataContext-Co2nG42J.js";import"./CategoricalChart-njav6Y1l.js";import"./AnimatedItems-BnmUd_N9.js";import"./useAnimationId-WfbS1c84.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CKUxhVqo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_tGIq0b.js";import"./tooltipContext-ChXEFAAD.js";import"./RegisterGraphicalItemId-B_2bGmJg.js";import"./ErrorBarContext-CdeH4fn3.js";import"./GraphicalItemClipPath-BZQLFBTi.js";import"./SetGraphicalItem-CODvRDn4.js";import"./getZIndexFromUnknown-CPXIhHj8.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Di3e24UN.js";import"./Curve-CiIvzF30.js";import"./step-Bw_C9qgc.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BXDp0MVl.js";import"./Dot-yuxaqmcb.js";import"./getRadiusAndStrokeWidthFromDot-C7lzhg_f.js";import"./useElementOffset-CgmBroAF.js";import"./uniqBy-iZsqe27X.js";import"./iteratee-BWIQYiSv.js";import"./Cross-CKDUda6N.js";import"./Sector-CDqnRj6s.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
