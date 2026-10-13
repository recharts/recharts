import{R as t}from"./iframe-BPWq5wK1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-fdw9Kawy.js";import{R as l}from"./zIndexSlice--l6A9Cgd.js";import{C as x}from"./ComposedChart-eM1OIXHR.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D_uQKEIn.js";import{L as a}from"./Line-T2R0gve-.js";import{X as c}from"./XAxis-DwVZ8t6S.js";import{T as g}from"./Tooltip-DBkA8X4O.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DfIBtU5a.js";import"./Text-Dv2kvEh7.js";import"./resolveDefaultProps-DC_merMH.js";import"./pageBackground-BKi1BKrf.js";import"./isWellBehavedNumber-DPMDsRl8.js";import"./useId-BNAqUaya.js";import"./useBackwardsCompatibleTheme-DmujFuGs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Du5K3aCJ.js";import"./index-CBsqFzOA.js";import"./index-CMYr15XQ.js";import"./axisSelectors-B8iXPLx4.js";import"./throttle-BczP5WrX.js";import"./d3-scale-t9m5JmsQ.js";import"./CartesianAxis-XsFsrZXE.js";import"./Layer-CeC_x2uD.js";import"./types-BIKEZWlZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B7Vn66iT.js";import"./index-QtD_rERt.js";import"./index-CIFWdTWa.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DsTQCipn.js";import"./index-BlcYejsd.js";import"./CartesianChart-DDcEhH92.js";import"./chartDataContext-D-s48IOU.js";import"./CategoricalChart-D94cXkjn.js";import"./activeStyles-Fhy11XH6.js";import"./useAnimationId-37s3ARsg.js";import"./dataEntryStyles-3NXA5k2R.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D1alOuUj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DkTWf27X.js";import"./tooltipContext-B9IfrR_q.js";import"./ErrorBarContext-CMoWJ2Fr.js";import"./GraphicalItemClipPath-DqP6JkJs.js";import"./SetGraphicalItem-C-FePfke.js";import"./getZIndexFromUnknown-DTDS49u5.js";import"./useEffectiveDataKey-CfXPni2y.js";import"./Curve-hjGlvn7z.js";import"./step-1i9O5IHq.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BfMx66PR.js";import"./Dot-C_XJnXRn.js";import"./getRadiusAndStrokeWidthFromDot-CKPkLz7f.js";import"./useElementOffset-BfvhBRS5.js";import"./uniqBy-8hswHbWk.js";import"./iteratee-CyJf82nu.js";import"./Cross-CbZllH3r.js";import"./Sector-DpRb4p_0.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
