import{R as t}from"./iframe-Ce2LNmzq.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CHPMR7tu.js";import{R as l}from"./zIndexSlice-1iBSzntV.js";import{C as x}from"./ComposedChart-D8QzjQGV.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DENSUiUI.js";import{L as a}from"./Line-Cmb7zLRd.js";import{X as c}from"./XAxis-ChLxoQeP.js";import{T as g}from"./Tooltip-vdLhDqaO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-E5RSdERr.js";import"./Text-1GNKdZPR.js";import"./resolveDefaultProps-Bt6qRPyP.js";import"./DOMUtils-DXjDSVEa.js";import"./isWellBehavedNumber-LiGS8Ktg.js";import"./useBackwardsCompatibleTheme-C9k5uHL0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-hciQBMwm.js";import"./index-CwWtniec.js";import"./index-A8_rJiXz.js";import"./RechartsWrapper-NruqEuMP.js";import"./index-CWtZ9yph.js";import"./index-C0AYEPvF.js";import"./throttle-BPcDKDas.js";import"./axisSelectors-nf5d_TCI.js";import"./d3-scale-uRAm4Q4g.js";import"./renderedTicksSlice-DRhSVK4R.js";import"./CartesianAxis-D_IJzMyn.js";import"./Layer-CmHiQhsD.js";import"./types-D9eaN5qP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C3QGU_Gm.js";import"./chartDataContext-mV7HyGJe.js";import"./CategoricalChart-CdBHij7l.js";import"./AnimatedItems-EYOrwSGz.js";import"./useAnimationId-DJBKMCXo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CPJem9HH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DVN9EFMa.js";import"./tooltipContext-BREnZRk1.js";import"./RegisterGraphicalItemId-BhPsp4dD.js";import"./ErrorBarContext-z5kDqZ_L.js";import"./GraphicalItemClipPath-DPYSwVHo.js";import"./SetGraphicalItem-CX7uV2i5.js";import"./getZIndexFromUnknown--q-20xm9.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dq6j4bYq.js";import"./Curve-pGKyKnaa.js";import"./step-B81xmQ7d.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BV19snok.js";import"./Dot-BtvWNtdQ.js";import"./getRadiusAndStrokeWidthFromDot-D3ct2NHr.js";import"./useElementOffset-e8S935ma.js";import"./uniqBy-DM1WHRb1.js";import"./iteratee-DVWRkxa3.js";import"./Cross-DfT9jLgy.js";import"./Sector-CzFVmYU0.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
