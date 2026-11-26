import{R as t}from"./iframe-cV3SAodv.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DYud1g9H.js";import{R as l}from"./zIndexSlice-Cjgp2TXV.js";import{C as x}from"./ComposedChart-Bqs-Kl5O.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-1EgLCe52.js";import{L as a}from"./Line-DOqIdMIn.js";import{X as c}from"./XAxis-BuIJ_QWG.js";import{T as g}from"./Tooltip-KrO3BR4a.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C4GEEUb1.js";import"./get-CjriyByo.js";import"./Label-CQK_czyp.js";import"./Text-DIOCtNrm.js";import"./ZIndexLayer-C_9SlmyF.js";import"./index-DNgMIzR1.js";import"./index-CaZV8WiE.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors--xQAorkv.js";import"./throttle-CMi-pHht.js";import"./axisSelectors-C9H2pU_G.js";import"./diverging-y_crYDj7.js";import"./CartesianAxis-BCSNf2Xf.js";import"./Layer-zGQNaeEg.js";import"./types-CxXTSyDH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BtGm49YF.js";import"./index-yYdNmmg6.js";import"./index-DTNI7e-E.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CyX-rkWs.js";import"./index-Dt1fVd2j.js";import"./fillDefinitions-DbiqT5_A.js";import"./CartesianChart-BWo1r9td.js";import"./chartDataContext-Da1Grc9c.js";import"./CategoricalChart-CWv6udzl.js";import"./dataEntryStyles-Cky1CNqk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BBeAx3Mp.js";import"./useAnimationId-DD8tFxYJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-kkzOPQE8.js";import"./tooltipContext-SZd6u1DI.js";import"./ErrorBarContext-CopN05Qu.js";import"./activeStyles-BPuHxpJZ.js";import"./SetGraphicalItem-B6xdOYOb.js";import"./getZIndexFromUnknown-B0LMJWL-.js";import"./useEffectiveDataKey-DBeKKq_r.js";import"./omit-A4HqYJzm.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-C4ogZ01-.js";import"./Curve-CeApDEIq.js";import"./step-miPDfXCq.js";import"./path-BBMZd4YL.js";import"./ActivePoints-C5tqNSRW.js";import"./Dot-DlXY1cPq.js";import"./Symbols-Sv15_QUP.js";import"./symbol-rfkqyrPT.js";import"./useElementOffset-CFDuhw8U.js";import"./uniqBy-5kbtoCpG.js";import"./iteratee-DH-5OUvh.js";import"./Cross-DKNOH1xZ.js";import"./Sector-BhPFPfN5.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
