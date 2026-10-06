import{R as t}from"./iframe-B0eldO7v.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DlMMTkQY.js";import{R as l}from"./zIndexSlice-CXop2G5e.js";import{C as x}from"./ComposedChart-Ddcti6fy.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DwdmCObD.js";import{L as a}from"./Line-YlkEKwc2.js";import{X as c}from"./XAxis-GLXwZBor.js";import{T as g}from"./Tooltip-5CgqzNe4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-wnFLP2Gb.js";import"./Text-DkYUHdlt.js";import"./resolveDefaultProps-Dl5A3vcA.js";import"./DOMUtils-DXyJKZjT.js";import"./isWellBehavedNumber-Bs9ryC8U.js";import"./useId-ByWKwJ9t.js";import"./useBackwardsCompatibleTheme-peNjLWv-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CuGirjla.js";import"./index-DCLOFYkq.js";import"./index-BKRX5CvI.js";import"./RechartsWrapper-BwMPh17B.js";import"./axisSelectors-B4pxDEAY.js";import"./throttle-D7OWylrB.js";import"./d3-scale-B5kcweJa.js";import"./index-C_-NyhpR.js";import"./index-Bdj7MaD4.js";import"./renderedTicksSlice-D3LeHV-Y.js";import"./index-DlY7-xoe.js";import"./CartesianAxis-a7vTeDpH.js";import"./Layer-BkeFUCM0.js";import"./types-BECNnjMS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CoOYNy_x.js";import"./chartDataContext-1U_QIO6p.js";import"./CategoricalChart-B8AkurP8.js";import"./AnimatedItems-Bli2w_x8.js";import"./useAnimationId-REGnqG-r.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DyM-3MEd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BmGLuzNe.js";import"./tooltipContext-DtgHnlRp.js";import"./RegisterGraphicalItemId-DGTqEQmn.js";import"./ErrorBarContext-CZy75mIo.js";import"./GraphicalItemClipPath-DvdFYP5C.js";import"./SetGraphicalItem-FUNEgggo.js";import"./getZIndexFromUnknown-DPvLYTjO.js";import"./useGraphicalItemIdentity-CcjTcmiI.js";import"./dataEntryStyles-C5xrLZRR.js";import"./Curve-W12vhYO0.js";import"./step-BjD9SRNv.js";import"./path-DyVhHtw_.js";import"./ActivePoints-oqRPT4fh.js";import"./Dot-poKEwaeq.js";import"./getRadiusAndStrokeWidthFromDot-D6ch2P3E.js";import"./useElementOffset-BDQugZlL.js";import"./uniqBy-DV92PZmp.js";import"./iteratee-BFwZldwX.js";import"./Cross-Ch2o7XgX.js";import"./Sector-otVCANJI.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
