import{R as t}from"./iframe-upOKpTfC.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-0bXs_H74.js";import{R as l}from"./zIndexSlice-3kJy4_5s.js";import{C as x}from"./ComposedChart-XkmqlV9y.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-iRZfNah5.js";import{L as a}from"./Line-C6XO9CBA.js";import{X as c}from"./XAxis-g3--B4Im.js";import{T as g}from"./Tooltip-C4jhTK9Z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CO3H2wW4.js";import"./Layer-Bv6NwOOo.js";import"./resolveDefaultProps-C5MbGZTR.js";import"./Text-CuI103ie.js";import"./DOMUtils-BQfF-HWt.js";import"./isWellBehavedNumber-DrMtPoxC.js";import"./Label-CWWfz4NX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CN5osLDH.js";import"./index-fzhcIN9D.js";import"./index-BjDbck5L.js";import"./types-Bdshst7h.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-_aeWYehA.js";import"./throttle-DFA1f5tU.js";import"./RechartsWrapper-BGh022Wu.js";import"./index-C-2GXdQU.js";import"./index-Bjw8W24w.js";import"./axisSelectors-Bm__5HSH.js";import"./d3-scale-BoRQfYQu.js";import"./CartesianChart-C0cpSp27.js";import"./chartDataContext-CULDGz5L.js";import"./CategoricalChart-CtBwRsb8.js";import"./tooltipContext-RWH8ebVp.js";import"./AnimatedItems-DNy5Onjp.js";import"./useAnimationId-ypM0JLm_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CZyj3XrW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DdQ7UgVU.js";import"./RegisterGraphicalItemId-CKwYBx4V.js";import"./ErrorBarContext-BpEoBZZy.js";import"./GraphicalItemClipPath-CwmaU6d7.js";import"./SetGraphicalItem-DYmFEset.js";import"./getZIndexFromUnknown-D66vwzSu.js";import"./graphicalItemSelectors-DPG-mFl6.js";import"./Curve-D2bD0YW0.js";import"./step-DhetwtCK.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CvqveQ6d.js";import"./Dot-CWeDp1FL.js";import"./getRadiusAndStrokeWidthFromDot-CMxxoR3Y.js";import"./useElementOffset-DhZxMWZm.js";import"./uniqBy-CS9AwGpr.js";import"./iteratee-D3my6Ahn.js";import"./Cross-DaVAVaJo.js";import"./Sector-BfVnPUMY.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
