import{R as t}from"./iframe-kr7fVjhm.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BoMreVA5.js";import{R as l}from"./zIndexSlice-BZPaZoVE.js";import{C as x}from"./ComposedChart-C2Jq_jCe.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CC7FIpFT.js";import{L as a}from"./Line-6cFMEXcZ.js";import{X as c}from"./XAxis-DuCvvYgu.js";import{T as g}from"./Tooltip-bxKE_UI1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Clowvj21.js";import"./CartesianAxis-BtEPbzKb.js";import"./Layer-BpeNKyUn.js";import"./resolveDefaultProps-B2SvaHgo.js";import"./Text-DjM5ugTe.js";import"./DOMUtils-C68MxIVY.js";import"./isWellBehavedNumber-Dgwr4Y0K.js";import"./Label-BzX4e21C.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DgDl0x_M.js";import"./index-D2MHq5Hk.js";import"./index-B4gF14t1.js";import"./types-BF09pdOO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DSu7HAeh.js";import"./throttle-D_awpPCx.js";import"./RechartsWrapper-BXLkHwYV.js";import"./index-Bi4GHbSg.js";import"./index-C_7j0jGJ.js";import"./axisSelectors-C6aKDGBg.js";import"./d3-scale-D8KPLyuv.js";import"./CartesianChart-xwjZDYjt.js";import"./chartDataContext-CX_0Naaw.js";import"./CategoricalChart-Bef2xtAx.js";import"./tooltipContext-Q_MtGo3C.js";import"./AnimatedItems-DqhNqm_F.js";import"./useAnimationId-D5l55oDh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DH_b4CsR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcRBgo4o.js";import"./RegisterGraphicalItemId-fKNs0JEp.js";import"./ErrorBarContext-CdB9Q1sE.js";import"./GraphicalItemClipPath-BFOwa2gv.js";import"./SetGraphicalItem-CV-IUFmw.js";import"./getZIndexFromUnknown-owanYJoE.js";import"./graphicalItemSelectors-Dqj-Zp-w.js";import"./Curve-B0z7kkbw.js";import"./step-DhEFjA1U.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DGPf_3U2.js";import"./Dot-B_HKYeQ3.js";import"./getRadiusAndStrokeWidthFromDot-ow-LYvhf.js";import"./useElementOffset-CARKZxzP.js";import"./uniqBy-DyaTa3fk.js";import"./iteratee-Bt60GMeU.js";import"./Cross-DndRbCrP.js";import"./Sector-CM7mo4dd.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
