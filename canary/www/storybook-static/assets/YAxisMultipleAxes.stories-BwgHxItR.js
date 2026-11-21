import{R as t}from"./iframe-C9RR7JmE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-Bsmg8WZC.js";import{R as l}from"./zIndexSlice-9FgFGtgA.js";import{C as x}from"./ComposedChart-DzefamiH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CLVp3j9W.js";import{L as a}from"./Line-CsoZzsvT.js";import{X as c}from"./XAxis-B6hKXJep.js";import{T as g}from"./Tooltip-D7Jum6np.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BaLJb5QI.js";import"./Text-m7bywbsW.js";import"./resolveDefaultProps-BS9vZKxy.js";import"./ZIndexLayer-CRt4gP-q.js";import"./index-C9sROg_Y.js";import"./index-DobETtGM.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-fbcgHrSa.js";import"./throttle-CSzDQiVS.js";import"./axisSelectors-TgtedVmF.js";import"./d3-scale-CFw4t_7I.js";import"./CartesianAxis-DmiMG-c8.js";import"./Layer-CF0GFBX9.js";import"./types-DEp2f933.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DG_92KFR.js";import"./index-Bp7vSvmR.js";import"./index-C4LPcI60.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bb98fXCM.js";import"./index-Dim785Oy.js";import"./fillDefinitions-BD293OF_.js";import"./CartesianChart-bv1G3A4F.js";import"./chartDataContext--IWIWppp.js";import"./CategoricalChart-CUD-tLds.js";import"./dataEntryStyles-B4uCvMTS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DHyKIA3T.js";import"./useAnimationId-P10-1iqt.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-xp9QUtvW.js";import"./tooltipContext-DYnawDxk.js";import"./ErrorBarContext-D5q20nPS.js";import"./activeStyles-psvB14ar.js";import"./SetGraphicalItem-D9jhbnIr.js";import"./getZIndexFromUnknown-Ar2F7VLj.js";import"./useEffectiveDataKey-rhz_g6ic.js";import"./omit-DBKPegXf.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-xzaADJd5.js";import"./Curve-Cp4aQ8cc.js";import"./step-Sm-51kJi.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BLeTrPjm.js";import"./Dot-B-qNm1bD.js";import"./Symbols-DlwZKch0.js";import"./symbol-DWh1oIHF.js";import"./useElementOffset-C2cTU9_n.js";import"./uniqBy-DEPl67Hh.js";import"./iteratee-Rk_zuFbj.js";import"./Cross-uKm1mtpB.js";import"./Sector-bBle_5Yt.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
