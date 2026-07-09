import{R as t}from"./iframe-DTfUMuxI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DiRZk9gW.js";import{R as l}from"./zIndexSlice-DgbTd9h0.js";import{C as x}from"./ComposedChart-OGPUNqC6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BznAYTF3.js";import{L as a}from"./Line-B98wDZe7.js";import{X as c}from"./XAxis-CKFG07JY.js";import{T as g}from"./Tooltip-Ce7_-MV5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CzVgKTyr.js";import"./Layer-fCILtQSz.js";import"./resolveDefaultProps-B2iqIMJj.js";import"./Text-8vykb6TY.js";import"./DOMUtils-CP4go6fM.js";import"./isWellBehavedNumber-CJoo6Zl9.js";import"./Label-Sgtp5mjO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BhQOtpEj.js";import"./index-C6ZCQ8Cr.js";import"./index-dA-GAX4g.js";import"./types-CausIaox.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DsiYN-l1.js";import"./throttle-DSBiY2UW.js";import"./RechartsWrapper-n6ARRQU-.js";import"./index-Cd9XPR7L.js";import"./index-C-gVZ3HS.js";import"./axisSelectors-D0YyYzBU.js";import"./d3-scale-DrphVPA4.js";import"./CartesianChart-b6kMC5fp.js";import"./chartDataContext-DbVx922-.js";import"./CategoricalChart-DjP0Xpt7.js";import"./tooltipContext-E8pJyhGS.js";import"./AnimatedItems-DnEACLZT.js";import"./useAnimationId-BT6QlGBk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cf96Egf9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DX8BqYxQ.js";import"./RegisterGraphicalItemId-1AKHmh8R.js";import"./ErrorBarContext-4arHz5n6.js";import"./GraphicalItemClipPath-Bk6qs07-.js";import"./SetGraphicalItem-BNqcqmMc.js";import"./getZIndexFromUnknown-BEXihlZA.js";import"./graphicalItemSelectors-Dfl11C67.js";import"./Curve-CDLgz_Rx.js";import"./step-D8Xe5eP9.js";import"./path-DyVhHtw_.js";import"./ActivePoints-1q3Ryxbz.js";import"./Dot-Br2mhGeX.js";import"./getRadiusAndStrokeWidthFromDot-D9ottDdP.js";import"./useElementOffset-DrOTra1T.js";import"./uniqBy-C0UbEHN4.js";import"./iteratee-DaP6RRgm.js";import"./Cross-Kjd5wsQk.js";import"./Sector-Blr5B_HL.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
