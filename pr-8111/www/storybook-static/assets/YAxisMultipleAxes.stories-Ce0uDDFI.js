import{R as t}from"./iframe-BGCZ_YYu.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-QzbIIYXn.js";import{R as l}from"./zIndexSlice-cBJ2sUns.js";import{C as x}from"./ComposedChart-BaMrMimU.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C0d-SAnU.js";import{L as a}from"./Line-CYsPPfA1.js";import{X as c}from"./XAxis-CnHX8rYU.js";import{T as g}from"./Tooltip-Bz4_VSSX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CG8eDc0p.js";import"./Text-Cf8nBYte.js";import"./resolveDefaultProps-RfjxFv_h.js";import"./pageBackground--uJKRUbH.js";import"./ZIndexLayer-DBU2Ux2U.js";import"./index-CJpeiM5R.js";import"./index-DRH8hgtI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-9JDQkQFq.js";import"./throttle-Dnn9iNkE.js";import"./axisSelectors-BgHWKfZW.js";import"./d3-scale-WNvBVnHd.js";import"./CartesianAxis-D7nh9FWg.js";import"./Layer-FBjFYiDN.js";import"./types-BvE9AUsn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-0yL2Eztm.js";import"./index-BoRJhsa5.js";import"./index-DsAYZFOJ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DzjZykj4.js";import"./index-CnE4B9N1.js";import"./CartesianChart-chY_bHfR.js";import"./ZIndexPortal-UfnKJ6nq.js";import"./CategoricalChart-rRn_svVP.js";import"./LabelList-D60Hhpwl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D8zVG-_m.js";import"./useAnimationId-D-9kXAza.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CbZu-UwN.js";import"./tooltipContext-Bb3r7G0b.js";import"./dataEntryStyles--27SN7qD.js";import"./ErrorBarContext-B946Wqqn.js";import"./activeStyles-CJOfqay0.js";import"./SetGraphicalItem-Cbavgyyx.js";import"./getZIndexFromUnknown-CLzovvO6.js";import"./useEffectiveDataKey-B32bFSWN.js";import"./omit-E8rFtmot.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BoHAwgnl.js";import"./step-QoITrG4U.js";import"./path-DyVhHtw_.js";import"./ActivePoints-GRJI6yy-.js";import"./Dot-CzpZnZIc.js";import"./Symbols-Caix5zUY.js";import"./symbol-1qTipyom.js";import"./getRadiusAndStrokeWidthFromDot-CNsKyJ5a.js";import"./useElementOffset-rPBNT425.js";import"./uniqBy-DwLo8bza.js";import"./iteratee-BrjIAann.js";import"./Cross-C665WITi.js";import"./Sector-XH0zRT2M.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
