import{R as t}from"./iframe-BPYH2WpS.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CEufsP3h.js";import{R as l}from"./zIndexSlice-CRIY2DI-.js";import{C as x}from"./ComposedChart-DPayCZiQ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-f2bbGrqP.js";import{L as a}from"./Line-T-KkaNIg.js";import{X as c}from"./XAxis-Cp4YLkQ5.js";import{T as g}from"./Tooltip-CqhPUDbY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DVwS1qXs.js";import"./Text-zynwh62u.js";import"./resolveDefaultProps-CGvNj-Ia.js";import"./DOMUtils-BPeWtLKN.js";import"./isWellBehavedNumber-CF5FkEe7.js";import"./useId-BE8oxSSZ.js";import"./useBackwardsCompatibleTheme-D75GrB32.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BSe5AwCg.js";import"./index-BlMmEtsK.js";import"./index-DJpd9u5l.js";import"./RechartsWrapper-CeSqC8qM.js";import"./axisSelectors-BixSNhmq.js";import"./throttle-xyVQD3_H.js";import"./d3-scale-C1nlw5KN.js";import"./index-CWtZ8b1U.js";import"./index-B4bTdLCM.js";import"./renderedTicksSlice-6vdJGY0j.js";import"./index-BPYK78er.js";import"./CartesianAxis-CGCKig2C.js";import"./Layer-C2LXKbkN.js";import"./types-CqopvqdC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CvYs98y7.js";import"./chartDataContext-kSMgmHGF.js";import"./CategoricalChart-Biw_xsj3.js";import"./AnimatedItems-C-cMTO2B.js";import"./useAnimationId-BKqfl7rh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-3aQUV3ep.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ds20vJPV.js";import"./tooltipContext-CWyc1cD1.js";import"./RegisterGraphicalItemId-BFsJivb8.js";import"./ErrorBarContext-BJvfmcx_.js";import"./GraphicalItemClipPath-B49DsmcO.js";import"./SetGraphicalItem-rIgP9mSO.js";import"./getZIndexFromUnknown-1eF7iTjG.js";import"./useGraphicalItemIdentity-AHFKb_mu.js";import"./dataEntryStyles-CkEyscHr.js";import"./Curve-CSa72MMA.js";import"./step-lFEaXGaU.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Ds7Vxzg0.js";import"./Dot-b-Hlrxis.js";import"./getRadiusAndStrokeWidthFromDot-Bg7bX7Mu.js";import"./useElementOffset-C6LgEkRR.js";import"./uniqBy-BLfWWLf6.js";import"./iteratee-BZ9sVM1E.js";import"./Cross-2hMX8eh6.js";import"./Sector-DHJW8RW3.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
