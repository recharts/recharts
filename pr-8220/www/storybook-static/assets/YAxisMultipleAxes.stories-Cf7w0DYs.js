import{R as t}from"./iframe-DNXhgPY2.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DAJ4SxQ-.js";import{R as l}from"./zIndexSlice-C_G2hm8X.js";import{C as x}from"./ComposedChart-X9xQAOg_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ClfnPIYa.js";import{L as a}from"./Line-DrXCd3ny.js";import{X as c}from"./XAxis-CJs7Huhu.js";import{T as g}from"./Tooltip-DdJiayHr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Ds6wWWz7.js";import"./Text-_51Pk49J.js";import"./resolveDefaultProps-DX55Ajk9.js";import"./ZIndexLayer-wMGGFAui.js";import"./index-CfUX9U3P.js";import"./index-BHfOcO_x.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-z81ryBra.js";import"./throttle-OaXA1Z9W.js";import"./axisSelectors-CTPBeHC3.js";import"./d3-scale-B8LWxob5.js";import"./CartesianAxis-Dr28b-wt.js";import"./Layer-EsfR_jDG.js";import"./types-DuvV7zSt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-By9MTVsP.js";import"./index-BF5Wrxm3.js";import"./index-BBIEjaB7.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C4y6DVLx.js";import"./index-CjdFEwMf.js";import"./fillDefinitions-DJ3S14WH.js";import"./CartesianChart-Czh_fqoQ.js";import"./chartDataContext-BJtoY4FG.js";import"./CategoricalChart-DPAZKGgc.js";import"./dataEntryStyles-Wu6ggnF0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BDMoKugF.js";import"./useAnimationId-CljrEDcm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B7gfZ4ip.js";import"./tooltipContext-CfXnMrjv.js";import"./ErrorBarContext-j0Aj2Uq7.js";import"./activeStyles-DSoUr8Vz.js";import"./SetGraphicalItem-COzEpMHH.js";import"./getZIndexFromUnknown-DRvebi0r.js";import"./useEffectiveDataKey-CcJJJpcL.js";import"./omit-Dp3F79MV.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DQsYvz2A.js";import"./step-DKewonm6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B_3_DJ4t.js";import"./Dot-BLhlTrFS.js";import"./Symbols-d0jhdEjn.js";import"./symbol-D8br0DPp.js";import"./getRadiusAndStrokeWidthFromDot-CP6kgx-1.js";import"./useElementOffset-D5YMnEix.js";import"./uniqBy-ClVkJmze.js";import"./iteratee-DgvxGvrf.js";import"./Cross-DGGaRhQ1.js";import"./Sector-KfbG1aLo.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
