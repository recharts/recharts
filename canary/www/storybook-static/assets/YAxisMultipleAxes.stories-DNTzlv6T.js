import{R as t}from"./iframe-E8y1LHOl.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DUr2r86j.js";import{R as l}from"./zIndexSlice-CP2K5fjd.js";import{C as x}from"./ComposedChart-LbzptMCb.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BYS7Seaa.js";import{L as a}from"./Line-DkSRoaUJ.js";import{X as c}from"./XAxis-CQma6gAW.js";import{T as g}from"./Tooltip-DsmV1b_B.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DN0LsbYZ.js";import"./Text-BdpTntNA.js";import"./resolveDefaultProps-Dp5H_7QD.js";import"./DOMUtils-8lkeZOFq.js";import"./isWellBehavedNumber-CRMuJk7d.js";import"./useId-BmVi-H88.js";import"./useBackwardsCompatibleTheme-vYz6naZ1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-m7llBpH3.js";import"./index-B9tVeqRW.js";import"./index-DPYTKeUs.js";import"./RechartsWrapper-C8PWTH_z.js";import"./axisSelectors-Bx3EdZdn.js";import"./throttle-BI-R_Jee.js";import"./d3-scale-DaRSGBEX.js";import"./index-uIxCQJLq.js";import"./index-BIh6D11j.js";import"./renderedTicksSlice-C2dkiWvM.js";import"./index-ozGQLW8c.js";import"./CartesianAxis-Cha6t-QP.js";import"./Layer-Bg2OEiKj.js";import"./types-Din7IpfN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BBRLk3sY.js";import"./chartDataContext-BjS41WHN.js";import"./CategoricalChart-ZbKNQGxB.js";import"./AnimatedItems-c6sC2Ph5.js";import"./useAnimationId-MpB0cIEG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D4vCsGb7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CpmlaViF.js";import"./tooltipContext-DA8pxA3I.js";import"./RegisterGraphicalItemId-zHC8jjTe.js";import"./ErrorBarContext-Bj9hGQm8.js";import"./GraphicalItemClipPath-B1o9CCBQ.js";import"./SetGraphicalItem-BwH3S5eX.js";import"./getZIndexFromUnknown-B7gaUUXJ.js";import"./useGraphicalItemIdentity-C1Aa_3nu.js";import"./Curve-CzvWk0Dg.js";import"./step-uXGSGbmf.js";import"./path-DyVhHtw_.js";import"./ActivePoints-wk2Fpufe.js";import"./Dot-C5og9dHv.js";import"./getRadiusAndStrokeWidthFromDot-xNb8nybi.js";import"./useElementOffset-B-KqThyE.js";import"./uniqBy-BLB5pAg_.js";import"./iteratee-DAhSWhx1.js";import"./Cross-CCHmuHmD.js";import"./Sector-B6g6C-iG.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
