import{R as t}from"./iframe-1kyud43n.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CNW7YlNA.js";import{R as l}from"./zIndexSlice-Cz5lyADs.js";import{C as x}from"./ComposedChart-DbMpgtlU.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-wYL5j-f0.js";import{L as a}from"./Line-B3NZzZlI.js";import{X as c}from"./XAxis-hMDf8ppU.js";import{T as g}from"./Tooltip-DZEh_yWv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C1lR5ca8.js";import"./Text-DH0wfypU.js";import"./resolveDefaultProps-BuZ_Ktq7.js";import"./DOMUtils-PMyjxqYh.js";import"./isWellBehavedNumber-CN4_9Vj1.js";import"./useId-9eWNRi00.js";import"./useBackwardsCompatibleTheme-CSH7ZS6o.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-JkDBeXjs.js";import"./index-DSXagRxi.js";import"./index-_AXMDP6s.js";import"./RechartsWrapper-C6lw4dqn.js";import"./index-C2be1uTX.js";import"./index-XjPcI5ms.js";import"./throttle-Hu0TR0tN.js";import"./axisSelectors-l88JnyTW.js";import"./d3-scale-CyS0eQ4Y.js";import"./renderedTicksSlice-DyP9_snd.js";import"./CartesianAxis-ClVpcem5.js";import"./Layer-BIHn5b7O.js";import"./types-CTti3ygY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DvAV2_6S.js";import"./chartDataContext-CIvFsnLa.js";import"./CategoricalChart-BmX_T4yF.js";import"./AnimatedItems-DeTQYvPq.js";import"./useAnimationId-RVCSWKWu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BxKv-jXG.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-rwurj85y.js";import"./tooltipContext-DuGvi8Du.js";import"./RegisterGraphicalItemId-BzVYbG1B.js";import"./ErrorBarContext-k5tsvNfO.js";import"./GraphicalItemClipPath-CPrhIVsz.js";import"./SetGraphicalItem-ydaT6l1I.js";import"./getZIndexFromUnknown-Br8r1zB2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BRoA24w2.js";import"./Curve-DxkIWAgM.js";import"./step-CTArbJyP.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bncm4L2S.js";import"./Dot-DagwZWJ3.js";import"./getRadiusAndStrokeWidthFromDot-Cv0Blg-c.js";import"./useElementOffset-DQHbmpKz.js";import"./uniqBy-B-IGlKv3.js";import"./iteratee-DZnlicew.js";import"./Cross-BY_UQvnq.js";import"./Sector-BsIhIReH.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
