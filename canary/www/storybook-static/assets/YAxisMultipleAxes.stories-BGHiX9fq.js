import{R as t}from"./iframe-Bqhaiwq8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BtCExx2a.js";import{R as l}from"./zIndexSlice-BJS-a__d.js";import{C as x}from"./ComposedChart-oTFXmOZl.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-REXa0AwW.js";import{L as a}from"./Line-Bp-E22-P.js";import{X as c}from"./XAxis-Du5noYHq.js";import{T as g}from"./Tooltip-upHYEKlK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-217VZgzf.js";import"./Layer-Co0F7rtj.js";import"./resolveDefaultProps-Bz_Hg9tX.js";import"./Text-BtH8DQvC.js";import"./DOMUtils-BpHmJx8-.js";import"./isWellBehavedNumber-Be3mi6aN.js";import"./Label-D7swILSN.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CIZ0RaUe.js";import"./index-CENQUa5y.js";import"./index-ChBrJC7P.js";import"./types-OmV-cVYy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dCTNHtgX.js";import"./throttle-C_LSyirk.js";import"./RechartsWrapper-D0HX42ff.js";import"./index-QuJ2DhnT.js";import"./index-DxkzSUWz.js";import"./axisSelectors-Dd8okoki.js";import"./d3-scale-i5sn4jpY.js";import"./CartesianChart-DUun358R.js";import"./chartDataContext-BxVBYRL6.js";import"./CategoricalChart-BqinH4KG.js";import"./tooltipContext-BZgtZUe3.js";import"./AnimatedItems-ZUM4uHMT.js";import"./useAnimationId-D0jk17bx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BIkqYwDS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DZHTMyL3.js";import"./RegisterGraphicalItemId-BMXEaOnC.js";import"./ErrorBarContext-CWwmFSat.js";import"./GraphicalItemClipPath-9FMv3-Ih.js";import"./SetGraphicalItem-CKezQY-K.js";import"./getZIndexFromUnknown-c6n4tA5_.js";import"./graphicalItemSelectors-CchqaGKR.js";import"./Curve-DUDGkuFv.js";import"./step-Yi3ifzmX.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DZkQMisB.js";import"./Dot-BTqZFgU3.js";import"./getRadiusAndStrokeWidthFromDot-BRzjy3Uy.js";import"./useElementOffset-CmWzJYxc.js";import"./uniqBy-yoTZI67c.js";import"./iteratee-CsXi7xCb.js";import"./Cross-BBnkhDin.js";import"./Sector-C0XGRQ32.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
