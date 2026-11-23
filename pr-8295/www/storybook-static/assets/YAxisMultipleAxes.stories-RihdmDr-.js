import{R as t}from"./iframe-kLrggBpZ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-B5avTU_X.js";import{R as l}from"./zIndexSlice-CKCGde2F.js";import{C as x}from"./ComposedChart-DaK4Bp3q.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BJ67uZXE.js";import{L as a}from"./Line-D-PTgy1R.js";import{X as c}from"./XAxis-B-2vEHb0.js";import{T as g}from"./Tooltip-DMq8uqJi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CpspZ4dp.js";import"./Text-DNntKRRw.js";import"./resolveDefaultProps-D_LYpz2f.js";import"./ZIndexLayer-CZ_FttOi.js";import"./index-Bv7OV-9Z.js";import"./index-C-cjgJnd.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dxnj4FFJ.js";import"./throttle-BkTfx27C.js";import"./axisSelectors-D6wM5g8f.js";import"./d3-scale-DE-4LfFJ.js";import"./CartesianAxis-Dfi_5bxP.js";import"./Layer-DQPijciL.js";import"./types-jTiWDmD0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DgOqiypa.js";import"./index-iHP1RapJ.js";import"./index-B46QsuJB.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DVOP9mMm.js";import"./index-DVOdnQdm.js";import"./fillDefinitions-CMyVvOcV.js";import"./CartesianChart-DP_q0vfs.js";import"./chartDataContext-DDJgrWCU.js";import"./CategoricalChart-CZkForA1.js";import"./dataEntryStyles-DxslDEhK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-f81kex-M.js";import"./useAnimationId-CEVcGH0v.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BBiGMeQC.js";import"./tooltipContext-Ddmapz-Y.js";import"./ErrorBarContext-MaEtcn-S.js";import"./activeStyles-BevLUsk4.js";import"./SetGraphicalItem-BJQeWc-6.js";import"./getZIndexFromUnknown-DNluFhwA.js";import"./useEffectiveDataKey-BIUvIyD8.js";import"./omit-B2VxqQbn.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-D72Rn_78.js";import"./Curve-CYSM8Ubv.js";import"./step-Be-YYOOJ.js";import"./path-BBMZd4YL.js";import"./ActivePoints-B3OB9PGr.js";import"./Dot-D134Eke9.js";import"./Symbols-CW8iQe4i.js";import"./symbol-BFiK-Ghx.js";import"./useElementOffset-BhEl9_49.js";import"./uniqBy-B-ByEpXp.js";import"./iteratee-B7qBUA2a.js";import"./Cross-DOurOaBQ.js";import"./Sector-CSRJPYTa.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
