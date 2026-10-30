import{R as t}from"./iframe-DfPB0Wpx.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BQ4oN9O6.js";import{R as l}from"./zIndexSlice-Vk5rQcki.js";import{C as x}from"./ComposedChart-CjfhBU-E.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BxCpO4Sd.js";import{L as a}from"./Line-CJuI2uq-.js";import{X as c}from"./XAxis-COzQcKyh.js";import{T as g}from"./Tooltip-4Eh1cKx8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-2zEOllgr.js";import"./Text-DaqQgel7.js";import"./resolveDefaultProps-Bt24D4BM.js";import"./DOMUtils-C1IGffYG.js";import"./ZIndexLayer-no9MVuHN.js";import"./index-Ax9OSmSr.js";import"./index-jmk38lRQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-UZRyPZtr.js";import"./throttle-DIfZf6Rg.js";import"./axisSelectors-CYP2U9Wf.js";import"./d3-scale-CsMflnTp.js";import"./CartesianAxis-CNCSz6Km.js";import"./Layer-8vRP1mbc.js";import"./types-D0-9LK1x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DnnXNCqP.js";import"./index-TI8GAjTb.js";import"./index-C7rcjmTF.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DGPnCUTJ.js";import"./index-DZEvNl2j.js";import"./CartesianChart-C7bLJAaP.js";import"./ZIndexPortal-BHohkWL-.js";import"./CategoricalChart-B65nKayz.js";import"./LabelList-Nkxiy7Jt.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CWBHAPFe.js";import"./useAnimationId-C0yM1MFO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CvH07gq7.js";import"./tooltipContext-A7BcXb7p.js";import"./dataEntryStyles-Dc4guk2V.js";import"./themeFill-BkM1x4hA.js";import"./ErrorBarContext-CQDbXt_x.js";import"./activeStyles-ChnEmJqB.js";import"./SetGraphicalItem-BxFlQPUr.js";import"./getZIndexFromUnknown-wwgBEGf2.js";import"./useEffectiveDataKey-DKbAeGMk.js";import"./omit-C14swPMG.js";import"./isArguments-yB-y1yaH.js";import"./Curve-NvY6PR48.js";import"./step-C1TIQlMm.js";import"./path-DyVhHtw_.js";import"./ActivePoints-RRa8EpH6.js";import"./Dot-DTEgYyAs.js";import"./Symbols-DuFTa5a3.js";import"./symbol-DWiA1K--.js";import"./getRadiusAndStrokeWidthFromDot-CgvxCR2o.js";import"./useElementOffset-CqmQGpgi.js";import"./uniqBy-CDxgcpy6.js";import"./iteratee-DH59VCX2.js";import"./Cross-DqBgWcpT.js";import"./Sector-e4AoF70j.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
