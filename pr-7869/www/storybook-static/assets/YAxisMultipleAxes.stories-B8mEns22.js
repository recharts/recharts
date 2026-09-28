import{R as t}from"./iframe-w_s9Pd89.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CCoq1LN0.js";import{R as l}from"./zIndexSlice-it-eJu8g.js";import{C as x}from"./ComposedChart-DhweWezK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BmSSU9vX.js";import{L as a}from"./Line-Cz9iuHIb.js";import{X as c}from"./XAxis-vfiIl3GE.js";import{T as g}from"./Tooltip-BmhbtTd1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-hJtR_DxY.js";import"./Text-JLeCEDp8.js";import"./resolveDefaultProps-6WLroyVF.js";import"./DOMUtils-BAN9qVyI.js";import"./isWellBehavedNumber-Dd6bWbIs.js";import"./useId-BHCtlGO9.js";import"./useBackwardsCompatibleTheme-o--ajDl9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-29vxzJUo.js";import"./index-BpnKJ17e.js";import"./index-C_RIjmQF.js";import"./RechartsWrapper-Ddpcm_Bi.js";import"./axisSelectors-BCLDkErh.js";import"./throttle-CTOajQ3R.js";import"./d3-scale-CNw_APXm.js";import"./index-DXNGRRuP.js";import"./index-JMX4B72w.js";import"./renderedTicksSlice-rrZYFmVg.js";import"./index-ZJJtOEb6.js";import"./CartesianAxis-Dt-9RID0.js";import"./Layer-3ye4UFiI.js";import"./types-o4OSUUn5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DHQ6NGvH.js";import"./chartDataContext-2knnLAcK.js";import"./CategoricalChart--3BVlkMW.js";import"./AnimatedItems-DvmQd7Rs.js";import"./useAnimationId-CYLXREv3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D15ntAhJ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CcbjFIOc.js";import"./tooltipContext-DSfyxxbv.js";import"./RegisterGraphicalItemId-BROviYY7.js";import"./ErrorBarContext-DSm_oAUC.js";import"./GraphicalItemClipPath-DbdrEo0q.js";import"./SetGraphicalItem-B0AS2kak.js";import"./getZIndexFromUnknown-COoVNcCx.js";import"./useGraphicalItemIdentity-D2kK-yFr.js";import"./Curve-DX6i7y1N.js";import"./step-BOR9D5VT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CQqYot6E.js";import"./Dot-9MVoPrmB.js";import"./getRadiusAndStrokeWidthFromDot-BE8QNtys.js";import"./useElementOffset-CYFoVs6J.js";import"./uniqBy-CtwcYJv4.js";import"./iteratee-Czd3Xbj-.js";import"./Cross-B86mQX4m.js";import"./Sector-C_7QN0KL.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
