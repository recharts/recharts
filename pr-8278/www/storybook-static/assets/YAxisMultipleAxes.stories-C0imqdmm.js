import{R as t}from"./iframe-CsBzJ_oY.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BcwvR8DG.js";import{R as l}from"./zIndexSlice-DMNrA3gR.js";import{C as x}from"./ComposedChart-DxnPzYcP.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-3tQtcM5V.js";import{L as a}from"./Line-CCPvJikT.js";import{X as c}from"./XAxis-DUfavQsq.js";import{T as g}from"./Tooltip-Cuif1eCk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BqIt3uIU.js";import"./Text-_hT2aORY.js";import"./resolveDefaultProps-DTmgUguK.js";import"./ZIndexLayer-BgP2DxGj.js";import"./index-ZIwCGu9j.js";import"./index-ANSegWuD.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DNMiXlqe.js";import"./throttle-BC8XINhc.js";import"./axisSelectors-C9oSyHKr.js";import"./d3-scale-eAFxYw1v.js";import"./CartesianAxis-Ct89iDgP.js";import"./Layer-DasxrL-P.js";import"./types-BTltodPN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DmEF733K.js";import"./index-BQIdRebQ.js";import"./index-CyJaGzTs.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BbLnuVBa.js";import"./index-Dtk6Fc20.js";import"./fillDefinitions-CiGFpPDU.js";import"./CartesianChart-BkZkGsdO.js";import"./chartDataContext-C_pMILpz.js";import"./CategoricalChart-DGDB_d9-.js";import"./dataEntryStyles-BxNkTaqU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BSyLp_F2.js";import"./useAnimationId-CwEH45Ii.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DlQXgIQN.js";import"./tooltipContext-CrB6rlIN.js";import"./ErrorBarContext-DJQ_oRWY.js";import"./activeStyles-CWJgi0Pp.js";import"./SetGraphicalItem-Cd415TqE.js";import"./getZIndexFromUnknown-8xU1Q5SP.js";import"./useEffectiveDataKey-P2OtOQRT.js";import"./omit-ZE1N8yBE.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-Hya4Z7ii.js";import"./Curve-FGayhVFg.js";import"./step-HvxF_Jgn.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BGfIVtPb.js";import"./Dot-CnEc0IvV.js";import"./Symbols-u-7YXq8E.js";import"./symbol-BqQr48xZ.js";import"./useElementOffset-CgJ049Q8.js";import"./uniqBy-BzxtSZSo.js";import"./iteratee-deGr8F35.js";import"./Cross-PjRGV7h_.js";import"./Sector-B2C7gSRH.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
