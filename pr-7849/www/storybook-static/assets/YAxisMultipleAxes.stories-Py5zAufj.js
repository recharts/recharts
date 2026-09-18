import{R as t}from"./iframe-BnwEvHVd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DnmtLm62.js";import{R as l}from"./zIndexSlice-0uCOCVRk.js";import{C as x}from"./ComposedChart-9rcgHVH2.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DS3fmTWL.js";import{L as a}from"./Line-BNCbCy8a.js";import{X as c}from"./XAxis-DhFvYOTq.js";import{T as g}from"./Tooltip-BC11rY2P.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DKFxt1KE.js";import"./Text-COiNjqEn.js";import"./resolveDefaultProps-jnzqtWcb.js";import"./DOMUtils-DMR3fXS7.js";import"./isWellBehavedNumber-f8_DWfMW.js";import"./useId-BMcLep4I.js";import"./useBackwardsCompatibleTheme-eKW0IOYq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BALG2eh-.js";import"./index-iHvm3R8g.js";import"./index-BwBYuMQi.js";import"./RechartsWrapper-BZ464iUK.js";import"./axisSelectors-DzcPpi8v.js";import"./throttle-BMoDiTen.js";import"./d3-scale-RQ0i9OyJ.js";import"./index-2KzukYLG.js";import"./index-B3VczQm-.js";import"./renderedTicksSlice-DPG0-UfT.js";import"./index-CKyU5yK6.js";import"./CartesianAxis-DJc2UaR_.js";import"./Layer-BqkYBUjY.js";import"./types-CpWaLS-D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DbrCyOh2.js";import"./chartDataContext-fkcf5wCl.js";import"./CategoricalChart-BZFbMC-H.js";import"./AnimatedItems-DFYzdMOG.js";import"./useAnimationId-Bx9pchZd.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CX0SZhD6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BQOop8W6.js";import"./tooltipContext-aCkJkkE7.js";import"./RegisterGraphicalItemId-DgVfOOm7.js";import"./ErrorBarContext-DiS9VGRo.js";import"./GraphicalItemClipPath-lDnflq8u.js";import"./SetGraphicalItem-D3Y1kq9t.js";import"./getZIndexFromUnknown-CBmWdKLp.js";import"./useGraphicalItemIdentity-DGhBBybr.js";import"./Curve-DLP8Li3q.js";import"./step-C-chH2xx.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BZ2W0rhn.js";import"./Dot-DTeilXrV.js";import"./getRadiusAndStrokeWidthFromDot-BZxUZerd.js";import"./useElementOffset-vRae3IDL.js";import"./uniqBy-CL-auK3D.js";import"./iteratee-0wRIkf1Y.js";import"./Cross-CQvmUF5W.js";import"./Sector-Dm-C0kgO.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
