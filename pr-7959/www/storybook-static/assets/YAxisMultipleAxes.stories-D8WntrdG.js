import{R as t}from"./iframe-D1Pqp3X7.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bx5HOyiU.js";import{R as l}from"./zIndexSlice-CC0vixK0.js";import{C as x}from"./ComposedChart-BLkMIV9V.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DiosrxrU.js";import{L as a}from"./Line-DYKbaseg.js";import{X as c}from"./XAxis-T7u0Y27W.js";import{T as g}from"./Tooltip-CtEEN_E_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CD1DJmaw.js";import"./Text-B3gTwU4t.js";import"./resolveDefaultProps-BY3VWyF-.js";import"./pageBackground-BD-8uHz0.js";import"./isWellBehavedNumber-D9UYuuaw.js";import"./useId-DZsUPY-C.js";import"./useBackwardsCompatibleTheme-yQkddBeS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bv7_Srb_.js";import"./index-hC6YZk0S.js";import"./index-4O2rY_Cx.js";import"./axisSelectors-D2uT0zOX.js";import"./throttle-ukQujWSR.js";import"./d3-scale-BBX2CRCX.js";import"./CartesianAxis-By4dWd7I.js";import"./Layer-Bv1Fmb_W.js";import"./types-CpySGoie.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BfFvXFNo.js";import"./index-tZNJXdgS.js";import"./index-BxZa8ohf.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Dlv3UuBc.js";import"./index-C4H2qa0s.js";import"./CartesianChart-C5RCyQJ8.js";import"./chartDataContext-Bgnde7n0.js";import"./CategoricalChart-B93ipspd.js";import"./activeStyles-Bni41BPX.js";import"./useAnimationId-Bu_aUyhK.js";import"./dataEntryStyles-DesCUen4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BPXhboaf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-NtxvAIW2.js";import"./tooltipContext-Bfi59ks3.js";import"./ErrorBarContext-CR6eW5Ea.js";import"./GraphicalItemClipPath-BrZXwUEO.js";import"./SetGraphicalItem-DW-Ki2gV.js";import"./getZIndexFromUnknown-66XFS-A6.js";import"./useEffectiveDataKey-D04u3iKL.js";import"./Curve-D1xsq6-l.js";import"./step-7AUpGbZt.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BTUoBtm0.js";import"./Dot-q9DoNaCP.js";import"./getRadiusAndStrokeWidthFromDot-8ztb8GwF.js";import"./useElementOffset-CxHlgG-v.js";import"./uniqBy-o1mWMSKB.js";import"./iteratee-CVrITLYk.js";import"./Cross-BIngWomV.js";import"./Sector-COw70WOV.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
