import{R as t}from"./iframe-Ca1UrYHb.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis--Ne3LUdW.js";import{R as l}from"./zIndexSlice-DkJuOKqH.js";import{C as x}from"./ComposedChart-BQRHe03d.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CwAC8FMr.js";import{L as a}from"./Line-DA8d46P8.js";import{X as c}from"./XAxis-fyR759Im.js";import{T as g}from"./Tooltip-B8lwG9Ea.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Df_VmgSa.js";import"./Text-CG61ars6.js";import"./resolveDefaultProps-C7Zn3GIw.js";import"./ZIndexLayer-84bYvzQv.js";import"./index-DyyWsaDx.js";import"./index-BL3iJc3a.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BJjdmelv.js";import"./throttle-CQ25M_Sr.js";import"./axisSelectors-Dxz5Fo81.js";import"./d3-scale-BSpvxsSq.js";import"./CartesianAxis-C2LROGDs.js";import"./Layer-YpjF2SE4.js";import"./types-DxtdvItD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C6Llf2gZ.js";import"./index-CGbgMVTZ.js";import"./index-CeJ-_gAW.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DpgD45ps.js";import"./index-CXh6mJLx.js";import"./fillDefinitions-CGDilicc.js";import"./CartesianChart-Ahhse01G.js";import"./chartDataContext-Nvu6nj5u.js";import"./CategoricalChart-Cbl_4Ofw.js";import"./dataEntryStyles-HIGj4PG3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CrzCB3zu.js";import"./useAnimationId-Dpl0bF--.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-83_vs6lS.js";import"./tooltipContext-CWtAr1ZE.js";import"./ErrorBarContext-ChnkHwYk.js";import"./activeStyles-gkqlHaiP.js";import"./SetGraphicalItem-BYm76vy-.js";import"./getZIndexFromUnknown-B-4rVdsD.js";import"./useEffectiveDataKey-mZIPn9UL.js";import"./omit-COWJ3khx.js";import"./isArguments-yB-y1yaH.js";import"./Curve-_7igEkPt.js";import"./step-BwzpgB8P.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DFCTzNYL.js";import"./Dot-7od_5Z4B.js";import"./Symbols-DCcF1Btd.js";import"./symbol-C0Dz9CIF.js";import"./getRadiusAndStrokeWidthFromDot-B4kLZYpF.js";import"./useElementOffset-bheOR33N.js";import"./uniqBy-BWay3J3F.js";import"./iteratee-D2oTiGUc.js";import"./Cross-COR7fnF3.js";import"./Sector-D52HjYRR.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
