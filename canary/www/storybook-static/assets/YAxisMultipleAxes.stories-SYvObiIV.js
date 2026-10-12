import{R as t}from"./iframe-BobpZpVS.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BrRETyZ5.js";import{R as l}from"./zIndexSlice-B5VUc3FO.js";import{C as x}from"./ComposedChart-BGA7EeyT.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C_RTq5fO.js";import{L as a}from"./Line-BliFn9Dn.js";import{X as c}from"./XAxis-BH9jyr1P.js";import{T as g}from"./Tooltip-D_aCS2jn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BmZLFZpv.js";import"./Text-BN-_pQam.js";import"./resolveDefaultProps-5KovoEsD.js";import"./pageBackground-DetAsOi9.js";import"./isWellBehavedNumber-DQVuNcQo.js";import"./useId-Fbd6tkKG.js";import"./useBackwardsCompatibleTheme-BHDQUTNL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bl_UcLFa.js";import"./index-DvsroPxE.js";import"./index-hH2wUpdj.js";import"./axisSelectors-Bu_v2Lbu.js";import"./throttle-fEV8U6G7.js";import"./d3-scale-VuFeIDMA.js";import"./CartesianAxis-BxngHTzr.js";import"./Layer-Clw1CWo5.js";import"./types-C4bXB_C_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BCdbdoOJ.js";import"./index-C6hjAe0R.js";import"./index-CSAFGNBA.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DSKVysWi.js";import"./index-RL4br-tv.js";import"./CartesianChart-DSfZoi_U.js";import"./chartDataContext-C6lKjqxm.js";import"./CategoricalChart-DkLSs2T9.js";import"./activeStyles-DmXgXh0p.js";import"./useAnimationId-IPDjwgCP.js";import"./dataEntryStyles-JNlk2hjG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D8bi7cvO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-FaefHkVT.js";import"./tooltipContext-CyAgMDe_.js";import"./ErrorBarContext-CJCBopYS.js";import"./GraphicalItemClipPath-DHs6ehgp.js";import"./SetGraphicalItem-BeNFDElG.js";import"./getZIndexFromUnknown-D78ZgfAB.js";import"./useEffectiveDataKey-CwNvQLsF.js";import"./Curve-CcNLhp3P.js";import"./step-jQ6ElyLT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C8uj9bPt.js";import"./Dot--zx8-KPd.js";import"./getRadiusAndStrokeWidthFromDot-CIGb04Tt.js";import"./useElementOffset-B88yDXSB.js";import"./uniqBy-CPmUYUdg.js";import"./iteratee-v_noJUXw.js";import"./Cross-CeLxTsAz.js";import"./Sector-BE7b76Fg.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
