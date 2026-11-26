import{R as t}from"./iframe-Dc30QV19.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-4iRuFsIi.js";import{R as l}from"./zIndexSlice-CpA2ZBZb.js";import{C as x}from"./ComposedChart-DaHY5lvU.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DAcc16z4.js";import{L as a}from"./Line-Dt1yHtoT.js";import{X as c}from"./XAxis-BcaW8pnZ.js";import{T as g}from"./Tooltip-lztVFhcX.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BBlVWROq.js";import"./get-CjriyByo.js";import"./Label-pzKHNVcm.js";import"./Text-B2SIM4yQ.js";import"./ZIndexLayer-FU_VBeuI.js";import"./index-BBeDNEC1.js";import"./index-BhEbM2Je.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DgLFgBab.js";import"./throttle-WMkM63z_.js";import"./axisSelectors-BahrCffV.js";import"./diverging-BSORqksa.js";import"./CartesianAxis-CybNaUvq.js";import"./Layer-Ckk2aNrm.js";import"./types-Df_aU1u_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ComULkWM.js";import"./index-C7W3-csu.js";import"./index-LKWh_pde.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BRR6oB9d.js";import"./index-BZTDCkN5.js";import"./fillDefinitions-k1q4zEei.js";import"./CartesianChart-DJeDin18.js";import"./chartDataContext-P9nX9sOh.js";import"./CategoricalChart-f6DbLMMc.js";import"./dataEntryStyles-m1FbV_av.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-iIoXGW1W.js";import"./useAnimationId-dTayRcrW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DX-4aapg.js";import"./tooltipContext-CKfMhL_F.js";import"./ErrorBarContext-CnjMgqWz.js";import"./activeStyles-CSTRknfO.js";import"./SetGraphicalItem-Bi2jD4aD.js";import"./getZIndexFromUnknown-BUaMzbe5.js";import"./useEffectiveDataKey-CqfC1MRQ.js";import"./omit-D5h9y2uM.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-EGGU3KdZ.js";import"./Curve-C3EkNIPD.js";import"./step-DiRHFC6W.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BEziX1h5.js";import"./Dot-DSqKqZYM.js";import"./Symbols-DoXC1ptL.js";import"./symbol-Bi8SUrQz.js";import"./useElementOffset-zZqt_kY_.js";import"./uniqBy-CFq97YsS.js";import"./iteratee-DUr8YIIJ.js";import"./Cross-CfZJmYUc.js";import"./Sector-D2Q0-3lo.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
