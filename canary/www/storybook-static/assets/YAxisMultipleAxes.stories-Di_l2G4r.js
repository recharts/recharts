import{R as t}from"./iframe-CvMP9Fqo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-tiTGIdx3.js";import{R as l}from"./zIndexSlice-B5trHRCj.js";import{C as x}from"./ComposedChart-BEnlrqE9.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BiTnK4Ai.js";import{L as a}from"./Line-BbvHMrnh.js";import{X as c}from"./XAxis-BVBOoebg.js";import{T as g}from"./Tooltip-B7ps6QuS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BXQPTxU_.js";import"./Text-B1VQrHkc.js";import"./resolveDefaultProps-BGEDHRJM.js";import"./ZIndexLayer-CYiENEwf.js";import"./index-D9jYUR_d.js";import"./index-BZUcM53P.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-6vaNx2fR.js";import"./throttle-MhOaKDgE.js";import"./axisSelectors-B3ymYEcm.js";import"./d3-scale-b8kDtzlH.js";import"./CartesianAxis-BofYDveF.js";import"./Layer-CKCTZlK6.js";import"./types-CEx7Mrjp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DkA6Ce2h.js";import"./index-CDgZ4Loc.js";import"./index-B6lplofW.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CzGrl1eT.js";import"./index-LdeImoL7.js";import"./fillDefinitions-DQU_H3eF.js";import"./CartesianChart-CrVsIyiN.js";import"./chartDataContext-DgCWmyll.js";import"./CategoricalChart-Bvay8eab.js";import"./dataEntryStyles-D8XHfMQr.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DCriiKhl.js";import"./useAnimationId-DS6RlguF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-8hEQ0x22.js";import"./tooltipContext-C9ebZ2Ut.js";import"./ErrorBarContext-BNZINJYG.js";import"./activeStyles-iNSBQg7J.js";import"./SetGraphicalItem-XLvPTSfC.js";import"./getZIndexFromUnknown-BKdlMg06.js";import"./useEffectiveDataKey-BdItYSIh.js";import"./omit-ClIc1avm.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D_Wyck_t.js";import"./step-TJxgmP_3.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dzw5hEuH.js";import"./Dot-RMR8pxKN.js";import"./Symbols-C-TD2pNc.js";import"./symbol-DH04N6rB.js";import"./getRadiusAndStrokeWidthFromDot-CtOVRdjN.js";import"./useElementOffset-Dzn1lI93.js";import"./uniqBy-CNOEx6rm.js";import"./iteratee-CxBX7Jt6.js";import"./Cross-BdV4rx2s.js";import"./Sector-C8zA7xP5.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
