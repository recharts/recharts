import{R as t}from"./iframe-ESIqq74j.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DKsjzmyR.js";import{R as l}from"./zIndexSlice-CKvG1btl.js";import{C as x}from"./ComposedChart-L_mLjP39.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DtPvqr-k.js";import{L as a}from"./Line-BfPK1q22.js";import{X as c}from"./XAxis-DazJCOyK.js";import{T as g}from"./Tooltip-Bp5HtTrN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BX7H8p4m.js";import"./Text-SrX2-qRa.js";import"./resolveDefaultProps-B7R_GNLW.js";import"./ZIndexLayer-C_1IKv4J.js";import"./index-CADuzeyv.js";import"./index-BLW9Qo5X.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-3_x-3ruj.js";import"./throttle-s6zM-TSz.js";import"./axisSelectors-Dt46-i8H.js";import"./d3-scale-RU_yJ5H-.js";import"./CartesianAxis-B_kntHFz.js";import"./Layer-Bde02su5.js";import"./types-CKUWabzj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-mNjnmJLW.js";import"./index-CfWnO0RN.js";import"./index-BUNu1DhE.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CmfK6Aj5.js";import"./index-COj7acwZ.js";import"./fillDefinitions-DJ6LDeFQ.js";import"./CartesianChart-C07q_lkj.js";import"./chartDataContext-y_Sj-SgN.js";import"./CategoricalChart-DJa-RrVL.js";import"./dataEntryStyles-CU93DU9D.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CB4eyp-1.js";import"./useAnimationId-Fts_Wu3I.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C0RxF4ep.js";import"./tooltipContext-BLaEyLYd.js";import"./ErrorBarContext-ckgpu_x8.js";import"./activeStyles-rtMeimPT.js";import"./SetGraphicalItem-D7oZPXcp.js";import"./getZIndexFromUnknown-ZslcYDsk.js";import"./useEffectiveDataKey-CNiCq0ga.js";import"./omit-BlNgJLyW.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DeJPrQyS.js";import"./Curve-DSZOr6BZ.js";import"./step-CinInmIp.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CTIAjKB9.js";import"./Dot-HenRQ4hS.js";import"./Symbols-CUdupVmb.js";import"./symbol-DTe8TmzR.js";import"./useElementOffset-Bi21MMet.js";import"./uniqBy-DLn6pOi-.js";import"./iteratee-Ceo2QOyl.js";import"./Cross-CFmROkvM.js";import"./Sector-D-v2ZTMx.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
