import{R as t}from"./iframe-CUvNAvus.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BY3XsiJB.js";import{R as l}from"./zIndexSlice-D-rH8vD1.js";import{C as x}from"./ComposedChart-CpK6zK-b.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BZ_ejKun.js";import{L as a}from"./Line-DZZP5hqp.js";import{X as c}from"./XAxis-CM346fVw.js";import{T as g}from"./Tooltip-Ba60ewZ3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B7OEZM_6.js";import"./Text-BRc4p81h.js";import"./resolveDefaultProps-3SUBoYwM.js";import"./ZIndexLayer-CPI_Yi1m.js";import"./index-Cp_pTOca.js";import"./index-CAWn2Z9i.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B2l_kUqX.js";import"./throttle-CYllgfiW.js";import"./axisSelectors-Xjgkf-2T.js";import"./d3-scale-CA_D1sKG.js";import"./CartesianAxis-BL1UgLf5.js";import"./Layer-CoFmyLu_.js";import"./types-CsWgfhSt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-A7Y2iS9L.js";import"./index-BMOBZiEl.js";import"./index-58JkOBJX.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BjljmlV4.js";import"./index-BkH-1jYD.js";import"./fillDefinitions-Dr0Z3ytP.js";import"./CartesianChart-cFWvwfAO.js";import"./chartDataContext-CYuQBQZt.js";import"./CategoricalChart-BW_ZnICB.js";import"./dataEntryStyles-C_QXXqcb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DEfxlhJq.js";import"./useAnimationId-BneLXqad.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Davo8QQp.js";import"./tooltipContext-SftmL3Js.js";import"./ErrorBarContext-C0H1v8By.js";import"./activeStyles-DPihfCdA.js";import"./SetGraphicalItem-DRGWCaTd.js";import"./getZIndexFromUnknown-CoqoIK0W.js";import"./useEffectiveDataKey-BAjzW2qT.js";import"./omit-CROME7CD.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BfiOw2M0.js";import"./Curve-C_xw8Bh0.js";import"./step-DRuHJRtS.js";import"./path-BBMZd4YL.js";import"./ActivePoints-d-D6hIRO.js";import"./Dot-Dg1tnWhx.js";import"./Symbols-CmJ419_u.js";import"./symbol-CLRUs3HG.js";import"./useElementOffset-DyhJv7Tq.js";import"./uniqBy-CzilxMyM.js";import"./iteratee-BTZk3n5k.js";import"./Cross-C_tBJAja.js";import"./Sector-ChBmv1Cu.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
