import{R as t}from"./iframe-Cr7yvMyR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CzA9LN6m.js";import{R as l}from"./zIndexSlice-CsHxFK6N.js";import{C as x}from"./ComposedChart-Br0t_Hun.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DVfa4EfK.js";import{L as a}from"./Line-BPy1KVNT.js";import{X as c}from"./XAxis-6YWl141g.js";import{T as g}from"./Tooltip-DiW-QkFW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bde3ooKp.js";import"./Text-Bgk62K3n.js";import"./resolveDefaultProps-7XokfeB_.js";import"./DOMUtils-DpKBhuMF.js";import"./ZIndexLayer-DE1YK584.js";import"./index-BW-7B_Oi.js";import"./index-BxNxBv76.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bu65NBmY.js";import"./throttle-RI9qCIcF.js";import"./axisSelectors-BefgmR9V.js";import"./d3-scale-DsBZl9Yj.js";import"./CartesianAxis-CEqebLVd.js";import"./Layer-Dr_Plb3q.js";import"./types-NTnKzXXZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BFO9fjGk.js";import"./index-D9o51X71.js";import"./index-DqRp8Gio.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DtToZ6Qn.js";import"./index-DcWjrMSV.js";import"./CartesianChart-BdMrkwen.js";import"./ZIndexPortal-BAJpkEGh.js";import"./CategoricalChart-Cyp6BiKR.js";import"./LabelList-DKDyf66o.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CzWgcXDx.js";import"./useAnimationId-CrRcWCxT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DimJ4nan.js";import"./tooltipContext-ifh8sNcF.js";import"./dataEntryStyles-Df9giDaD.js";import"./ErrorBarContext-DICVo2af.js";import"./activeStyles-4Qukhfp5.js";import"./SetGraphicalItem-CPzrGo_B.js";import"./getZIndexFromUnknown-tEuScjx0.js";import"./useEffectiveDataKey-DcbjY3Lr.js";import"./fillDefinitions-C6DfZjQD.js";import"./omit-CIkpQC4Z.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BMeJMEVZ.js";import"./step-C7lw2IuE.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CeFLQPPR.js";import"./Dot-C8oJPXZf.js";import"./Symbols-BTpF-zfb.js";import"./symbol-AnQJSsJ7.js";import"./getRadiusAndStrokeWidthFromDot-BmiuMj8w.js";import"./useElementOffset-DLS-U19J.js";import"./uniqBy-WRjYJOFh.js";import"./iteratee-ru1DkRCS.js";import"./Cross-Bh3oRRwe.js";import"./Sector-BicQVizF.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
