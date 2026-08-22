import{R as t}from"./iframe-BX5cRibr.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-LHNvPj5J.js";import{R as l}from"./zIndexSlice-AZuYl_vp.js";import{C as x}from"./ComposedChart-ySsto5-f.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DCSjGvKA.js";import{L as a}from"./Line-Ble_dEe_.js";import{X as c}from"./XAxis-DwJ67tbd.js";import{T as g}from"./Tooltip-BQ1TvFws.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DaxsWVsm.js";import"./Text-LzAq1gnt.js";import"./resolveDefaultProps-mM3kvg0l.js";import"./DOMUtils-BjdsXn98.js";import"./isWellBehavedNumber-DBNW0jLE.js";import"./useId-DmJJcbw8.js";import"./useBackwardsCompatibleTheme-D4QNjc2r.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-5Nxk2bOM.js";import"./index-DPKEyt0t.js";import"./index-CcyvhUmM.js";import"./RechartsWrapper-BWIRq1qS.js";import"./index-D7b-sRGH.js";import"./index-Dw3bOTki.js";import"./throttle-zmqWqRK4.js";import"./axisSelectors-TKieRxLR.js";import"./d3-scale-Bo5r3xwl.js";import"./renderedTicksSlice-CMTI5nMK.js";import"./CartesianAxis-C0ASpg_d.js";import"./Layer-W_QEwym4.js";import"./types-DbQE6sDs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dy3LaLed.js";import"./chartDataContext-BTnhTp6W.js";import"./CategoricalChart-DuHEcs_Z.js";import"./AnimatedItems-Cm8c3RW5.js";import"./useAnimationId-CcWR-JA_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-sEO8jAvN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dci8zubi.js";import"./tooltipContext-BCMOyfKZ.js";import"./RegisterGraphicalItemId-Bm8N3XnH.js";import"./ErrorBarContext-Bxp-Dx_a.js";import"./GraphicalItemClipPath-T4Qnp2Cr.js";import"./SetGraphicalItem-D_SsxP0N.js";import"./getZIndexFromUnknown-wU2gbq3X.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DW-toJ5T.js";import"./Curve-DB2Kv5XX.js";import"./step-DSSF95ZQ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C2sJ7ejP.js";import"./Dot-BmK-BBdb.js";import"./getRadiusAndStrokeWidthFromDot-CTcI3Era.js";import"./useElementOffset-B2muHLId.js";import"./uniqBy-CUPPr5RE.js";import"./iteratee-C-A_FkJM.js";import"./Cross-D6NGwbys.js";import"./Sector-xNI7UkRk.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
