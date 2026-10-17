import{R as t}from"./iframe-DJb0mK8M.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CWLYUyep.js";import{R as l}from"./zIndexSlice-CT0NLGnJ.js";import{C as x}from"./ComposedChart-CuzfZC2T.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CGcY5u7i.js";import{L as a}from"./Line-neFyfXAn.js";import{X as c}from"./XAxis-rFQD6Pba.js";import{T as g}from"./Tooltip-yYvD3jWx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BzZymjIq.js";import"./Text-COb6PIBf.js";import"./resolveDefaultProps-C1NQQxfw.js";import"./pageBackground-CexaD8jP.js";import"./isWellBehavedNumber-BNoJVovK.js";import"./useId-BX-mSSik.js";import"./useBackwardsCompatibleTheme-CKzY57lx.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DD8rlV_m.js";import"./index-CM4XLoJ2.js";import"./index-DkIcBYOu.js";import"./axisSelectors-E250IIX0.js";import"./throttle-BS7HrNsT.js";import"./d3-scale-BU1MyCto.js";import"./CartesianAxis-C-rsFQTF.js";import"./Layer-DK2FwCPg.js";import"./types-B-rYYW-g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CwZjK2uF.js";import"./index-Co9bt_zj.js";import"./index-BZmySJQF.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Cglq1y_f.js";import"./index-CyzL3WIR.js";import"./CartesianChart-DJ8n3cc1.js";import"./chartDataContext-CJdXqT5i.js";import"./CategoricalChart-Dsw_Culz.js";import"./activeStyles-DMsULg9O.js";import"./useAnimationId-CFtssWv7.js";import"./dataEntryStyles-DWwC517V.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KMUMkJf8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-s8ySMG5_.js";import"./tooltipContext-CKCWbFvb.js";import"./ErrorBarContext-CpX10Uwr.js";import"./GraphicalItemClipPath-BFBWrIDQ.js";import"./SetGraphicalItem-BBlb6zhf.js";import"./getZIndexFromUnknown-DTItsiUg.js";import"./useEffectiveDataKey-BCzrZ4XH.js";import"./Curve-Byf9oq4a.js";import"./step-Bi1Gxitb.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CCNXmb9c.js";import"./Dot--GGfWb34.js";import"./getRadiusAndStrokeWidthFromDot-9uxOnNFL.js";import"./useElementOffset-DTnbgc86.js";import"./uniqBy-BuCtx4yQ.js";import"./iteratee-B4Qh_7Gw.js";import"./Cross-BJwlxOAF.js";import"./Sector-CQqm1E0g.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
