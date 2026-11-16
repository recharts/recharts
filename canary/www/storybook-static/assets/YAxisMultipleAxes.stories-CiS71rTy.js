import{R as t}from"./iframe-1fJ5z_WZ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-De-4AuvJ.js";import{R as l}from"./zIndexSlice-BJlX5T59.js";import{C as x}from"./ComposedChart-Ejf7RFZN.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bxudt8Ic.js";import{L as a}from"./Line-CbRnIiBV.js";import{X as c}from"./XAxis-Kvj5vG7_.js";import{T as g}from"./Tooltip-B7I7h11K.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C7hOOLTD.js";import"./Text-BeONQBVt.js";import"./resolveDefaultProps-DpYz-CI8.js";import"./ZIndexLayer-CrU6dYup.js";import"./index-DsJre9D2.js";import"./index-CN35TrPh.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DJTK4O93.js";import"./throttle-6GiZsFaS.js";import"./axisSelectors-V7mZ-cGP.js";import"./d3-scale-DqY1ZQ_w.js";import"./CartesianAxis-DL2qV91b.js";import"./Layer-6gV2DTZI.js";import"./types-XVdAxFZ3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C4Oi_vEC.js";import"./index-n_irgge3.js";import"./index-BVEyPHm4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CR62a_mQ.js";import"./index-Cn_Mqps3.js";import"./fillDefinitions-BKoNuBLW.js";import"./CartesianChart-DqvtgvX5.js";import"./chartDataContext-B7GlDzou.js";import"./CategoricalChart-DhN17CFo.js";import"./dataEntryStyles-CqRs5fjI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-kcn0wIRK.js";import"./useAnimationId-BaNyc8zg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DH_zMc_D.js";import"./tooltipContext-BvBvAVwb.js";import"./ErrorBarContext-CHpXmxM4.js";import"./activeStyles-C3pl5b-R.js";import"./SetGraphicalItem-BkhZc2Qn.js";import"./getZIndexFromUnknown-C3twUa9l.js";import"./useEffectiveDataKey-BB-f3APH.js";import"./omit-C4r1CQBm.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D2bzFbuS.js";import"./step-DaCSxOe-.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D175dDtY.js";import"./Dot-B85RmoVX.js";import"./Symbols-CPapFf10.js";import"./symbol-CvHFU9Z0.js";import"./getRadiusAndStrokeWidthFromDot-BILnwdsR.js";import"./useElementOffset-DE_GKN50.js";import"./uniqBy-C60c41gU.js";import"./iteratee-DEMDIKbX.js";import"./Cross-Ceq7OV8j.js";import"./Sector-08zMVhX6.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
