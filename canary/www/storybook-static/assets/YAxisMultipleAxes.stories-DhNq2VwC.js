import{R as t}from"./iframe-B4kUD3F_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DxN0d4h_.js";import{R as l}from"./zIndexSlice-DRZxBlWj.js";import{C as x}from"./ComposedChart-Bn7ITjo8.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-6TYA8x2n.js";import{L as a}from"./Line-BZIfpmth.js";import{X as c}from"./XAxis-BqSSrpGv.js";import{T as g}from"./Tooltip-559atlXM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-SuicBCAy.js";import"./CartesianAxis-CnkwfMH6.js";import"./Layer-Dsy9hdjd.js";import"./resolveDefaultProps-DRQB4Pss.js";import"./Text-79gK0PXl.js";import"./DOMUtils-D7Mb2TVV.js";import"./isWellBehavedNumber-Bmjbb00R.js";import"./Label-Ckw8TK4e.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B7kHgW_5.js";import"./index-CYqd0Uq6.js";import"./index-BV_azGi8.js";import"./types-7cnic641.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DO7nzrZX.js";import"./immer-DI7Qg7MS.js";import"./RechartsWrapper-C0Rch8-X.js";import"./index-DCwDzrBS.js";import"./index-C-xuAHoJ.js";import"./axisSelectors-7DMUz--h.js";import"./d3-scale-CJLHhLGS.js";import"./CartesianChart-DZtIiDJu.js";import"./chartDataContext-hd9fJl9r.js";import"./CategoricalChart-DUPJdAnz.js";import"./tooltipContext-CyFiY_e1.js";import"./AnimatedItems-DHDZsGIH.js";import"./useAnimationId-DS8iKUy9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-1pwmvYkO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BYIaqgjd.js";import"./RegisterGraphicalItemId-Ci8r16YO.js";import"./ErrorBarContext-CXDz_6c0.js";import"./GraphicalItemClipPath-BXEDANj9.js";import"./SetGraphicalItem-CcBXcnnP.js";import"./getZIndexFromUnknown-Bhidmo1X.js";import"./graphicalItemSelectors-D9BOovhm.js";import"./Curve-CthZ8FHS.js";import"./step-DrWCufuT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-H5S3JmFF.js";import"./Dot-eB8aq2hu.js";import"./getRadiusAndStrokeWidthFromDot-DOq9cCaw.js";import"./useElementOffset-MNUOYE5n.js";import"./uniqBy-B6b2iUeP.js";import"./iteratee-D9R9LmOY.js";import"./Cross-BoUPjysy.js";import"./Sector-Dj-Q3kNf.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
