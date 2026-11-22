import{R as t}from"./iframe-CGGZfnCV.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DBOKklMV.js";import{R as l}from"./zIndexSlice-BqswsCB2.js";import{C as x}from"./ComposedChart-BcV6dG2I.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-tPMtoLyP.js";import{L as a}from"./Line-B9-Nh0Th.js";import{X as c}from"./XAxis-D0RGLID7.js";import{T as g}from"./Tooltip-Dyy4ArfB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BodzTsEv.js";import"./Text-BWSViN8b.js";import"./resolveDefaultProps-DB16si7p.js";import"./ZIndexLayer-DLjlC1Ho.js";import"./index-hNRKJP-1.js";import"./index-BFvwi7Fr.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BM3r_eW-.js";import"./throttle-CPPktxFr.js";import"./axisSelectors-ClqRDW4l.js";import"./d3-scale-DH0gLY6W.js";import"./CartesianAxis-BDMs3FLV.js";import"./Layer-BEhjTHM-.js";import"./types-D01_wvtH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CQP8AqXM.js";import"./index-DZ2zDC6C.js";import"./index-gZNixUu0.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CBqoZXqJ.js";import"./index-1Wp7cDto.js";import"./fillDefinitions-DVvVBqIn.js";import"./CartesianChart-Bh5zn2Cs.js";import"./chartDataContext-L797Ywu5.js";import"./CategoricalChart-DAMpVLQr.js";import"./dataEntryStyles-BLU3QW0Z.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdMdJi_F.js";import"./useAnimationId-CKpnbEUf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dr8eZSqA.js";import"./tooltipContext-tytBYaal.js";import"./ErrorBarContext-C-uWWZZj.js";import"./activeStyles-C8mJMGZo.js";import"./SetGraphicalItem-CpKKIpFz.js";import"./getZIndexFromUnknown-CnwO_WEL.js";import"./useEffectiveDataKey-CaAnzbHC.js";import"./omit-BVNq-1Xe.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-B05KFCuA.js";import"./Curve-CCF7pO5F.js";import"./step-CUQPzItX.js";import"./path-BBMZd4YL.js";import"./ActivePoints-xFZqNI2F.js";import"./Dot-DwUXPQPe.js";import"./Symbols-BkuE8ueA.js";import"./symbol-CmPSaat-.js";import"./useElementOffset-BSU2Mggc.js";import"./uniqBy-awSaeX3A.js";import"./iteratee-CqSBOUYa.js";import"./Cross-DqhWgWA8.js";import"./Sector-BLwaXQQU.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
