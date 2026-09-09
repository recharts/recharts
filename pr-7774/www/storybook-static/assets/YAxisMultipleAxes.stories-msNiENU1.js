import{R as t}from"./iframe-BPEJKbq8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BtY2v5Bn.js";import{R as l}from"./zIndexSlice-VIpuzkKp.js";import{C as x}from"./ComposedChart-CCL4cMEJ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar--9OdfMIq.js";import{L as a}from"./Line-Ba6803Tc.js";import{X as c}from"./XAxis-Cj_7D1I7.js";import{T as g}from"./Tooltip-DvwRcFt3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-L-zdkhzC.js";import"./Text-DJ80zvuP.js";import"./resolveDefaultProps-1un5xk9O.js";import"./DOMUtils-CHvDeV8q.js";import"./isWellBehavedNumber-Buf-YS9M.js";import"./useId-b-JOMF6y.js";import"./useBackwardsCompatibleTheme-BiL5HnOV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-WSPcn9qV.js";import"./index-DNcAR_Vs.js";import"./index-ButnEeUi.js";import"./RechartsWrapper-DxqXjp29.js";import"./axisSelectors-DzMkLtRT.js";import"./throttle-DF-tIWsK.js";import"./d3-scale-DEM8vz6k.js";import"./index-B4ESYIeG.js";import"./index-C5KHL6lo.js";import"./renderedTicksSlice-D_uQ_TZY.js";import"./index-KKugj82J.js";import"./CartesianAxis-BsRH_pN4.js";import"./Layer-CtRRCC-v.js";import"./types-_BaiC61O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-ooyntLBz.js";import"./chartDataContext-B6O65UK4.js";import"./CategoricalChart-Btmr9H2l.js";import"./AnimatedItems-DyYNY1ib.js";import"./useAnimationId-BVUST1Us.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B9LkdU9r.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CnR2FwMp.js";import"./tooltipContext-B1U1MT4r.js";import"./RegisterGraphicalItemId-D7i3sBo8.js";import"./ErrorBarContext-D5cSQqKQ.js";import"./GraphicalItemClipPath-DkgmJC3z.js";import"./SetGraphicalItem-DABANGfl.js";import"./getZIndexFromUnknown-oD9Hf-3F.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-7Z7QhK-I.js";import"./Curve-DXLcFLNV.js";import"./step-NWmRhsUj.js";import"./path-DyVhHtw_.js";import"./ActivePoints-iI1SWNnX.js";import"./Dot-BI_iFhuu.js";import"./getRadiusAndStrokeWidthFromDot-NFmAqb_v.js";import"./useElementOffset-6K-IQoth.js";import"./uniqBy-K0PFycK4.js";import"./iteratee-DTkDCoyb.js";import"./Cross-BzqRf9RY.js";import"./Sector-BYSuxIRU.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
