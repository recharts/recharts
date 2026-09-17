import{R as t}from"./iframe-CqRpABaK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-qoSfFU5r.js";import{R as l}from"./zIndexSlice-KvzMEBh7.js";import{C as x}from"./ComposedChart-DCUriljY.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BpDOsHkr.js";import{L as a}from"./Line-8cbiPC_u.js";import{X as c}from"./XAxis-BSRwnZMq.js";import{T as g}from"./Tooltip-3Iqd0Y5A.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-IjPv9f7P.js";import"./Text-CXo2baHO.js";import"./resolveDefaultProps-Dp9amxWt.js";import"./DOMUtils-DJUl9uN8.js";import"./isWellBehavedNumber-CUSt0J5q.js";import"./useId-BbgR7tKy.js";import"./useBackwardsCompatibleTheme-DXXC_Hh5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D34xXT-L.js";import"./index-TAONuQw1.js";import"./index-D1EEl4o-.js";import"./RechartsWrapper-Q6-Ges1c.js";import"./axisSelectors-Bh6roEOt.js";import"./throttle-BjLrRmHo.js";import"./d3-scale-DITi7lUc.js";import"./index-DhXYHAxS.js";import"./index-Bn22tw5D.js";import"./renderedTicksSlice-Ddky5d5u.js";import"./index-BT_XvWwU.js";import"./CartesianAxis-NW0JLUgH.js";import"./Layer-g-5IuUpa.js";import"./types-CC73-uTJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bxw3yjgR.js";import"./chartDataContext-Cz0raIOD.js";import"./CategoricalChart-yTIhx19f.js";import"./AnimatedItems-CBpEgVGL.js";import"./useAnimationId-BJd8TCij.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CNnTJ1N9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EpogqgxJ.js";import"./tooltipContext-BCXkmq96.js";import"./RegisterGraphicalItemId-B1YLlZGq.js";import"./ErrorBarContext-CYofUAqs.js";import"./GraphicalItemClipPath-BVicx7bF.js";import"./SetGraphicalItem-B8cx_Fws.js";import"./getZIndexFromUnknown-Bp1qflbJ.js";import"./useGraphicalItemIdentity-BjVJGRyR.js";import"./Curve-BcRTskgb.js";import"./step-BuSHEP_V.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CyBSG7Nh.js";import"./Dot-CMcfKVB4.js";import"./getRadiusAndStrokeWidthFromDot-5mvy0zL6.js";import"./useElementOffset-MH0vo0Hf.js";import"./uniqBy-wzlT94X_.js";import"./iteratee-D6dIEdRH.js";import"./Cross-CUKvkafW.js";import"./Sector-DhwEBqpB.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
