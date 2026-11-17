import{R as t}from"./iframe-DU9JCgt3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BhPAk-qT.js";import{R as l}from"./zIndexSlice-CxGcNVtb.js";import{C as x}from"./ComposedChart-CdeuUBYe.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BJWwBkYN.js";import{L as a}from"./Line--t4nfpf_.js";import{X as c}from"./XAxis-aQms9ffh.js";import{T as g}from"./Tooltip-B8DR2I5Y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-TtbmFLuu.js";import"./Text-CxPCVLsv.js";import"./resolveDefaultProps-DjHw4YyH.js";import"./ZIndexLayer-DyKyG2im.js";import"./index-BY0VFtFS.js";import"./index-CswZpk24.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-2A6VXBMe.js";import"./throttle-BSvWgvBy.js";import"./axisSelectors-Ba1wHviL.js";import"./d3-scale-D71t0tOP.js";import"./CartesianAxis-CbM1zHQj.js";import"./Layer-8TmRCycn.js";import"./types-BRIT5d70.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dpx6Aro9.js";import"./index-BABuRh0J.js";import"./index-CiCV4MQd.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-EGU-JwYV.js";import"./index-BMDBiiS9.js";import"./fillDefinitions-CAZ5LaLK.js";import"./CartesianChart-D0Nvp_pW.js";import"./chartDataContext-D3U_nlv4.js";import"./CategoricalChart-BN1LMHzB.js";import"./dataEntryStyles-BKp-1fzi.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cr7srdQH.js";import"./useAnimationId-CMFzH8KV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CkxgtXn-.js";import"./tooltipContext-xMvvQpbu.js";import"./ErrorBarContext-Cf3Qd7xR.js";import"./activeStyles-DjdKzu9Y.js";import"./SetGraphicalItem-Dj9i93RZ.js";import"./getZIndexFromUnknown-CeoGTCvF.js";import"./useEffectiveDataKey-9kbdNBk-.js";import"./omit-DVlhLFfn.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DhmVJFDn.js";import"./Curve-CiFPjJzw.js";import"./step-CSLjLb0b.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BMENxG1Z.js";import"./Dot-Cq9hKL4h.js";import"./Symbols-CqwNhkfd.js";import"./symbol-C9biWcKI.js";import"./useElementOffset-n2MkMml8.js";import"./uniqBy-y429opov.js";import"./iteratee-Hdf7I3vo.js";import"./Cross-DvFr-zYd.js";import"./Sector-CMcVdojt.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
