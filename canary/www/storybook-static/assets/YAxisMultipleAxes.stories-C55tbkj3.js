import{R as t}from"./iframe-seguPege.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DMmP-D66.js";import{R as l}from"./zIndexSlice-Cb-1bZoU.js";import{C as x}from"./ComposedChart-DVVsB1I4.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-8aYU9JN4.js";import{L as a}from"./Line-B5wrNkVZ.js";import{X as c}from"./XAxis-DUluPi7y.js";import{T as g}from"./Tooltip-Db5hZzcb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BPoksESJ.js";import"./CartesianAxis-CKcebKQz.js";import"./Layer-D0gi-KwG.js";import"./resolveDefaultProps-BPZN0bld.js";import"./Text-DMr88uBj.js";import"./DOMUtils-CAhJeY0i.js";import"./isWellBehavedNumber-B-pqTWs3.js";import"./Label-Bj9fNTdt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-E8T2jKop.js";import"./index-xMrsE0KA.js";import"./index-BwRhAzA0.js";import"./types-Dh_7L2tU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Di3U0Cl0.js";import"./immer-Ae2GGYT-.js";import"./RechartsWrapper-DyL4MUL1.js";import"./index-DLDg1yAI.js";import"./index-BwbDEThZ.js";import"./axisSelectors-B65K-pjL.js";import"./d3-scale-EL9kUTP1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CclsakCq.js";import"./chartDataContext-ZOJ8ES_m.js";import"./CategoricalChart-DsfEFljg.js";import"./tooltipContext-AqtE9cuC.js";import"./AnimatedItems-BjEmPeVW.js";import"./useAnimationId-Bb_iGYOg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ByDmPg9d.js";import"./ActiveShapeUtils-YVVmXP9O.js";import"./RegisterGraphicalItemId-C1rgLQS7.js";import"./ErrorBarContext-CqxJy0tW.js";import"./GraphicalItemClipPath-D2QHuOb3.js";import"./SetGraphicalItem-QZ64RzpK.js";import"./getZIndexFromUnknown-B_6pNkA6.js";import"./graphicalItemSelectors-Dsu_Rt3k.js";import"./Curve-Dy50jrXo.js";import"./step-CXbb4GLS.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BGPZQ7DK.js";import"./Dot-JTIqjmcj.js";import"./getRadiusAndStrokeWidthFromDot-7f0lski4.js";import"./useElementOffset-Bd0nUEN2.js";import"./uniqBy-PllRjql5.js";import"./iteratee-CGB8lHH8.js";import"./Cross-bh_WB7gE.js";import"./Sector-Ir-ziIqp.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
