import{R as t}from"./iframe-C9H6nb8O.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DXEeaYcv.js";import{R as l}from"./zIndexSlice-86DFZZsp.js";import{C as x}from"./ComposedChart-cpeiS7Qx.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-iYqbsiP0.js";import{L as a}from"./Line-CmfR4dPi.js";import{X as c}from"./XAxis-CywV301b.js";import{T as g}from"./Tooltip-DQEtwi0s.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-6glZLWD6.js";import"./Text-BU8Is9rY.js";import"./resolveDefaultProps-B_vS2EyS.js";import"./pageBackground-DsggDmpK.js";import"./isWellBehavedNumber-BxcMlH1H.js";import"./useId-pZk3BoDa.js";import"./useBackwardsCompatibleTheme-K49OtSF_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DL3up6PN.js";import"./index-DkNU9Jwj.js";import"./index-BTq_b2hA.js";import"./axisSelectors-CaDgI8Oc.js";import"./throttle-BnpdZ0b3.js";import"./d3-scale-BBLrtWMa.js";import"./CartesianAxis-BWYBJgMt.js";import"./Layer-DNW7nupE.js";import"./types-oEFxgIut.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-TzJYRiTZ.js";import"./index-DOD7xHyz.js";import"./index-d48a0T_2.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Bh_nwwHr.js";import"./index-ByTGeVXQ.js";import"./CartesianChart-Dy945WYe.js";import"./chartDataContext-BNqh0ME9.js";import"./CategoricalChart-BRBdOICb.js";import"./activeStyles-Dwr5_xBc.js";import"./useAnimationId-k6lITT5p.js";import"./dataEntryStyles-CmzRurqC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DUAtv8-f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cv1ZH2em.js";import"./tooltipContext-B6G4DfLA.js";import"./ErrorBarContext-CBrxfbC1.js";import"./GraphicalItemClipPath-Cizji_0l.js";import"./SetGraphicalItem-B5C7hWKX.js";import"./getZIndexFromUnknown-Bwrut4wA.js";import"./useEffectiveDataKey-BpO8_klP.js";import"./Curve-CQId5eMN.js";import"./step-C5UsVhDs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-xNyBthG2.js";import"./Dot-CRvB7d-n.js";import"./getRadiusAndStrokeWidthFromDot-C0Lx-uc8.js";import"./useElementOffset-KKareHqY.js";import"./uniqBy-1ZQrBMnQ.js";import"./iteratee-BR3KUAK-.js";import"./Cross-CYx8WrQR.js";import"./Sector-RczJUp_V.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
