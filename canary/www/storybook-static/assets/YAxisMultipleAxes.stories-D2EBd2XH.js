import{R as t}from"./iframe-B0MhV86h.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-fXjE14Qf.js";import{R as l}from"./zIndexSlice-JhYmjiRs.js";import{C as x}from"./ComposedChart-Bh5N048-.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BIS-_b0V.js";import{L as a}from"./Line-CWasAWgS.js";import{X as c}from"./XAxis-mSUHawKI.js";import{T as g}from"./Tooltip-Cdn6ZAA0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DtBWxW0-.js";import"./Text-03E8A-Bw.js";import"./resolveDefaultProps-B7HpHAm5.js";import"./pageBackground-qvgCZBpb.js";import"./isWellBehavedNumber-Cfafrgq8.js";import"./useId-BhVD5AMJ.js";import"./useBackwardsCompatibleTheme-DIfSIBwo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-OiTLfYLd.js";import"./index-I3GMq-pj.js";import"./index-R2Dh29NI.js";import"./axisSelectors-CrrgMfKB.js";import"./throttle-BiG1uYFs.js";import"./d3-scale-CR10n00v.js";import"./CartesianAxis-BSkD6k6d.js";import"./Layer-TaFZ6cEO.js";import"./types-BhM_mLRi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DHx9pPwr.js";import"./index-ZJn3ELdV.js";import"./index-By5cImAN.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-B_6wPZYR.js";import"./index-DmgedYxy.js";import"./CartesianChart-plZLO0XN.js";import"./chartDataContext-DI3_2rek.js";import"./CategoricalChart-BLaINhxr.js";import"./activeStyles-DryRBlXh.js";import"./useAnimationId-CudNOC-V.js";import"./dataEntryStyles--cHZ_1nv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJdwGJ58.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BLQr2vhf.js";import"./tooltipContext-D_fCCGhd.js";import"./ErrorBarContext-CxDSe0Hd.js";import"./GraphicalItemClipPath-B8x00Z-R.js";import"./SetGraphicalItem-BAdS99gT.js";import"./getZIndexFromUnknown-BBex5duD.js";import"./useEffectiveDataKey-DkWEBp9n.js";import"./Curve-BkmryfS-.js";import"./step-D52lSMQ-.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DTScXn02.js";import"./Dot-Btw3znVN.js";import"./getRadiusAndStrokeWidthFromDot-B_7w4E3e.js";import"./useElementOffset-D3PGtHdN.js";import"./uniqBy-C-fLvMH7.js";import"./iteratee-Czlzoku_.js";import"./Cross-bltm8sjj.js";import"./Sector-Cg6jha8o.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
