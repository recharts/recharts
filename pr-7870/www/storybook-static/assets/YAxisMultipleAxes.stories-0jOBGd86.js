import{R as t}from"./iframe-BrVE5RSW.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BAuMZklG.js";import{R as l}from"./zIndexSlice-CHsJbjJD.js";import{C as x}from"./ComposedChart-CCPBzUyH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Pe-TgSdc.js";import{L as a}from"./Line-t7QkMSUE.js";import{X as c}from"./XAxis-B0eJFub6.js";import{T as g}from"./Tooltip-Bz9o_0tS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DySzAUNx.js";import"./Text-B4ZIZNbZ.js";import"./resolveDefaultProps-BD9NC1fi.js";import"./DOMUtils-IYFeeRl2.js";import"./isWellBehavedNumber-BVgmnW9g.js";import"./useId-DbY0de1j.js";import"./useBackwardsCompatibleTheme-CF13ge8-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BERp6HrO.js";import"./index-LfrCHYrZ.js";import"./index-Sva1rZOH.js";import"./RechartsWrapper-DQVN278-.js";import"./axisSelectors-BDU1QiXu.js";import"./throttle-BQaLLzka.js";import"./d3-scale-BmnvRTpm.js";import"./index-C5upL2ad.js";import"./index-SZqQo-6K.js";import"./renderedTicksSlice-DXuyBJO_.js";import"./index-BmC-zE0O.js";import"./CartesianAxis-Cn4O1F7T.js";import"./Layer-BvSPpSNQ.js";import"./types-CE2qBNHK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D0yCkzIu.js";import"./chartDataContext-3sx737Gw.js";import"./CategoricalChart-B2Hi-_kM.js";import"./AnimatedItems-Bzkg4GxV.js";import"./useAnimationId-CaCeoqu2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DCi554Vz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DIhJJb_m.js";import"./tooltipContext-BTPPPf7b.js";import"./RegisterGraphicalItemId-Cg9vlh9g.js";import"./ErrorBarContext-CRbR2c4o.js";import"./GraphicalItemClipPath-C1RnAz3w.js";import"./SetGraphicalItem-BFu8ftGQ.js";import"./getZIndexFromUnknown-CBATyizs.js";import"./useGraphicalItemIdentity-BCiQfNgb.js";import"./dataEntryStyles-CFPmkDJC.js";import"./Curve-DQe-iWey.js";import"./step-DvhKjAy0.js";import"./path-DyVhHtw_.js";import"./ActivePoints--e6lCWWz.js";import"./Dot-B2RdazQP.js";import"./getRadiusAndStrokeWidthFromDot-Cg4paiyF.js";import"./useElementOffset-BEglwowY.js";import"./uniqBy-Dh9tSYdQ.js";import"./iteratee-C1RNAWyh.js";import"./Cross-HgvuPp3o.js";import"./Sector-DtDJg615.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
