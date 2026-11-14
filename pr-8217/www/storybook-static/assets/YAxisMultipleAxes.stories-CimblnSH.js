import{R as t}from"./iframe-BH2TtHlY.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-B0vif2kn.js";import{R as l}from"./zIndexSlice-BUPzf8FY.js";import{C as x}from"./ComposedChart-DsOU5PTg.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BwSDy0e-.js";import{L as a}from"./Line-CrpIiBSr.js";import{X as c}from"./XAxis-COZT_uqw.js";import{T as g}from"./Tooltip-CdFMPcFV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CIPQeI3a.js";import"./Text-CevbSlGY.js";import"./resolveDefaultProps-BaFcvJtj.js";import"./ZIndexLayer-Doizp3A4.js";import"./index-Sghl8E88.js";import"./index-C9KoigcN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CrYx-glo.js";import"./throttle-Dx7o9_lY.js";import"./axisSelectors-DsRwL_k-.js";import"./d3-scale-CXj_dWXw.js";import"./CartesianAxis-0pfTl-hM.js";import"./Layer-IM2jrBt3.js";import"./types-DOMxGpI2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DLQHvIeX.js";import"./index-DPzL1RFj.js";import"./index-TbzLaF3S.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DzLFc6RH.js";import"./index-DbFZkhWq.js";import"./fillDefinitions-BmoMSVON.js";import"./CartesianChart-CdAq2ZGm.js";import"./chartDataContext-CW5gEqv4.js";import"./CategoricalChart-3Oqm6Z_m.js";import"./dataEntryStyles-oNDiL7vD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D0BLzMMy.js";import"./useAnimationId-CDSf-pzR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CWwwV9zV.js";import"./tooltipContext-CxVj4CRN.js";import"./ErrorBarContext-4rxkwyEB.js";import"./activeStyles-C4DAj0Um.js";import"./SetGraphicalItem-Cr0BjIMT.js";import"./getZIndexFromUnknown-BYRlpRYq.js";import"./useEffectiveDataKey-BXRZCQow.js";import"./omit-CLMzz_r6.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CJ99zN7P.js";import"./step-ChPkaUxk.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B7PZUjv_.js";import"./Dot-yQhLEV_U.js";import"./Symbols-CxGDxLq8.js";import"./symbol-Dum7koiK.js";import"./getRadiusAndStrokeWidthFromDot-Cst5_ZvX.js";import"./useElementOffset-BE_errrN.js";import"./uniqBy-BMu_3qtX.js";import"./iteratee-BjDUq9-x.js";import"./Cross-KIhUVeNF.js";import"./Sector-jx2_J3sX.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
