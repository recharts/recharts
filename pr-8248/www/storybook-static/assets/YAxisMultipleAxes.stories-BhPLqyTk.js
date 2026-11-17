import{R as t}from"./iframe-DQIHw-Vj.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BRNNX1VG.js";import{R as l}from"./zIndexSlice-DLnqMvRR.js";import{C as x}from"./ComposedChart-Bq6suzwR.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dxm-nh1c.js";import{L as a}from"./Line-CwKp4y3S.js";import{X as c}from"./XAxis-C1j7r1zg.js";import{T as g}from"./Tooltip-hF8WqyNy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CDOIzumT.js";import"./Text-UFCPlRdh.js";import"./resolveDefaultProps-DCDPXacx.js";import"./ZIndexLayer-cKbXtIsu.js";import"./index-ddMf2qZl.js";import"./index-DvzJj3QK.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CO8YfrX5.js";import"./throttle-CsL6-oT8.js";import"./axisSelectors-BOWof0F_.js";import"./d3-scale-D3QDia2a.js";import"./CartesianAxis-uR_V8Oxl.js";import"./Layer-Dtg1l4X7.js";import"./types-DC02XBeR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DWNRUwtc.js";import"./index-CAKt4SRE.js";import"./index-ej37J0iC.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BOwBRf5q.js";import"./index-DdSRFntK.js";import"./fillDefinitions-T89P4CC8.js";import"./CartesianChart-e9rrIYqD.js";import"./chartDataContext-D7ij0_Rh.js";import"./CategoricalChart-DgxyBa1d.js";import"./dataEntryStyles-CRT7gJOj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bd8I5Mu8.js";import"./useAnimationId-BGqCxB5a.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-sNC7IbT4.js";import"./tooltipContext-Bf6OH0S4.js";import"./ErrorBarContext-DeOd0WHi.js";import"./activeStyles-DlG12Hxm.js";import"./SetGraphicalItem-xxOWq2oE.js";import"./getZIndexFromUnknown-BwTxVF7X.js";import"./useEffectiveDataKey-DXNQs5X4.js";import"./omit-BvCra_Tw.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BtNwq4SW.js";import"./Curve-BGOWFPUa.js";import"./step-WCAmzMpM.js";import"./path-DyVhHtw_.js";import"./ActivePoints-fySHDRUR.js";import"./Dot-so438WjJ.js";import"./Symbols-Derc8Zbt.js";import"./symbol-DHOCB5wG.js";import"./useElementOffset-B-UoXHul.js";import"./uniqBy-DLWeu4D6.js";import"./iteratee-BZDFIkpf.js";import"./Cross-DpX9ppW_.js";import"./Sector-BQCU8Weg.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
