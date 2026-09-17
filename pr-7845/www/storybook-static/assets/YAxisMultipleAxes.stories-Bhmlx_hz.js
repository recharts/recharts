import{R as t}from"./iframe-DKiAUKfj.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CPqJ1LPY.js";import{R as l}from"./zIndexSlice-DRDYTCs-.js";import{C as x}from"./ComposedChart-7seVkJ1o.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DKemWGCQ.js";import{L as a}from"./Line-6oCir5Dk.js";import{X as c}from"./XAxis-BHxip6nG.js";import{T as g}from"./Tooltip-62Dqd3SI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BqJsTdph.js";import"./Text-DzjLOXSn.js";import"./resolveDefaultProps-wQyeqB4t.js";import"./DOMUtils-kE23eB48.js";import"./isWellBehavedNumber-BQkgEIAs.js";import"./useId-DXDEV1Zs.js";import"./useBackwardsCompatibleTheme-Bntz2N2r.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cu2kJPTs.js";import"./index-B0JUl7NQ.js";import"./index-CGte46WL.js";import"./RechartsWrapper-V6OGhvVE.js";import"./axisSelectors-CgDB5I1Y.js";import"./throttle-C4io43Xn.js";import"./d3-scale-DhJR9ZRz.js";import"./index-D64JEJSP.js";import"./index-BZWqRos3.js";import"./renderedTicksSlice-BJG2XwKW.js";import"./index-CTMR6STe.js";import"./CartesianAxis-C20v2lN6.js";import"./Layer-TOA8EzlX.js";import"./types-CesjT3HQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BTQ_MHvG.js";import"./chartDataContext-CVDaw3GU.js";import"./CategoricalChart-DJIGb7_j.js";import"./AnimatedItems-CPnSyqXV.js";import"./useAnimationId-D05enbBD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C3_ltPRK.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CameuY1c.js";import"./tooltipContext-DM4TP7FV.js";import"./RegisterGraphicalItemId-DL0AdrUW.js";import"./ErrorBarContext-CdB3k_cz.js";import"./GraphicalItemClipPath-DJ7nq7QD.js";import"./SetGraphicalItem-B2eXT-xm.js";import"./getZIndexFromUnknown-2yl0ehkD.js";import"./useGraphicalItemIdentity-BklSfqcr.js";import"./Curve-NEEyYudm.js";import"./step-DrkPABVT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-loRSqDJl.js";import"./Dot-B085JP8i.js";import"./getRadiusAndStrokeWidthFromDot-Bn_cXEBB.js";import"./useElementOffset-CfjQprQ-.js";import"./uniqBy-BRiSgWCU.js";import"./iteratee-DYj_iQuR.js";import"./Cross-CxyMpGOk.js";import"./Sector-gklvmQfA.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
