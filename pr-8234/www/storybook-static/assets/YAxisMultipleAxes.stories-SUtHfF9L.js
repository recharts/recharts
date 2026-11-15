import{R as t}from"./iframe-Co7Udrye.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CRk-eV3B.js";import{R as l}from"./zIndexSlice-DOrD3bq8.js";import{C as x}from"./ComposedChart-Bbn1F0DT.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CUuauI_5.js";import{L as a}from"./Line-x-R_Kf7-.js";import{X as c}from"./XAxis-C4fRrpXS.js";import{T as g}from"./Tooltip-nc81_9QB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DffVq635.js";import"./Text-DVQecdV7.js";import"./resolveDefaultProps-Dj6LZrRJ.js";import"./ZIndexLayer-DEtSsufZ.js";import"./index-5ZcPFJjn.js";import"./index-CzbcfkCz.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-c8_8zpzH.js";import"./throttle-Cc_t6lxE.js";import"./axisSelectors-e3Zjl34d.js";import"./d3-scale-DSuWQh9E.js";import"./CartesianAxis-CBeq856j.js";import"./Layer-C65liL5F.js";import"./types-CNLXZtmS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Isf4L0Ae.js";import"./index-DQWwvV1b.js";import"./index-CKK_KqSf.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CzRhzMVT.js";import"./index-CXV1GNFt.js";import"./fillDefinitions-CeRUcb47.js";import"./CartesianChart-CFLJJfWX.js";import"./chartDataContext-BKcXeGAI.js";import"./CategoricalChart-DPV1qzDX.js";import"./dataEntryStyles-KlXlC10J.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CFZCBY1B.js";import"./useAnimationId-DDJ6zjpL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CIdGHQK5.js";import"./tooltipContext-CJlsJU_o.js";import"./ErrorBarContext-DzV5SKcC.js";import"./activeStyles-dIWWSidH.js";import"./SetGraphicalItem-CrBdfN6J.js";import"./getZIndexFromUnknown-CuGIjvif.js";import"./useEffectiveDataKey-C3nLlcoP.js";import"./omit-CFjlI9EB.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CTNqeiLd.js";import"./step-hcE1AvzR.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DbiUIU0R.js";import"./Dot-i29ttLNG.js";import"./Symbols-zaaHBVPb.js";import"./symbol-B6ox5qf9.js";import"./getRadiusAndStrokeWidthFromDot-Bxe1mCKc.js";import"./useElementOffset-yaxFxPbx.js";import"./uniqBy-HSw8sR7S.js";import"./iteratee-wNQh5Cd7.js";import"./Cross-D5k0JUgR.js";import"./Sector-BXDrijJd.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
