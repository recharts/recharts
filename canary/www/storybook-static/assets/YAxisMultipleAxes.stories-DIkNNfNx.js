import{R as t}from"./iframe-6EoNA_L8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BC8F1g7K.js";import{R as l}from"./zIndexSlice-De49t7iX.js";import{C as x}from"./ComposedChart-Dde-tYrz.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DUdvJfUb.js";import{L as a}from"./Line-yafdaSEb.js";import{X as c}from"./XAxis-D5W76h4C.js";import{T as g}from"./Tooltip-otFnhVXl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BMFW6Zd2.js";import"./Text-DZDh1E85.js";import"./resolveDefaultProps-BeiJcrCE.js";import"./DOMUtils-DNveQWYn.js";import"./isWellBehavedNumber-B08jv1io.js";import"./useId-BXan0_nA.js";import"./useBackwardsCompatibleTheme-BhrjNye9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BqdDjbl9.js";import"./index-DOuZqOP2.js";import"./index-drI4VfER.js";import"./RechartsWrapper-DIgVm8D4.js";import"./axisSelectors-CPDr9W-8.js";import"./throttle-qfBh-gJU.js";import"./d3-scale-BHNzH7iq.js";import"./index-CW_YvHl3.js";import"./index-BUgLS7M1.js";import"./renderedTicksSlice-CIIKzgpq.js";import"./index-BvtgduTj.js";import"./CartesianAxis-BCnvc9Ye.js";import"./Layer-CUxzD1DR.js";import"./types-M0OtQk6p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Cysh7fYc.js";import"./chartDataContext-B2QOvGi0.js";import"./CategoricalChart-BUH5Yjzv.js";import"./AnimatedItems-DI4_Ab0i.js";import"./useAnimationId-peOMMxO5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BR58mqpl.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C7faasOA.js";import"./tooltipContext-CCFV9lmN.js";import"./RegisterGraphicalItemId-DCPWXijy.js";import"./ErrorBarContext-Dh7d5kUD.js";import"./GraphicalItemClipPath-0snefndl.js";import"./SetGraphicalItem-D09cPUlM.js";import"./getZIndexFromUnknown-DW1zPNLP.js";import"./useGraphicalItemIdentity-T4kDeRpG.js";import"./Curve-8un1g3vs.js";import"./step-DSvUWADx.js";import"./path-DyVhHtw_.js";import"./ActivePoints-PbWSPOCC.js";import"./Dot-BF-0bAL8.js";import"./getRadiusAndStrokeWidthFromDot-CTriDtWQ.js";import"./useElementOffset-DLgM4IIx.js";import"./uniqBy-C6BW0yGS.js";import"./iteratee-Dem4U58j.js";import"./Cross-Br0Y2iUW.js";import"./Sector-DtE-jXuU.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
