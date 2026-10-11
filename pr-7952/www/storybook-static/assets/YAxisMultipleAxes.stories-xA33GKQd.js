import{R as t}from"./iframe-BR4M1uiR.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DWcZ5Lh0.js";import{R as l}from"./zIndexSlice-HrFSVAcv.js";import{C as x}from"./ComposedChart-HjQSkOyf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-4Fp57F5t.js";import{L as a}from"./Line-BPjJBSiN.js";import{X as c}from"./XAxis-CcBq3_nh.js";import{T as g}from"./Tooltip-fk4Y29bw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-XYAyrwIP.js";import"./Text-VnSH714e.js";import"./resolveDefaultProps-BLjA4bYj.js";import"./pageBackground-DPb5heYZ.js";import"./isWellBehavedNumber-D_WQYNTo.js";import"./useId-pURs8c9G.js";import"./useBackwardsCompatibleTheme-D05qWzDc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CLaDw56X.js";import"./index-Ci_VIYcH.js";import"./index-BnaGZY2I.js";import"./axisSelectors-BqweAZHb.js";import"./throttle-G6Y8pgni.js";import"./d3-scale-CeZrfwiY.js";import"./CartesianAxis-CHydPwh7.js";import"./Layer-DlfW1ESK.js";import"./types-B-qT5SDC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BfPj2XQ-.js";import"./index-YkNArcGN.js";import"./index-D8NvIHNM.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-B0bWwFQm.js";import"./index-CncCwIwt.js";import"./CartesianChart-q49HIkvw.js";import"./chartDataContext-BuFcKplQ.js";import"./CategoricalChart-2FTjt8Lf.js";import"./activeStyles-WDF83Cdx.js";import"./useAnimationId-AG0wMyfL.js";import"./dataEntryStyles-DLaplEnq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-uO21666K.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CPXOp-Yk.js";import"./tooltipContext-CAZrkwKt.js";import"./ErrorBarContext-DuGO1Y_l.js";import"./GraphicalItemClipPath-yRc51fA7.js";import"./SetGraphicalItem-BfeYb81m.js";import"./getZIndexFromUnknown-891K1Cxo.js";import"./useEffectiveDataKey-B_fgXjH_.js";import"./Curve-D8aJ7Tuc.js";import"./step-CbSh2F2e.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BSY_3c_N.js";import"./Dot-BLsUlW8t.js";import"./getRadiusAndStrokeWidthFromDot-Cs2lmqDd.js";import"./useElementOffset-BgqvZiar.js";import"./uniqBy-Duhs8M_o.js";import"./iteratee-DjlDP_tJ.js";import"./Cross-Dq_SuLms.js";import"./Sector-BI71AD0D.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
