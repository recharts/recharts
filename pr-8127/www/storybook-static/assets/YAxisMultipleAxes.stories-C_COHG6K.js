import{R as t}from"./iframe-3XHGwrzY.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BDE7drTG.js";import{R as l}from"./zIndexSlice-Brmhs58T.js";import{C as x}from"./ComposedChart-3w0CXkas.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CC8Y8PHQ.js";import{L as a}from"./Line-CZeg6v99.js";import{X as c}from"./XAxis-DAbWxmV3.js";import{T as g}from"./Tooltip-DQGZOZkM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DV0q5jx7.js";import"./Text-BPYl0AVs.js";import"./resolveDefaultProps-B1pnPDuf.js";import"./DOMUtils-CArHkVGP.js";import"./ZIndexLayer-Da5OPXz2.js";import"./index-DfXu2aPp.js";import"./index-x3pA7Xn9.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DX_jscyS.js";import"./throttle-CcufCSOD.js";import"./axisSelectors-0sscf7qw.js";import"./d3-scale-DC4T9Y5K.js";import"./CartesianAxis-rPfnZIs4.js";import"./Layer-Cs_-jK6s.js";import"./types-DBamYHnY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dj_CVdaS.js";import"./index-CxvxzVyz.js";import"./index-Bka_NUAq.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DFT9i2CK.js";import"./index-B22a4gCm.js";import"./CartesianChart-CeapXKiM.js";import"./ZIndexPortal-v1uidM1c.js";import"./CategoricalChart-D2_ES5Wf.js";import"./LabelList-KPZxqPb8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BvFpd_DO.js";import"./useAnimationId-9M90yRIF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-VZdYbIVb.js";import"./tooltipContext-dsgQ_cgj.js";import"./dataEntryStyles-DQz1PP-z.js";import"./fillDefinitions-Czp8LH37.js";import"./themeFill-BM4c2Gyu.js";import"./ErrorBarContext-N4SBTIIF.js";import"./activeStyles-Pcudkpr-.js";import"./SetGraphicalItem-pMWsFYWu.js";import"./getZIndexFromUnknown-BCOI3m4Q.js";import"./useEffectiveDataKey-3BqFsLAv.js";import"./omit-D10Ycyv8.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BVBbiuI4.js";import"./step-DpyDB26Q.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CP837bSg.js";import"./Dot-aAEHGIGY.js";import"./Symbols-CVFCOhtY.js";import"./symbol-Bnf2KWTy.js";import"./getRadiusAndStrokeWidthFromDot-C8YM2wm9.js";import"./useElementOffset-B4umSDLo.js";import"./uniqBy-B1y1vTmS.js";import"./iteratee-P6PZZRrs.js";import"./Cross-CcizPSQC.js";import"./Sector-B8S12vxL.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
