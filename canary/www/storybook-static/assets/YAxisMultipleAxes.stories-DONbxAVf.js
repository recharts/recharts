import{R as t}from"./iframe-D_03ePl7.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BYLx-dFj.js";import{R as l}from"./zIndexSlice-gI7CPKt8.js";import{C as x}from"./ComposedChart-BTDnFjfj.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BWpXlTgZ.js";import{L as a}from"./Line-BNGgDTi-.js";import{X as c}from"./XAxis-CjKd6FOO.js";import{T as g}from"./Tooltip-B2s0sIRi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BQXHRFnW.js";import"./Text-Z5PwaRTj.js";import"./resolveDefaultProps-C_535qvz.js";import"./pageBackground-2sAJZ1tz.js";import"./isWellBehavedNumber-08WJO6-p.js";import"./useId-BHfhqUC8.js";import"./useBackwardsCompatibleTheme-CFqJibBS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CAYdtHvW.js";import"./index-CbBA7rES.js";import"./index-Hu7BLM9I.js";import"./axisSelectors-CyxZNoxv.js";import"./throttle-DlozmNLH.js";import"./d3-scale-CS5gmyGm.js";import"./CartesianAxis-C3nD1dv8.js";import"./Layer-PN0rvZRP.js";import"./types-dtQ43_yo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DL9pT9-E.js";import"./index-DmfSCfAr.js";import"./index-CsBIVix0.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-B_Jo0xL0.js";import"./index-Dlf7H1uA.js";import"./CartesianChart-B_RdHXsl.js";import"./chartDataContext-sh7W2Xea.js";import"./CategoricalChart-Wu8m05Op.js";import"./activeStyles-BEtEtj28.js";import"./useAnimationId-CBDTDHfD.js";import"./dataEntryStyles-eD8YHQf_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdU_MFIg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DGMvpmsE.js";import"./tooltipContext-DTMzdFRl.js";import"./ErrorBarContext-DFl8QQpS.js";import"./GraphicalItemClipPath-Dpw0HOzQ.js";import"./SetGraphicalItem-CJI-A4Bp.js";import"./getZIndexFromUnknown-CAhvpo2r.js";import"./useEffectiveDataKey-OYuZWKUp.js";import"./Curve-BOXPF2Cl.js";import"./step-P_HLonsz.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BxKnLR-Y.js";import"./Dot-WWJXawog.js";import"./getRadiusAndStrokeWidthFromDot-BIFluFxo.js";import"./useElementOffset-DakWzhaz.js";import"./uniqBy-C4oZiLR-.js";import"./iteratee-DYmUi1kx.js";import"./Cross-G9TGKT1L.js";import"./Sector-R2EIboYZ.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
