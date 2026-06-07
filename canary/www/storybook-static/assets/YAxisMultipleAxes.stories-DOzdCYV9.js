import{R as t}from"./iframe-D7uas6gE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-W2Aym5bJ.js";import{R as l}from"./zIndexSlice-CAxEqTk2.js";import{C as x}from"./ComposedChart-Bu5G-rAT.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-VReZ4uq4.js";import{L as a}from"./Line-Bt42QxV_.js";import{X as c}from"./XAxis-Dlqp3Ogy.js";import{T as g}from"./Tooltip-Cs_Evip6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DF7xdNw5.js";import"./CartesianAxis-C9po9qUK.js";import"./Layer-CiOv_hF8.js";import"./resolveDefaultProps-D-Lsr8PC.js";import"./Text-BI32KZkM.js";import"./DOMUtils-BN2-dIl7.js";import"./isWellBehavedNumber-sBFjFrrH.js";import"./Label-CK9JMWUG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C4cBgWge.js";import"./index-f8LaKELp.js";import"./index-Dk8a2p8j.js";import"./types-ChkVH57z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D97r0PID.js";import"./immer-Bz_FyVM_.js";import"./RechartsWrapper-DPySDgBx.js";import"./index-Dt2ZjhLE.js";import"./index-BtWXQEei.js";import"./axisSelectors-BhBGSIM3.js";import"./d3-scale-DiIEKRDM.js";import"./string-B6fdYHAA.js";import"./CartesianChart-vfyIL2vN.js";import"./chartDataContext-BvY4an5W.js";import"./CategoricalChart-BfBc4XBk.js";import"./tooltipContext-yxMcj-ay.js";import"./AnimatedItems-DfQiZ4K_.js";import"./useAnimationId-PEz7c_71.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BiICusyV.js";import"./ActiveShapeUtils-BP0tkgwI.js";import"./RegisterGraphicalItemId-9gLwt1vY.js";import"./ErrorBarContext-B-gFvCKx.js";import"./GraphicalItemClipPath-DuOXc9m5.js";import"./SetGraphicalItem-BFYbkBHm.js";import"./getZIndexFromUnknown-Blk_Ptz7.js";import"./graphicalItemSelectors-CYuNarMa.js";import"./Curve-D_EYdykS.js";import"./step-5js8pNAW.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BJoa2H8O.js";import"./Dot-DBpQmpJD.js";import"./getRadiusAndStrokeWidthFromDot-CDEMAmhz.js";import"./useElementOffset-BSHaZMpy.js";import"./uniqBy-BlE1Djfj.js";import"./iteratee-C3akJ9Jb.js";import"./Cross-oRp7yKgA.js";import"./Sector-B6HCXRpA.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
