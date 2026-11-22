import{R as t}from"./iframe-D3OoUODQ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CK0GC31X.js";import{R as l}from"./zIndexSlice-COWEW-Xi.js";import{C as x}from"./ComposedChart-DQRy8yMm.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-nA39Hisg.js";import{L as a}from"./Line-DTJc0zlp.js";import{X as c}from"./XAxis-DxYJ1EU_.js";import{T as g}from"./Tooltip-DbEsMo9d.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DLZY1r_b.js";import"./Text-B7Tip8P2.js";import"./resolveDefaultProps-D7e-YcsR.js";import"./ZIndexLayer-pJsGLsvY.js";import"./index-BvJXc9H1.js";import"./index-DNUqbDgJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BlC5408P.js";import"./throttle-xK3Qigov.js";import"./axisSelectors-DItDxN6k.js";import"./d3-scale-Bhy6LUlh.js";import"./CartesianAxis-CVUrBvYb.js";import"./Layer-CUNP0nq5.js";import"./types-CZJIyhtF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bv3FRj9F.js";import"./index-CwGsCBa_.js";import"./index-E-9zXcGM.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DuOKGUDD.js";import"./index-C8PiA1g3.js";import"./fillDefinitions-C2yGMN51.js";import"./CartesianChart-C7rzbaUy.js";import"./chartDataContext-BbEB-BoJ.js";import"./CategoricalChart-CKoarJJf.js";import"./dataEntryStyles-k3Cv11yP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Sm9oSXXR.js";import"./useAnimationId-z8xHYNfC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--1e6XE9v.js";import"./tooltipContext-CJg0X2MT.js";import"./ErrorBarContext-Cw_znsk2.js";import"./activeStyles-DXsSD8Lh.js";import"./SetGraphicalItem-BlH5pIAO.js";import"./getZIndexFromUnknown-ijBmR_kd.js";import"./useEffectiveDataKey-BHKjwOuj.js";import"./omit-D5BHBEpf.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-C3VB5n7j.js";import"./Curve-eYin-GPV.js";import"./step-FwrJA5dq.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BDuWcJUa.js";import"./Dot-DopO49Vm.js";import"./Symbols-BcqMzhTU.js";import"./symbol-CCC5v9lz.js";import"./useElementOffset-C-GaNZer.js";import"./uniqBy-UVF7xo-s.js";import"./iteratee-VlIYTG9d.js";import"./Cross-C2kdLByN.js";import"./Sector-CRAkgMpQ.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
