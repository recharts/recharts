import{R as t}from"./iframe-HQzZVjBz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B3rEjge7.js";import{R as l}from"./zIndexSlice-CGQ7Au-h.js";import{C as x}from"./ComposedChart-CL_dGEsU.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BjvwUTKZ.js";import{L as a}from"./Line-CkvZUxt9.js";import{X as c}from"./XAxis-DRgGc3zf.js";import{T as g}from"./Tooltip-D7UZWLZA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CkcS20G_.js";import"./Text-BOeOqlf9.js";import"./resolveDefaultProps-FnTseFp7.js";import"./pageBackground-BMzh5QHA.js";import"./isWellBehavedNumber-CcswNJGt.js";import"./useId-CLiKfQI1.js";import"./useBackwardsCompatibleTheme-BydTEdxL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B9EFhzLD.js";import"./index-B-hjV7sb.js";import"./index-CoahYeeF.js";import"./axisSelectors-Pv4KR-zj.js";import"./throttle-CBKyBD78.js";import"./d3-scale-Bm5seH5s.js";import"./CartesianAxis-DqRUh5Lc.js";import"./Layer-CZF3Yvdy.js";import"./types-Bq-isVxM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CBd_vSTQ.js";import"./index-Du00f8Ig.js";import"./index-Cd4WuegV.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CHbQgt_R.js";import"./index-DBkbRNLm.js";import"./CartesianChart-CBFKxon3.js";import"./chartDataContext-B1WnW-uC.js";import"./CategoricalChart-CFFTEefl.js";import"./activeStyles-Ctuz9FGV.js";import"./useAnimationId-D_-yy58E.js";import"./dataEntryStyles-CrN8We-Y.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BjPRKiky.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BYEpmP72.js";import"./tooltipContext-vKvxN6XU.js";import"./ErrorBarContext-D0G_BuSS.js";import"./GraphicalItemClipPath-CmI_2v97.js";import"./SetGraphicalItem-CCrIsVeT.js";import"./getZIndexFromUnknown-eACrY9wN.js";import"./useEffectiveDataKey-DU6QRSRw.js";import"./Curve-CCST94p6.js";import"./step-mtRqlT_G.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B2Wdpvql.js";import"./Dot-CrUvj508.js";import"./getRadiusAndStrokeWidthFromDot-DJSL-cTD.js";import"./useElementOffset-BHmZojEb.js";import"./uniqBy-Cq2YPL4f.js";import"./iteratee-CWwfWNkd.js";import"./Cross-Dhxf7mJc.js";import"./Sector-DAAFWhEY.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
