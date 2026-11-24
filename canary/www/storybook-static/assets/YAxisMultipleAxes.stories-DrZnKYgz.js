import{R as t}from"./iframe-tfZrcrMF.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BOlMvWid.js";import{R as l}from"./zIndexSlice-CC8kCstT.js";import{C as x}from"./ComposedChart-BCjiIJ4o.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BNV61IU6.js";import{L as a}from"./Line-D0Cby_f_.js";import{X as c}from"./XAxis-DhOgSkqh.js";import{T as g}from"./Tooltip-DiMmQvx9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CrLdB5k3.js";import"./Text-DXjy-RzD.js";import"./resolveDefaultProps-BpCpS2kK.js";import"./ZIndexLayer-DnL-EDkP.js";import"./index-CCpPbL-G.js";import"./index-CQW0Ruw4.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D2vFLO2n.js";import"./throttle-DycvlznN.js";import"./axisSelectors-BkiuLlPZ.js";import"./d3-scale-uLY3we2s.js";import"./CartesianAxis-DHW_9iiH.js";import"./Layer-ru88AdSr.js";import"./types-CWW0D7cm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DCheLSnn.js";import"./index-0VCZupX4.js";import"./index-C00ri7pa.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Mi5m4ATr.js";import"./index-DC_tjhxs.js";import"./fillDefinitions-CQPwZfwM.js";import"./CartesianChart-Cxx6k3Ff.js";import"./chartDataContext-pD1W3H_C.js";import"./CategoricalChart-DGtxkSeD.js";import"./dataEntryStyles-CpzODNOV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C_wD8Q_z.js";import"./useAnimationId-CiRiV3_R.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Mflib2w7.js";import"./tooltipContext-C0HD_iam.js";import"./ErrorBarContext-5NXkIyss.js";import"./activeStyles-CW3oynl8.js";import"./SetGraphicalItem-BPWS4To0.js";import"./getZIndexFromUnknown-BvChPoEn.js";import"./useEffectiveDataKey-Bate5zYb.js";import"./omit-DRTsLSTe.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-Ch3PhdMy.js";import"./Curve-C3wk6TDN.js";import"./step-8uwKBSGh.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BER6C4Du.js";import"./Dot-BulvKgA_.js";import"./Symbols-yui_aiRC.js";import"./symbol-ru9lBt2i.js";import"./useElementOffset-BOZs20Ry.js";import"./uniqBy-q1lloGjW.js";import"./iteratee-CDaF10ns.js";import"./Cross-BFqcDJ2_.js";import"./Sector-DobEZmfG.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
