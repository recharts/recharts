import{R as t}from"./iframe-BU2uaiQT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-D8lRSYCy.js";import{R as l}from"./zIndexSlice-B7Ww3qol.js";import{C as x}from"./ComposedChart-0ICAtkFu.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CLLqFQpZ.js";import{L as a}from"./Line-D-cMfYZE.js";import{X as c}from"./XAxis-BnGZclY4.js";import{T as g}from"./Tooltip-Di5rd_WR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CM1LVEBq.js";import"./Text-DcepGaW8.js";import"./resolveDefaultProps-C2wLywwD.js";import"./ZIndexLayer-DWfXGHkj.js";import"./index-DgFA6NAr.js";import"./index-BrUaXQP2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-NZrfm7K-.js";import"./throttle-CcBx4b7F.js";import"./axisSelectors-D_lL4SFu.js";import"./d3-scale-BmCizgpV.js";import"./CartesianAxis-CdjY0Szh.js";import"./Layer-Bk2JkGA1.js";import"./types-BGeljdCR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CbO7RmCe.js";import"./index-KnqMoSVw.js";import"./index-Y51TWOSn.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DJs7SFO5.js";import"./index-BmKufkZC.js";import"./fillDefinitions-CvAEkStr.js";import"./CartesianChart-C6-Tr1WN.js";import"./chartDataContext-C2FLfdfd.js";import"./CategoricalChart-LCCfHS5i.js";import"./dataEntryStyles-BQSK-138.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-uMWe5cKm.js";import"./useAnimationId-DGhOgRI0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BmdPhGHL.js";import"./tooltipContext-BjFnZuq0.js";import"./ErrorBarContext-CIErDLim.js";import"./activeStyles-C3KdIcht.js";import"./SetGraphicalItem-DIE9SpoX.js";import"./getZIndexFromUnknown-l5v6dV56.js";import"./useEffectiveDataKey-u5bBQA4i.js";import"./omit-DOZ0aYhm.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-EXJcUNWf.js";import"./Curve-CAcSf3Dw.js";import"./step-B9D1ky0j.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BVY4H7tc.js";import"./Dot-tdH7rvCo.js";import"./Symbols-D3wHF1gQ.js";import"./symbol-4tNLkD_c.js";import"./useElementOffset-BuXfzakd.js";import"./uniqBy-BDVNLrho.js";import"./iteratee-CgzDSGu2.js";import"./Cross-CmIGzPmv.js";import"./Sector-PvLx7sIM.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
