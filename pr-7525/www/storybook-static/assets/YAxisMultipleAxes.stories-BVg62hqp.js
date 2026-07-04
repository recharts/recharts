import{R as t}from"./iframe-Cdy9NYu9.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B-BKBDfM.js";import{R as l}from"./zIndexSlice-C2_e4Jbl.js";import{C as x}from"./ComposedChart-CGyVRna3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-4sPaRaDT.js";import{L as a}from"./Line-L0enbhhs.js";import{X as c}from"./XAxis-BJhS5a8e.js";import{T as g}from"./Tooltip-N88xWPck.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DA9B6fNW.js";import"./Layer-Hq_4dnpr.js";import"./resolveDefaultProps-CG6sO-97.js";import"./Text-DMhYSqT7.js";import"./DOMUtils-DBN2rZ60.js";import"./isWellBehavedNumber-CJulqOvD.js";import"./Label-BIfqnFjj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BxN8McgO.js";import"./index-BZ9Fe99a.js";import"./index-DsFTIXEw.js";import"./types-C9NSKw4l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DWXzhFAM.js";import"./throttle-t9dcJkBi.js";import"./RechartsWrapper-D4IxCG7a.js";import"./index-Bcb8rKnp.js";import"./index-CaPeX6FT.js";import"./axisSelectors-ByTu7Vcx.js";import"./d3-scale-DTNVMcZf.js";import"./CartesianChart-C4yHSY79.js";import"./chartDataContext-C2Y_0_Vz.js";import"./CategoricalChart-BucM35ky.js";import"./tooltipContext-BhyLCXhZ.js";import"./AnimatedItems-BSQ2aAGr.js";import"./useAnimationId-DO_gOZxo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-zLcbgT_c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CMZtEUn5.js";import"./RegisterGraphicalItemId-WMzFziJE.js";import"./ErrorBarContext-B4XuHyPg.js";import"./GraphicalItemClipPath-GIg3EkdR.js";import"./SetGraphicalItem-CgtgTGFl.js";import"./getZIndexFromUnknown-Lae48a4N.js";import"./graphicalItemSelectors-ClwBgY3L.js";import"./Curve-CX0sCCUr.js";import"./step-Dtj-YZD0.js";import"./path-DyVhHtw_.js";import"./ActivePoints-MMq034Vb.js";import"./Dot-B4nh6ym9.js";import"./getRadiusAndStrokeWidthFromDot-BJvaJANi.js";import"./useElementOffset-DysDxY94.js";import"./uniqBy-LvrlaU3A.js";import"./iteratee-bdNJUmyF.js";import"./Cross-DfwotlG2.js";import"./Sector-CzJudC60.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
