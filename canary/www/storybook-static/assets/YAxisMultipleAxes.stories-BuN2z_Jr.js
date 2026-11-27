import{R as t}from"./iframe-WNWxHA5w.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-C2XMsDVi.js";import{R as l}from"./zIndexSlice-BVgHV45y.js";import{C as x}from"./ComposedChart-DpKMEvwE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BDZtsY-j.js";import{L as a}from"./Line-lsf5adcu.js";import{X as c}from"./XAxis-DfMY5qBP.js";import{T as g}from"./Tooltip-Bx7RtV8V.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B2gYQvk0.js";import"./get-CjriyByo.js";import"./Label-CezBD4yi.js";import"./Text-Cw_EXTQi.js";import"./ZIndexLayer-yj-imWcv.js";import"./index-C5BrRLOu.js";import"./index-B_zAmF-o.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CgU14Zha.js";import"./throttle-DWlA00LM.js";import"./axisSelectors-DqPRQxzX.js";import"./diverging-zFOgTZT_.js";import"./CartesianAxis-BHmhgeQf.js";import"./Layer-DaOdaJ8o.js";import"./types-jc9vmIop.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DXbq9Sus.js";import"./index-CWM66Coj.js";import"./index-CN82-OMW.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-MLPBuzwi.js";import"./index-Ihw2JtUd.js";import"./fillDefinitions-Byjs2RvA.js";import"./CartesianChart-CStGKL8K.js";import"./chartDataContext-CQ2a4iuz.js";import"./CategoricalChart-DxS1nkjF.js";import"./dataEntryStyles-Dk4XNyaK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-bHpKFJEG.js";import"./useAnimationId-PYVmWLIg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-MT88_CXC.js";import"./tooltipContext-KIFqTDI5.js";import"./ErrorBarContext-Bqg4FQ8M.js";import"./activeStyles-CeKhNTWp.js";import"./SetGraphicalItem-Cb_G_uW5.js";import"./getZIndexFromUnknown-BSCGJkFK.js";import"./useEffectiveDataKey-Dv_aTiOG.js";import"./omit-Czg6ajmW.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-7Ou40HZN.js";import"./Curve-aBjBuLLa.js";import"./step-QSf3RYd6.js";import"./path-BBMZd4YL.js";import"./ActivePoints-Dr8JqR2c.js";import"./Dot-DNElWDLL.js";import"./Symbols-DIUF60nI.js";import"./symbol-Cx8bofxp.js";import"./useElementOffset-Ds0hVeZw.js";import"./uniqBy-BzMIYtmN.js";import"./iteratee-Dl7MZIU4.js";import"./Cross-BVtygh5W.js";import"./Sector-CTWU1_bF.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
