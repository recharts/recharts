import{R as t}from"./iframe-DqyoK0ud.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-_lbVlQrz.js";import{R as l}from"./zIndexSlice-BLzMP0pQ.js";import{C as x}from"./ComposedChart-BYOmpYyX.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D75AP1PQ.js";import{L as a}from"./Line-DO5n4YO0.js";import{X as c}from"./XAxis-BatUM5pq.js";import{T as g}from"./Tooltip-CR34NQkj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C_IP7EJJ.js";import"./Text-2V5_vcbB.js";import"./resolveDefaultProps-Ck8pmjzH.js";import"./pageBackground-DCkPUiBo.js";import"./useId-DxxYvKaU.js";import"./ZIndexLayer-DDKk2bqL.js";import"./index-BsuCzGf5.js";import"./index-CssgCrFq.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CBUZ9Z3j.js";import"./throttle-Dn4JCjly.js";import"./dataEntryStyles-sIqJlf-4.js";import"./axisSelectors-CFa3shM-.js";import"./d3-scale-oZSie1D-.js";import"./CartesianAxis-MuFUII6s.js";import"./Layer-svnx0Bdz.js";import"./types-DD3eyhWj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DhCNe_6s.js";import"./index-CtviIcDK.js";import"./index-BwS7ULIY.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bv3_Hj5n.js";import"./index-wVxsoSnH.js";import"./CartesianChart-_Aa3OKSl.js";import"./chartDataContext-MbnhVXSW.js";import"./CategoricalChart-EiDYPGiV.js";import"./activeStyles-D0nGCC2C.js";import"./useAnimationId-b5BOeEdT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DW2Nkmcm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-HHjD57n-.js";import"./tooltipContext-Dh-jfrtk.js";import"./RegisterGraphicalItemId-DywfiWqL.js";import"./ErrorBarContext-CHgLAGYu.js";import"./SetGraphicalItem-DDAjd9Yt.js";import"./getZIndexFromUnknown-D1LNvxgr.js";import"./useEffectiveDataKey-D-FiIxk6.js";import"./omit-DwHp4S1F.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B4FKLROM.js";import"./step-DDV9RjiH.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B12yNU4r.js";import"./Dot-BOVBX4q2.js";import"./Symbols-CYwitPRM.js";import"./symbol-DWxTznCL.js";import"./getRadiusAndStrokeWidthFromDot-DMbsIH9n.js";import"./useElementOffset-C0YlHWpD.js";import"./uniqBy-CGKsPvnn.js";import"./iteratee-BKsZSq5H.js";import"./Cross-DyA4am9f.js";import"./Sector-DX9pAAzL.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
