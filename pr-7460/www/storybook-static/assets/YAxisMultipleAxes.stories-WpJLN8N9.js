import{R as t}from"./iframe-BaabCOfo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-q_zljZs-.js";import{R as l}from"./zIndexSlice-CWxxXgIH.js";import{C as x}from"./ComposedChart-D9WOh2Dq.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ZE5AQD0g.js";import{L as a}from"./Line-DqlgNAdm.js";import{X as c}from"./XAxis-BXlMIHd8.js";import{T as g}from"./Tooltip-bfsElqCt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C9kPOoUz.js";import"./CartesianAxis-DzzVwONF.js";import"./Layer-64CGscPm.js";import"./resolveDefaultProps-m6H7CCvK.js";import"./Text-BmSZi3Hk.js";import"./DOMUtils-CUUTvSW3.js";import"./isWellBehavedNumber-B34pSeK5.js";import"./Label-C7hyOp5H.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-qDXxNkeJ.js";import"./index-B1UijuQJ.js";import"./index-vSeH92Tc.js";import"./types-hBJB7bDz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-qKkoa7Pp.js";import"./immer-BLHHDgig.js";import"./RechartsWrapper-BzVbI7QS.js";import"./index-DXTcRTSc.js";import"./index-CADxnCms.js";import"./axisSelectors-BaT59QoB.js";import"./d3-scale-xd-t_SLV.js";import"./CartesianChart-C9YeuOyj.js";import"./chartDataContext-DaAkZdG0.js";import"./CategoricalChart-_HoXNLFS.js";import"./tooltipContext-BkqVKhae.js";import"./AnimatedItems-CREItNhG.js";import"./useAnimationId-DievnnW1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CifaugWI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcOcWj43.js";import"./RegisterGraphicalItemId-CuBJ-yCL.js";import"./ErrorBarContext-BTWgR7nJ.js";import"./GraphicalItemClipPath-BPT-cS9W.js";import"./SetGraphicalItem-DPRJSznG.js";import"./getZIndexFromUnknown-DcSgqBPO.js";import"./graphicalItemSelectors-C2JJLewQ.js";import"./Curve-Dz8p7kZF.js";import"./step-Bn04m8nP.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DsUWTgVX.js";import"./Dot-Cxl_B4ln.js";import"./getRadiusAndStrokeWidthFromDot-VrSFbMxb.js";import"./useElementOffset-85rrli-w.js";import"./uniqBy-BJyco1_Z.js";import"./iteratee-DXjRqzC3.js";import"./Cross-K3zjPz7t.js";import"./Sector-D1IL5SHo.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
