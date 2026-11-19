import{R as t}from"./iframe-Cd5XZAZS.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BKK4Q1hO.js";import{R as l}from"./zIndexSlice-DK_btX6x.js";import{C as x}from"./ComposedChart-C4dh_bHB.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-o2aavwFb.js";import{L as a}from"./Line-DSgOWsRQ.js";import{X as c}from"./XAxis-DuodIejs.js";import{T as g}from"./Tooltip-GIjK-7uw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DZuK-EQs.js";import"./Text-wtrDapFR.js";import"./resolveDefaultProps-_VGnYbPZ.js";import"./ZIndexLayer-CbCfhAbh.js";import"./index-B-TxKf-H.js";import"./index-Co6Bjw3c.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-n6B6BMl9.js";import"./throttle-PHSKRlho.js";import"./axisSelectors-BHI5fpRs.js";import"./d3-scale-CgwU88kX.js";import"./CartesianAxis-DJMJDg5E.js";import"./Layer-B_2Ec-2K.js";import"./types-GkAdah5a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DPOz0IRP.js";import"./index-CvnUfrKo.js";import"./index-DVl92vRy.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-m0J5sskz.js";import"./index-xt3fboRF.js";import"./fillDefinitions-DUfOk_XW.js";import"./CartesianChart-DgF2iEt1.js";import"./chartDataContext-BT9LVt8h.js";import"./CategoricalChart-CUQRrDXZ.js";import"./dataEntryStyles-CotdwlGF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D-47M3_e.js";import"./useAnimationId-_tPgr2CA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ckMpYydv.js";import"./tooltipContext-C82edudL.js";import"./ErrorBarContext-BXlIU5Wf.js";import"./activeStyles-BcTmj77e.js";import"./SetGraphicalItem-pIsvI9Mb.js";import"./getZIndexFromUnknown-6NoZOlDS.js";import"./useEffectiveDataKey-Cop8dd2N.js";import"./omit-CnZMpust.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-l9UD6a4a.js";import"./Curve-CXblHPne.js";import"./step-Cqk_pcFb.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BkMJ028i.js";import"./Dot-DRLqVGoB.js";import"./Symbols-CoJLGMis.js";import"./symbol-ZYu2ZO_N.js";import"./useElementOffset-C_w2V4jv.js";import"./uniqBy-C5fXCJV1.js";import"./iteratee-BY7Di4wg.js";import"./Cross-BVSjPeqK.js";import"./Sector-ExZXAFnz.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
