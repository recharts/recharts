import{R as t}from"./iframe-DzolqKW_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DB_rcNlV.js";import{R as l}from"./zIndexSlice-BFydgfU7.js";import{C as x}from"./ComposedChart-BXGKVBvM.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-cMpb8xOM.js";import{L as a}from"./Line-DiVWIN5q.js";import{X as c}from"./XAxis-GMhM5CFR.js";import{T as g}from"./Tooltip-Dhnxj9xg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CSVxSdOY.js";import"./Layer-TAE-BGU4.js";import"./resolveDefaultProps-Bn-Ns7xT.js";import"./Text-Oy6dFGv9.js";import"./DOMUtils-D4HAj4Uf.js";import"./isWellBehavedNumber-DaFHOJVp.js";import"./Label-BR8h5iiR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CuyP-vcu.js";import"./index-BGQgYr9p.js";import"./index-CXHzwmBK.js";import"./types-BKcxhU3G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BTl9iHqH.js";import"./throttle-BWqOgTiL.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-CninMw2k.js";import"./index-BYzdNJg2.js";import"./index-BjJlMzFo.js";import"./axisSelectors-BWPQJWKM.js";import"./d3-scale-BOKuOqr8.js";import"./CartesianChart-DRSod0ni.js";import"./chartDataContext-D0TMVBgy.js";import"./CategoricalChart-tg3Y8Ccg.js";import"./tooltipContext-ZfR3jhJm.js";import"./AnimatedItems-D8n1PMNM.js";import"./useAnimationId-BCQ5DS1y.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-O5CHzUas.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B3c1p96o.js";import"./RegisterGraphicalItemId-DAxQkrUf.js";import"./ErrorBarContext-HJrjbNNf.js";import"./GraphicalItemClipPath-Cf6TT0yv.js";import"./SetGraphicalItem-F22FHLao.js";import"./getZIndexFromUnknown-DNgUPweP.js";import"./graphicalItemSelectors-DnZlAaLd.js";import"./Curve-D6-Bsbi2.js";import"./step-DRn0xJ5_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CAwFhkX4.js";import"./Dot-CwbyEbx1.js";import"./getRadiusAndStrokeWidthFromDot-BzM4Z0nC.js";import"./useElementOffset-C5u9w9zW.js";import"./uniqBy-ijo8b4E9.js";import"./iteratee-nLHmRvyN.js";import"./Cross-CpBlPrtB.js";import"./Sector-BlO0OVbx.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
