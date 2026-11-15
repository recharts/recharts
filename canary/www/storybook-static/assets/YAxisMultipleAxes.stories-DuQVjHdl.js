import{R as t}from"./iframe--N-T_hBz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DsuWS9IR.js";import{R as l}from"./zIndexSlice-BrmEEgcV.js";import{C as x}from"./ComposedChart-Cmhus7DD.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Occbe1AV.js";import{L as a}from"./Line-DFZhpl4a.js";import{X as c}from"./XAxis-DdKAxJ7S.js";import{T as g}from"./Tooltip-BblCHtO7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DcuyFpKL.js";import"./Text-B6x9BsBz.js";import"./resolveDefaultProps-BZdVkepW.js";import"./ZIndexLayer-PDpl17Qr.js";import"./index-CltnTfg9.js";import"./index-C2LKm9xK.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Ch50KZor.js";import"./throttle-DiHBngta.js";import"./axisSelectors-dSJNPUYj.js";import"./d3-scale-syhDUnOY.js";import"./CartesianAxis-D25MAZFZ.js";import"./Layer-1myxLhO2.js";import"./types-CDdNjsiG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C7C4TYLP.js";import"./index-DQLg1InC.js";import"./index-DSO52ANi.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Dga53r6u.js";import"./index-BiiWPIDX.js";import"./fillDefinitions-DLkX59y8.js";import"./CartesianChart-DXdGkfOu.js";import"./chartDataContext-CXOzC9oO.js";import"./CategoricalChart-CbkCL8Oe.js";import"./dataEntryStyles-CggySQjW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C0b2pOCq.js";import"./useAnimationId-B0H5IbY6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DxAwIp1Y.js";import"./tooltipContext-DSz7WbbM.js";import"./ErrorBarContext-Cxj8MR3w.js";import"./activeStyles-CQz5jccO.js";import"./SetGraphicalItem-BuNZMI4X.js";import"./getZIndexFromUnknown-0NIZVPm3.js";import"./useEffectiveDataKey-ehD4S_ma.js";import"./omit-CZqsuqgq.js";import"./isArguments-yB-y1yaH.js";import"./Curve-AUzua7kl.js";import"./step-BCTml7Sd.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BSj_UmGI.js";import"./Dot-MqsnkUih.js";import"./Symbols-DyIGA9sv.js";import"./symbol-Dc0-FYjy.js";import"./getRadiusAndStrokeWidthFromDot-C_-ClNXz.js";import"./useElementOffset-DwViDVhc.js";import"./uniqBy-Ba4jswSg.js";import"./iteratee-CiVllZTn.js";import"./Cross-BpIRhDE_.js";import"./Sector-Bqy4ZQqB.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
