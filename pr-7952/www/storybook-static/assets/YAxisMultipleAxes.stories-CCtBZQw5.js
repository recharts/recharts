import{R as t}from"./iframe-DIGZheBd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-pOdEjlW4.js";import{R as l}from"./zIndexSlice-_cU-ODvm.js";import{C as x}from"./ComposedChart-AI3knhdQ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CoEyq2yh.js";import{L as a}from"./Line-sf0r7qgd.js";import{X as c}from"./XAxis-JeVlcNJo.js";import{T as g}from"./Tooltip-Cd8nZnBm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DdnBRnzY.js";import"./Text-OwXAxNhC.js";import"./resolveDefaultProps-7SQuNWZq.js";import"./pageBackground-CxPMNoKP.js";import"./isWellBehavedNumber-DN4lRp81.js";import"./useId-C_XdBO39.js";import"./useBackwardsCompatibleTheme-CVHM2al0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Csfe5z3g.js";import"./index-d4xmlami.js";import"./index-Ddn_7QMu.js";import"./axisSelectors-D8SOTwsy.js";import"./throttle-BSuBUnwb.js";import"./d3-scale-DdurYsOp.js";import"./CartesianAxis--bh-_8od.js";import"./Layer-CyJKyehG.js";import"./types-MK9UFfTC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-v8ZBDgTH.js";import"./index-CQhVaGTX.js";import"./index-DhWUPbJL.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CZtBBFTk.js";import"./index-CiMP-PEk.js";import"./CartesianChart-qIKAIThb.js";import"./chartDataContext-F14SePCT.js";import"./CategoricalChart-CmpWafRJ.js";import"./activeStyles-BNdVOgR8.js";import"./useAnimationId-ddL2Z7oo.js";import"./dataEntryStyles-B4e5hdgG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CbIHVVOf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cn4dsa1I.js";import"./tooltipContext-DXl9iCeE.js";import"./ErrorBarContext-Bx6RRNyu.js";import"./GraphicalItemClipPath-DV_97DBL.js";import"./SetGraphicalItem-BLdBkmkm.js";import"./getZIndexFromUnknown-LNrjdUtF.js";import"./useEffectiveDataKey-DDZKQvTb.js";import"./Curve-DTsvKbrn.js";import"./step-DnA-tUNV.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DCRcJ-JV.js";import"./Dot-Dr6-XXth.js";import"./getRadiusAndStrokeWidthFromDot-CEhKuZ-K.js";import"./useElementOffset-MF99uNag.js";import"./uniqBy-De-60mdC.js";import"./iteratee-UNnIxzF9.js";import"./Cross-C0f6ReDS.js";import"./Sector-B1hWzDc8.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
