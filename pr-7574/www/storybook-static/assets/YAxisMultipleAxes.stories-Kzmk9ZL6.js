import{R as t}from"./iframe-BJ6rGQc6.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-41-XvzNM.js";import{R as l}from"./zIndexSlice-BthxejHI.js";import{C as x}from"./ComposedChart-DAq7OREE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DLBcocq9.js";import{L as a}from"./Line-DLjakGIl.js";import{X as c}from"./XAxis-DjB4BtKv.js";import{T as g}from"./Tooltip-ByztaGJr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-HIzhBiiI.js";import"./Layer-CWFT9o_4.js";import"./resolveDefaultProps-BO6O7yzj.js";import"./Text-B3HJfVNK.js";import"./DOMUtils-B9FEHnPQ.js";import"./isWellBehavedNumber-DPc5CIJW.js";import"./Label-GAUKfLbl.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Ux9EkA8k.js";import"./index-BmNs2kCE.js";import"./index-CByH2eT_.js";import"./types-C1lw_8rt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C0Y7ZKTU.js";import"./throttle-cNz-OreL.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-ChNksolv.js";import"./index-mopUcmNZ.js";import"./index-Bmr20IMW.js";import"./axisSelectors-BLC4H6fV.js";import"./d3-scale-DN-uWHg9.js";import"./CartesianChart-Bgx90lkE.js";import"./chartDataContext-sqlI8BYS.js";import"./CategoricalChart-BQ-Zgg5z.js";import"./tooltipContext-DvBuwJmZ.js";import"./AnimatedItems-DC-H_ZkC.js";import"./useAnimationId-DQh6YXIz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-qBxWKOhj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CUDn-tDt.js";import"./RegisterGraphicalItemId-Bwp-eRlf.js";import"./ErrorBarContext-CXKSzW2x.js";import"./GraphicalItemClipPath-C6Rgg4xk.js";import"./SetGraphicalItem-D1cCKorc.js";import"./getZIndexFromUnknown-D4APjW9l.js";import"./graphicalItemSelectors-Cd7Bkold.js";import"./Curve-BjFMHVU-.js";import"./step-D3keTh0D.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BWSLTzTs.js";import"./Dot-WtNB5uJQ.js";import"./getRadiusAndStrokeWidthFromDot-BpprK3MD.js";import"./useElementOffset-DpSWaZPU.js";import"./uniqBy-B13RvOyk.js";import"./iteratee-CgSTNi8h.js";import"./Cross-CZS_5oA_.js";import"./Sector-CV9lEu39.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
