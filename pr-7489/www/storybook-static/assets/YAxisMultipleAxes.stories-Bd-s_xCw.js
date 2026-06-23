import{R as t}from"./iframe-Csitbru2.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-77x_J4Mg.js";import{R as l}from"./zIndexSlice-BG9qkId4.js";import{C as x}from"./ComposedChart-BUYN4Cux.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-vxIAmQew.js";import{L as a}from"./Line-Dlr3zu4o.js";import{X as c}from"./XAxis-GSkuRjug.js";import{T as g}from"./Tooltip-DUtc5Of5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DUq6txa7.js";import"./CartesianAxis-625Se9fv.js";import"./Layer-CzMJ0aPe.js";import"./resolveDefaultProps-zVEOPP5d.js";import"./Text-CCtHFY4v.js";import"./DOMUtils-QGCjuYeS.js";import"./isWellBehavedNumber-_7tyBBfO.js";import"./Label-ipIcHgJV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BXMbhl4p.js";import"./index-DY2vKHdm.js";import"./index-82VYn5V_.js";import"./types-CUGjGCsQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DArjmdb9.js";import"./immer-DZIxrqNF.js";import"./RechartsWrapper-CJrqmvjr.js";import"./index-BUYeukup.js";import"./index-3rUoeV7Y.js";import"./axisSelectors-BKzg4uht.js";import"./d3-scale-ruaAtfZ3.js";import"./CartesianChart-CQCv9B95.js";import"./chartDataContext-5AtwXdKv.js";import"./CategoricalChart-CH47Oqt0.js";import"./tooltipContext-BtT9U0V8.js";import"./AnimatedItems-nKsPTqFW.js";import"./useAnimationId-co5Blost.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bp3a_jVT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJwvh2Jx.js";import"./RegisterGraphicalItemId-4_42U9Tt.js";import"./ErrorBarContext-CNfKV2VL.js";import"./GraphicalItemClipPath-DmSSVMHB.js";import"./SetGraphicalItem-H4qAywSp.js";import"./getZIndexFromUnknown-BVZ_dzF3.js";import"./graphicalItemSelectors-Cb7i0Zq_.js";import"./Curve-B3wzhPX7.js";import"./step-Cvs1IljU.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CJkfV15x.js";import"./Dot-Wnlr8zt6.js";import"./getRadiusAndStrokeWidthFromDot-BVPCo9J9.js";import"./useElementOffset-BFAuBBXU.js";import"./uniqBy-BiKJ-0mt.js";import"./iteratee-DCHecb74.js";import"./Cross-CXKlPB_s.js";import"./Sector-r30QQkHv.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
