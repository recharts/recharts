import{R as t}from"./iframe-BECHMrDZ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-9bvi17Wq.js";import{R as l}from"./zIndexSlice-ZZYOt5ZJ.js";import{C as x}from"./ComposedChart-DEoquINt.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DooUIvHF.js";import{L as a}from"./Line-NU5SWiL4.js";import{X as c}from"./XAxis-Dnf9N0V4.js";import{T as g}from"./Tooltip-DkpUoC0h.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CPwaVA9l.js";import"./CartesianAxis-BTVfzskq.js";import"./Layer-ESOqu-Gc.js";import"./resolveDefaultProps-BtqON1I7.js";import"./Text-C9QSstgR.js";import"./DOMUtils-BMatnmOn.js";import"./isWellBehavedNumber-Zub9mv9t.js";import"./Label-VQOoexxL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-dzP4UBMr.js";import"./index-DsWKibNG.js";import"./index-BdtLPmOn.js";import"./types-n4LQ-b_y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CcmJJV_E.js";import"./immer-DNeblauM.js";import"./RechartsWrapper-DNofag6x.js";import"./index-Cdabc56c.js";import"./index-BHRyfSkK.js";import"./axisSelectors-Do_tBIrF.js";import"./d3-scale-D-I2gAvK.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BmqQmt9e.js";import"./chartDataContext-ievxR12T.js";import"./CategoricalChart-CZw-S4E-.js";import"./tooltipContext-BS8ljBXU.js";import"./AnimatedItems-CQmyu7n-.js";import"./useAnimationId-BT4jYtUB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-De025VPd.js";import"./ActiveShapeUtils-LDykMPUP.js";import"./RegisterGraphicalItemId-DV64Udii.js";import"./ErrorBarContext-D2jpma0H.js";import"./GraphicalItemClipPath-BUhmAU6I.js";import"./SetGraphicalItem-DhkvModl.js";import"./getZIndexFromUnknown-CS8UYbYk.js";import"./graphicalItemSelectors-LrHXndN_.js";import"./Curve-Bn_0oI69.js";import"./step-DbGI_ztS.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cmc10X0Q.js";import"./Dot-C7DD26qy.js";import"./getRadiusAndStrokeWidthFromDot-C9KiXcw0.js";import"./useElementOffset-CcmDvjnC.js";import"./uniqBy-3fDUfdm2.js";import"./iteratee-DRu_ACEH.js";import"./Cross-CN_wglQD.js";import"./Sector-DT-TfJCp.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
