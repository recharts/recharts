import{R as t}from"./iframe-DPP4Tdri.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Ce7IYC8C.js";import{R as l}from"./zIndexSlice-Bty8FlsF.js";import{C as x}from"./ComposedChart-CXeRVVMY.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-kJNtSnDL.js";import{L as a}from"./Line-D2KFCdB_.js";import{X as c}from"./XAxis-BpxUBGxx.js";import{T as g}from"./Tooltip-DZD5XPLv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-VwhFHh0o.js";import"./Text-BtmpD8Z5.js";import"./resolveDefaultProps-Cm9tdCQy.js";import"./pageBackground-km40Fien.js";import"./useId-Ddybgx-i.js";import"./ZIndexLayer-Blh-9Ce2.js";import"./index-DVADikfE.js";import"./index-De7017Q2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CClqMsSX.js";import"./throttle-vvUvRomY.js";import"./dataEntryStyles-CptsKKQm.js";import"./axisSelectors-D5c_jQLf.js";import"./d3-scale-DzX31dlW.js";import"./CartesianAxis-Cw8YZYZ1.js";import"./Layer-wOFD4jm5.js";import"./types-nPujXrb0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B_g7wt05.js";import"./index-Cb0QOEvK.js";import"./index-CTYPR5t0.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Dc5A4Gsl.js";import"./index-C1bARSgS.js";import"./CartesianChart-_cTASiWq.js";import"./chartDataContext-BX3Xv7t3.js";import"./CategoricalChart-CkLeLS7-.js";import"./activeStyles-Czb_VVwe.js";import"./useAnimationId-CRGpdxWH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYtgedmy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BRfAaZtt.js";import"./tooltipContext-BbQ3hIxk.js";import"./RegisterGraphicalItemId-C_PEUR1P.js";import"./ErrorBarContext-DA7VKoxZ.js";import"./SetGraphicalItem-me1Dq43s.js";import"./getZIndexFromUnknown-CYps8qNe.js";import"./useEffectiveDataKey-CPqFi3kZ.js";import"./omit-DeVuR1ub.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B2UCYZoR.js";import"./step-3axEj_2-.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DKXQv37u.js";import"./Dot-9cI0fI12.js";import"./Symbols-DAUL1Z82.js";import"./symbol-CyE3iFmu.js";import"./getRadiusAndStrokeWidthFromDot-CNoHTcoN.js";import"./useElementOffset-DETypLP1.js";import"./uniqBy-B9BTqrOm.js";import"./iteratee-b2KlmUpP.js";import"./Cross-DEZ6Na26.js";import"./Sector-BoCQu8KL.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
