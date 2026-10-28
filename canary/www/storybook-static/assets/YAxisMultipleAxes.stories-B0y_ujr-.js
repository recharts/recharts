import{R as t}from"./iframe-BmTk4yvk.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BmZ1tujZ.js";import{R as l}from"./zIndexSlice-Yn5j7TCZ.js";import{C as x}from"./ComposedChart-Bc1PW_h6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DUH-v_z7.js";import{L as a}from"./Line-IaR1SHtj.js";import{X as c}from"./XAxis-p_vhpROA.js";import{T as g}from"./Tooltip-Dbu0x0bj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CYaQfkAd.js";import"./Text-U4GGp_wV.js";import"./resolveDefaultProps-Cn0PCCle.js";import"./pageBackground-QX1GlboQ.js";import"./ZIndexLayer-DvmFXfZN.js";import"./index-iOVTbJVR.js";import"./index-DmmaZxkJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DyW5Xsuk.js";import"./throttle-C169ds0A.js";import"./axisSelectors-jta8-9EA.js";import"./d3-scale-B_DRoaP4.js";import"./CartesianAxis-DCukA67Z.js";import"./Layer-DW7OR7eh.js";import"./types-BwQb0UT4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dl_orwkE.js";import"./index-D6yCXLHc.js";import"./index-D-9h2rsp.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C4oIzQNw.js";import"./index-DOadfo9X.js";import"./CartesianChart-Fep-b6_D.js";import"./ZIndexPortal-CWm5UVGf.js";import"./CategoricalChart-D92RpbLO.js";import"./LabelList-DAIqpE2b.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BQWOwYE7.js";import"./useAnimationId-Crx209Lx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DOogD9OD.js";import"./tooltipContext-DyPZF-9p.js";import"./dataEntryStyles-D6I3YMTN.js";import"./ErrorBarContext-BA2m5B_Z.js";import"./activeStyles-PiE_qWsW.js";import"./SetGraphicalItem-DFIrza8W.js";import"./getZIndexFromUnknown-BqKh9M0Y.js";import"./useEffectiveDataKey-B__g_9Jm.js";import"./omit-KtLDLyCm.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DHjJHUtL.js";import"./step-X3pWD_rY.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D2fdi6S1.js";import"./Dot-DCITuPps.js";import"./Symbols-C5McylxL.js";import"./symbol-DPYOxqZZ.js";import"./getRadiusAndStrokeWidthFromDot-K0OFVwh2.js";import"./useElementOffset-DovHdXKI.js";import"./uniqBy-CVbVBefT.js";import"./iteratee-Hm5_kqpS.js";import"./Cross-lS0mKWas.js";import"./Sector-D6DggYJm.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
