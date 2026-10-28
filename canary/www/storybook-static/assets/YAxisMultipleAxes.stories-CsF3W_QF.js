import{R as t}from"./iframe-BFdjndOP.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-XZTx9iJE.js";import{R as l}from"./zIndexSlice-BMXGqLpb.js";import{C as x}from"./ComposedChart-B2SKrzpV.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-YL3Y1dZH.js";import{L as a}from"./Line-CNuAHy19.js";import{X as c}from"./XAxis-B63qJ9KH.js";import{T as g}from"./Tooltip-CiMTL7v1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-fhEADZhw.js";import"./Text-DOzJQY6l.js";import"./resolveDefaultProps-DJFCHaiN.js";import"./pageBackground-CKt6d5Bo.js";import"./ZIndexLayer-Di6AWmDg.js";import"./index-LVwuga6J.js";import"./index-BW02vIAv.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CPTbaBCS.js";import"./throttle--h3a_z5m.js";import"./axisSelectors-BPye2JbP.js";import"./d3-scale-BbKZN6cQ.js";import"./CartesianAxis-Ch7lNcAW.js";import"./Layer-lJQGFAu3.js";import"./types-CW6mEad7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BxVzVivR.js";import"./index-C8219kEG.js";import"./index-CdY5oKLt.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-H7T23RGg.js";import"./index-D4M5TsAW.js";import"./CartesianChart-CvXsANEo.js";import"./ZIndexPortal-BavuMFDc.js";import"./CategoricalChart-DpOkbqlx.js";import"./LabelList-mpaOdaxP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CI5ZTAqr.js";import"./useAnimationId-BieQKvQP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BL-a7-b7.js";import"./tooltipContext-CjS0ZJTI.js";import"./dataEntryStyles-DDh9bN_s.js";import"./ErrorBarContext-ppRLi4g5.js";import"./activeStyles-ClW3aIEp.js";import"./SetGraphicalItem-B6LFxdSb.js";import"./getZIndexFromUnknown-DC1EBUSZ.js";import"./useEffectiveDataKey-CN9bTgz2.js";import"./omit-Drj5or4Z.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BhC7Tab4.js";import"./step-Ck_VDGQS.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DpmLDfVx.js";import"./Dot-BeCJ7sWp.js";import"./Symbols-oeWcvHGW.js";import"./symbol-DfxiLrYg.js";import"./getRadiusAndStrokeWidthFromDot-BZY9OVSR.js";import"./useElementOffset-DAJ27Pif.js";import"./uniqBy-CG_-iAXC.js";import"./iteratee-CyrnsQ_T.js";import"./Cross-D-Xwp2JL.js";import"./Sector-CPd9IaIT.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
